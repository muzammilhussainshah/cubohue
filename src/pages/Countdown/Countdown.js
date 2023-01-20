// @app
import React, {
  useEffect,
  useState
} from 'react';
import { Text } from 'react-native';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';

const Countdown = ({ navigation }) => {
  return (
    <Header
      title={`Countdown`}
      edit
    // leftIcon={<Text style={{ color: Colors.tabActive }}></Text>}
    // rightIcon={<Text style={{ color: Colors.tabActive }}>Edit</Text>}
    />
  );
};
export default Countdown;
