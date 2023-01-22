// @app
import React, {
  useEffect,
  useState
} from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import { styles } from './styles';

const Countdown = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header
        title={`Countdown`}
        edit
      />
      <Button
        customStyle={styles.buttonStyle}
        title={`Movies`}
        titleStyle={styles.titleStyle}
        callBack={() => { }}
      />
    </View>
  );
};
export default Countdown;
