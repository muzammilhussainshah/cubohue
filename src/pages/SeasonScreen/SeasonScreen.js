// @app
import React, {
  useEffect,
  useState
} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import * as Progress from 'react-native-progress';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Button from '../../components/Button';
import Colors from '../../styles/Colors';
import { styles } from './styles';

const SeasonScreen = ({ navigation, route }) => {
  const [isSelected, setIsSelected] = useState({ [route?.params?.item?.id]: [] })
  const [isSelectAll, setisSelectAll] = useState(true)
  const [getFromAsync, setgetFromAsync] = useState([])

  const dummyData = Array.from({ length: route?.params?.item?.episode_count }, (v, i) => i);

  useEffect(async () => {
    const value = await AsyncStorage.getItem('alreadySeen');
    setgetFromAsync(JSON.parse(value))
    if (typeof JSON.parse(value)[route?.params?.item?.id] !== 'undefined') {
      setIsSelected({ [route?.params?.item?.id]: JSON.parse(value)[route?.params?.item?.id] })
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Button
          callBack={() => navigation.pop()}
          title={<Feather name={`arrow-left`}
            size={RFPercentage(2.7)}
            color={Colors.white} />} />
        <Button
          callBack={async () => {
            setisSelectAll(!isSelectAll)
            if (isSelected[route?.params?.item?.id].length == 0 && isSelectAll) {
              setIsSelected({ [route?.params?.item?.id]: dummyData })
              await AsyncStorage.setItem('alreadySeen', JSON.stringify({ ...getFromAsync, [route?.params?.item?.id]: dummyData }));
            }
            else {
              setIsSelected({ [route?.params?.item?.id]: [] })
              await AsyncStorage.setItem('alreadySeen', JSON.stringify({ ...getFromAsync, [route?.params?.item?.id]: [] }));
            }

          }}
          title={<Text style={styles.selectAll}>{isSelected[route?.params?.item?.id].length > 0 ? `Unselect All` : `Select All`}</Text>} />
      </View>
      <View style={styles.headerContainer}>
        <Progress.Bar
          borderWidth={0}
          unfilledColor={Colors.tabInactive}
          height={RFPercentage(1)}
          progress={isSelected[route?.params?.item?.id].length / route?.params?.item?.episode_count}
          color={`purple`}
          width={RFPercentage(30)} />
        <Text style={styles.selectAll}>{isSelected[route?.params?.item?.id].length + `/` + dummyData?.length}</Text>
      </View>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => {
          let isAlreadySelected = isSelected[route?.params?.item?.id].findIndex((key) => key == item)
          return (
            <TouchableOpacity
              onPress={async () => {
                let copyArr = JSON.parse(JSON.stringify(isSelected));
                if (isAlreadySelected !== -1) { copyArr[route?.params?.item?.id].splice(isAlreadySelected, 1) }
                else { copyArr[route?.params?.item?.id].push(item) }
                await AsyncStorage.setItem('alreadySeen', JSON.stringify({ ...getFromAsync, ...copyArr, }));
                setIsSelected(copyArr)
              }}
              activeOpacity={0.8}
              style={styles.listContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.selectAll}>{`Episode  ` + (Number(item) + 1)}</Text>
                <Text style={styles.date}>{`2022-08-23`}</Text>
              </View>
              <View style={styles.checkContainer}>
                {isAlreadySelected !== -1 ?
                  <AntDesign
                    name={`checkcircle`}
                    color={Colors.skyBlue}
                    size={RFPercentage(2)} />
                  :
                  <Entypo
                    name={`circle`}
                    color={Colors.white}
                    size={RFPercentage(2)} />
                }

              </View>
            </TouchableOpacity>
          )
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default SeasonScreen;
