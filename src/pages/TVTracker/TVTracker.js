// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  FlatList,
  Text,
  View,
  AsyncStorage
} from 'react-native';

import Button from '../../components/Button';
import Header from '../../components/Header';
import { Movies } from '../Countdown/Components/Component';
import { _retrieveData } from './Components/Component';

import { styles } from './styles';

const TVTracker = ({ navigation, route }) => {
  const [tvShows, setTvShows] = useState([])
  const [getFromAsync, setgetFromAsync] = useState([])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      _retrieveData(setTvShows)

      const value = await AsyncStorage.getItem('alreadySeen');
      setgetFromAsync(JSON.parse(value))



    });
    return unsubscribe;
  }, [navigation]);

  // console.log(getFromAsync, 'valuevaluevalue', tvShows)
  return (
    <View style={styles.container}>
      <Header title={`TV Tracker`} />
      {tvShows.length > 0 ?
        <View style={{ flex: 1, width: '100%' }}>
          <FlatList
            data={tvShows}
            contentContainerStyle={styles.movieListContainer}
            renderItem={({ item }) => {
              // console.log(item, 'itemitemitemitem', getFromAsync)
              // let result = item?.seasons?.filter((key) => getFromAsync[key.id])
              // console.log(result, 'resultresult')
              // let result = item.seasons.map((key) => {
              //   if (typeof getFromAsync[key.id] !== 'undefined') return { [key.id]: getFromAsync[key.id] }

              // })

              // console.log(result, 'resultresultresult', item)

              // getFromAsync.map((key) => {
              // })
              // getFromAsync.filter((key) => {key.seasons.filter(() => { })})
              return (
                <Movies
                  item={item}
                  getFromAsync={getFromAsync}
                  callBack={() => navigation.navigate('VideoScreen', { id: item?.id, activeTab: 'TV Shows', seasons: true })}
                  isEdit={true}
                  TVTracker />
              )
            }}
            keyExtractor={item => item.id}
          />

        </View>
        :
        <Text style={styles.noMsgTitle}>{`No Tracked TV Shows.`}</Text>
      }
      <Button
        customStyle={styles.buttonStyle}
        title={`Add TV Show`}
        titleStyle={styles.titleStyle}
        callBack={() => navigation.navigate('Find')}
      />

    </View>
  );
};
export default TVTracker;
