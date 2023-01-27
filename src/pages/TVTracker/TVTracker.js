// @app
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import Button from '../../components/Button';
import Header from '../../components/Header';
import { Movies } from '../Countdown/Components/Component';
import { _retrieveData } from './Components/Component';

import { styles } from './styles';

const TVTracker = ({ navigation, route }) => {
  const [tvShows, setTvShows] = useState([])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      _retrieveData(setTvShows)
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header title={`TV Tracker`} />
      <View style={{ flex: 1, width: '100%' }}>
        <FlatList
          data={tvShows}
          contentContainerStyle={styles.movieListContainer}
          renderItem={({ item }) => {
            return (
              <Movies
                item={item}
                callBack={() => navigation.navigate('VideoScreen', { id: item?.id, activeTab: 'TV Shows', seasons: true })}
                isEdit={true}
                TVTracker />
            )
          }}
          keyExtractor={item => item.id}
        />

      </View>
      {/* <Text style={styles.noMsgTitle}>{`No Tracked TV Shows.`}</Text> */}
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
