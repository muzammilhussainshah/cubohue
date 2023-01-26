// @app
import React, { useState } from 'react';
import {
  FlatList,
  Text,
  View
} from 'react-native';

import Feather from 'react-native-vector-icons/Feather'
import { RFPercentage } from 'react-native-responsive-fontsize';
import * as Progress from 'react-native-progress';

import Button from '../../components/Button';
import Colors from '../../styles/Colors';
import { styles } from './styles';
import { List } from './Components/Component';

const SeasonScreen = ({ navigation }) => {

  const dummyData = [0, 0, 0, 0, 0, 0,]

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Button
          callBack={() => navigation.pop()}
          title={<Feather name={`arrow-left`}
            size={RFPercentage(2.7)}
            color={Colors.white} />} />
        <Button
          callBack={() => { }}
          title={<Text style={styles.selectAll}>{`Select All`}</Text>} />
      </View>
      <View style={styles.headerContainer}>
        <Progress.Bar
          borderWidth={0}
          unfilledColor={Colors.tabInactive}
          height={RFPercentage(1)}
          progress={.43}
          color={`purple`}
          width={RFPercentage(30)} />
        <Text style={styles.selectAll}>{`0/` + dummyData?.length}</Text>
      </View>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => <List />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default SeasonScreen;
