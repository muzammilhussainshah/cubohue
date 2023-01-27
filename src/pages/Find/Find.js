// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  FlatList,
  Text,
  View
} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto'
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
import {
  SearchForShow,
  SearchForMovie,
  _storeData,
  _storeDataTVShows,
  _retrieveData,
  LISTITEM
} from './Components/Component';

const Find = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Movies')
  const [movies, setmovies] = useState([])
  const [countDown, setcountDown] = useState([])
  const [tvShows, settvShows] = useState([])
  const [shows, setShows] = useState([])

  const dispatch = useDispatch()

  const trandingMovies = useSelector((state) => state.root.trandingMovies);
  const trandingTVShows = useSelector((state) => state.root.trandingTVShows);

  useEffect(() => {
    dispatch(getTVtime())
    dispatch(getTrendingTvShows())
    _retrieveData(setcountDown, settvShows)
  }, [])


  useEffect(() => {
    setmovies(trandingMovies)
    setShows(trandingTVShows)
  }, [trandingMovies, trandingTVShows])


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
          if (activeTab == 'Movies') {
            let filteredData = SearchForMovie(text, trandingMovies)
            setmovies(filteredData);
          }
          else {
            let result = SearchForShow(text, trandingTVShows)
            setShows(result);
          }
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

      <Text style={styles.listTitle}>{`Coming Soon`}</Text>

      <FlatList
        data={activeTab == 'Movies' ? movies : shows}
        numColumns={2}
        columnWrapperStyle={styles.listContainer}
        renderItem={(item) => <LISTITEM
          setcountDown={setcountDown}
          settvShows={settvShows}
          countDown={countDown}
          activeTab={activeTab}
          tvShows={tvShows}
          navigation={navigation}
          {...item}
        />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default Find;
