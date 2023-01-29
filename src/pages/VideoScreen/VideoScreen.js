// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';


import { RFPercentage } from 'react-native-responsive-fontsize';
import {
  useDispatch,
  useSelector
} from 'react-redux';

import Button from '../../components/Button';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import { styles } from './styles';
import {
  getMovieDetails,
  getTvShowsDetails
} from '../../store/action/action';
import {
  CastAndCrew,
  Discover,
  Season,
  Trailer
} from './Components/Component';

const VideoScreen = ({ navigation, route }) => {
  const [activeTab, setActiveTab] = useState('Cast & Crew')
  const [isMovie, setisMovie] = useState(false)
  const [getFromAsync, setgetFromAsync] = useState([])
  const [getmoviesFromAsync, setgetmoviesFromAsync] = useState([])
  const dispatch = useDispatch()

  const videoDetail = useSelector((state) => state.root.videoDetail);

  useEffect(async () => {
    setisMovie(route?.params?.activeTab !== 'TV Shows' ? true : false)
    if (route?.params?.activeTab !== 'TV Shows') await dispatch(getMovieDetails(route?.params?.id))
    else await dispatch(getTvShowsDetails(route?.params?.id))
  }, [])

  useEffect(async () => {
    const unsubscribe = navigation.addListener('focus', async () => {
      const value = await AsyncStorage.getItem('alreadySeen');
      if (value !== null) setgetFromAsync(JSON.parse(value))
      
      if (route?.params?.activeTab !== 'TV Shows') {

        const movies = await AsyncStorage.getItem('Movies');
        if (movies !== null) setgetmoviesFromAsync(JSON.parse(movies))

      } else {

        const tvShows = await AsyncStorage.getItem('TVShows');
        if (tvShows !== null) setgetmoviesFromAsync(JSON.parse(tvShows))

      }
    });
    return unsubscribe;
  }, [navigation]);
  function toHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return hours + 'h : ' + minutes + 'm'
  }

  return (
    <View style={styles.container}>
      <Header
        goBack
        title={`The Gray Man`}
        plus={getmoviesFromAsync.filter((key) => key.id == videoDetail.id)?.length > 0 ? false : true}
        callBack={async () => {
          let getmoviesFromAsyncCopy = JSON.parse(JSON.stringify(getmoviesFromAsync))
          let getIndex = getmoviesFromAsyncCopy.findIndex((key) => key.id == videoDetail.id)
          if (getIndex !== -1) { getmoviesFromAsyncCopy.splice(getIndex, 1) }
          else { getmoviesFromAsyncCopy.push(videoDetail) }
          if (route?.params?.activeTab !== 'TV Shows') await AsyncStorage.setItem('Movies', JSON.stringify(getmoviesFromAsyncCopy));
          else await AsyncStorage.setItem('TVShows', JSON.stringify(getmoviesFromAsyncCopy));
          setgetmoviesFromAsync(getmoviesFromAsyncCopy)
        }}
        check={getmoviesFromAsync.filter((key) => key.id == videoDetail.id)?.length == 0 ? false : true}
        navigation={navigation}
      />
      <ScrollView>

        <Image
          resizeMode='cover'
          source={videoDetail?.backdrop_path ?
            { uri: `https://image.tmdb.org/t/p/w500/` + videoDetail?.backdrop_path } :
            { uri: `https://image.tmdb.org/t/p/w500/` + videoDetail?.poster_path }}
          style={styles.videoContainer} />
        <View style={styles.bodyContainer}>
          <Text style={styles.title(Colors.white, RFPercentage(2))}>{
            isMovie ?
              videoDetail?.title
              :
              videoDetail?.name
          }</Text>

          {[isMovie ? videoDetail?.release_date : videoDetail?.first_air_date, videoDetail?.runtime ? toHoursAndMinutes(videoDetail?.runtime) : '2h : 2m PG-13']?.map((item) => <Text style={styles.title(Colors.tabInactive, RFPercentage(1.3))}>{item}</Text>)}

          <Text style={styles.title(Colors.white, RFPercentage(1.4), RFPercentage(.1))}>{videoDetail?.overview}</Text>
          {route.params.seasons ?
            <>
              <Text style={styles.title(Colors.white, RFPercentage(2))}>{`Seasons`}</Text>
              {videoDetail?.seasons?.map((item) => <Season getFromAsync={getFromAsync} item={item} callBack={() => navigation.navigate('SeasonScreen', { item })} />)}
            </>
            : <>
              <View style={styles.tags}>

                {videoDetail?.genres?.map((item) => <Button
                  customStyle={styles.tagContainer}
                  titleStyle={styles.tagText}
                  title={item.name} />)}

              </View>
              <Text style={styles.title(Colors.white, RFPercentage(1.3))}>{`Status: ${videoDetail?.status}`}</Text>

              <View style={{ flexDirection: 'row', marginVertical: RFPercentage(.5) }}>

                {[`Cast & Crew`, `Trailer`, `Discover`].map((item) => <Button
                  customStyle={styles.tabButtonStyle(item, activeTab)}
                  title={item}
                  titleStyle={styles.tabTitleStyle(item)}
                  callBack={() => { setActiveTab(item) }}
                />)}

              </View>
            </>
          }
          {!route.params.seasons &&
            <>
              {activeTab == 'Discover' && <Discover />}
              {activeTab == 'Trailer' && <Trailer trailer={videoDetail?.videos?.results} />}
              {activeTab == `Cast & Crew` && <CastAndCrew cast={videoDetail?.credits?.cast && videoDetail?.credits?.cast} />}
            </>
          }

        </View>


      </ScrollView >
    </View >
  );
};
export default VideoScreen;
