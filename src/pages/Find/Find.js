// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { RFPercentage } from 'react-native-responsive-fontsize';
import {
  useDispatch,
  useSelector
} from 'react-redux';

import Button from '../../components/Button';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Colors from '../../styles/Colors';
import { styles } from './styles';
import {
  getTrendingTvShows,
  getTVtime
} from '../../store/action/action';

const Find = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Movies')
  const [movies, setmovies] = useState([])
  const [shows, setShows] = useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTVtime())
    dispatch(getTrendingTvShows())
  }, [])

  const trandingMovies = useSelector((state) => state.root.trandingMovies);
  const trandingTVShows = useSelector((state) => state.root.trandingTVShows);

  useEffect(() => {
    setmovies(trandingMovies)
    setShows(trandingTVShows)

  }, [trandingMovies, trandingTVShows])

  const searchForMovie = (e) => {
    let keywords = e.split(' ');
    if (keywords[0] === '') {
      setmovies(trandingMovies);
    }
    if (keywords[0] !== '') {
      let searchPattern = new RegExp(
        keywords.map((term) => `(?=.*${term})`).join(''),
        'i'
      );
      let filterChat = [];
      for (let index = 0; index < trandingMovies?.length; index++) {
        filterChat = trandingMovies?.filter((data) => data.title.match(searchPattern));
      }
      setmovies(filterChat);
    }
  };
  const searchForShow = (e) => {
    let keywords = e.split(' ');
    if (keywords[0] === '') setShows(trandingTVShows)
    if (keywords[0] !== '') {
      let searchPattern = new RegExp(
        keywords.map((term) => `(?=.*${term})`).join(''),
        'i'
      );
      let filterChat = [];
      for (let index = 0; index < trandingTVShows?.length; index++) {
        filterChat = trandingTVShows?.filter((data) => data.name.match(searchPattern));
      }
      setShows(filterChat);
    }
  };

  return (
    <View style={styles.container}>
      <Header title={`Find`} />
      <View style={styles.tabContainer}>
        <Button
          customStyle={styles.tabButtonStyle('Movies', activeTab)}
          title={`Movies`}
          titleStyle={styles.tabTitleStyle('Movies')}
          callBack={() => { setActiveTab('Movies') }}
        />
        <Button
          customStyle={styles.tabButtonStyle('TV Shows', activeTab)}
          title={`TV Shows`}
          titleStyle={styles.tabTitleStyle('TV Shows')}
          callBack={() => { setActiveTab('TV Shows') }}
        />
      </View>
      <SearchBar
        callBack={(text) => {
          if (activeTab == 'Movies') searchForMovie(text)
          else searchForShow(text)
        }}
        icon={<Fontisto
          name="search"
          color={Colors.tabInactive}
          size={RFPercentage(2)} />}
        containerStyle={styles.SearchBarStyle}
        placeholderTextColor={Colors.tabInactive}
        placeHolder={`Movies & TV Shows`}
        textStyle={styles.textStyle}
      />
      <Text
        style={styles.listTitle}>{`Coming Soon`}</Text>
      <FlatList
        data={activeTab == 'Movies' ? movies : shows}
        numColumns={2}
        columnWrapperStyle={styles.listContainer}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('VideoScreen', { id: item?.id, activeTab: activeTab })}
              activeOpacity={.8}
              style={styles.thumbnailContainer}>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500/` + item.poster_path }}
                resizeMode={'stretch'}
                style={styles.thumbnailStyle}
              />
              <Button
                customStyle={styles.addIconContainer}
                callBack={() => {}}
                title={<AntDesign
                  name={`plus`}
                  size={RFPercentage(2)}
                  color={Colors.white} />}
              />
            </TouchableOpacity>
          )
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Find;
