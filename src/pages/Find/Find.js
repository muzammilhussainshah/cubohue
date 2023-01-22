// @app
import React, {
  useEffect,
  useState
} from 'react';
import { Text, View } from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import { styles } from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { RFPercentage } from 'react-native-responsive-fontsize';
import Colors from '../../styles/Colors';

const Find = ({ }) => {
  const [activeTab, setActiveTab] = useState('Movies')
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
        icon={<Fontisto name="search" color={Colors.tabInactive} size={RFPercentage(2)} />}
        containerStyle={styles.SearchBarStyle}
        placeholderTextColor={Colors.tabInactive}
        placeHolder={`Movies & TV Shows`}
        textStyle={styles.textStyle}
      />
      <Text style={{
        color: Colors.white,
        fontWeight: '600',
        fontSize: RFPercentage(1.8),
        margin: RFPercentage(1)
      }}>Coming Soon</Text>
    </View>
  );
};
export default Find;
