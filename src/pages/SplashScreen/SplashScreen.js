// @app
import React, {
  useEffect,
  useState
} from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Button from '../../components/Button';
import Header from '../../components/Header';
import Colors from '../../styles/Colors';
import { Movies } from '../Countdown/Components/Component';
import { styles } from './styles';

const SplashScreen = ({ navigation }) => {

  useEffect(() => { setTimeout(() => { navigation.navigate('MyTabs') }, 1000); }, [])

  return (
    <View style={styles.container}>
      <MaterialIcons size={RFPercentage(7)}
        style={{ marginTop: '100%' }}
        name={'settings-input-svideo'} color={Colors.white} />
      <ActivityIndicator size="large" style={{ marginVertical: RFPercentage(5) }} />
      <Text style={styles.loading}>{`Loading...`}</Text>
    </View>
  );
};
export default SplashScreen;
