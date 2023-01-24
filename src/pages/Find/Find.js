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

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTVtime())
    dispatch(getTrendingTvShows())
  }, [])

  const trandingMovies = useSelector((state) => state.root.trandingMovies);
  const trandingTVShows = useSelector((state) => state.root.trandingTVShows);

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
        data={activeTab == 'Movies' ? trandingMovies : trandingTVShows}
        numColumns={2}
        columnWrapperStyle={styles.listContainer}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('VideoScreen')}
              activeOpacity={.8}
              style={styles.thumbnailContainer}>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500/` + item.poster_path }}
                resizeMode={'stretch'}
                style={styles.thumbnailStyle}
              />
              <Button
                customStyle={styles.addIconContainer}
                callBack={() => navigation.navigate('VideoScreen')}
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
