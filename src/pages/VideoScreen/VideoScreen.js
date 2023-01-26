// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View
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
  const dispatch = useDispatch()

  const videoDetail = useSelector((state) => state.root.videoDetail);

  useEffect(() => {
    setisMovie(route?.params?.activeTab !== 'TV Shows' ? true : false)
    if (route?.params?.activeTab !== 'TV Shows') dispatch(getMovieDetails(route?.params?.id))
    else dispatch(getTvShowsDetails(route?.params?.id))
  }, [])

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
        plus
        navigation={navigation}
      />
      <ScrollView>

        <Image
          resizeMode='cover'
          source={{ uri: `https://image.tmdb.org/t/p/w500/` + videoDetail?.backdrop_path }}
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
            <Season />
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

          {activeTab == 'Discover' && <Discover />}
          {activeTab == 'Trailer' && <Trailer trailer={videoDetail?.videos?.results} />}
          {activeTab == `Cast & Crew` && <CastAndCrew cast={videoDetail?.credits?.cast && videoDetail?.credits?.cast} />}

        </View>


      </ScrollView>
    </View>
  );
};
export default VideoScreen;
