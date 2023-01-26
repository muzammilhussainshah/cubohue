// @app
import React from 'react';
import { FlatList, View } from 'react-native';

import Button from '../../components/Button';
import Header from '../../components/Header';
import { Movies } from '../Countdown/Components/Component';
import { styles } from './styles';

const TVTracker = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Header title={`TV Tracker`} />
      <View style={{ flex: 1, width: '100%' }}>
        <FlatList
          data={[1, 1, 1, 1]}
          contentContainerStyle={styles.movieListContainer}
          renderItem={({ }) => (<Movies callBack={() => navigation.navigate('VideoScreen', { seasons: true })} isEdit={true} TVTracker />)}
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
