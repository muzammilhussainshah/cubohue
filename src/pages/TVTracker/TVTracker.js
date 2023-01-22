// @app
import React, {
  useEffect,
  useState
} from 'react';
import { Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import { styles } from './styles';

const TVTracker = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title={`TV Tracker`} />
      <Text style={styles.noMsgTitle}>{`No Tracked TV Shows.`}</Text>
      <Button
        customStyle={styles.buttonStyle}
        title={`Add TV Show`}
        titleStyle={styles.titleStyle}
        callBack={() => { }}
      />
    </View>
  );
};
export default TVTracker;
