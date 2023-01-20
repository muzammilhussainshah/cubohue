import React, { Component } from "react";

import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFPercentage } from 'react-native-responsive-fontsize';

import Colors from '../../styles/Colors';
import TVTracker from '../../pages/TVTracker/TVTracker';
import Find from '../../pages/Find/Find';
import More from '../../pages/More/More';
import Countdown from '../../pages/Countdown/Countdown';

const BottomTab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <BottomTab.Navigator
        initialRouteName="My Profile"

        screenOptions={{
          tabBarActiveTintColor: Colors.white,
          tabBarInactiveTintColor: Colors.tabInactive,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "rgb(45,45,45)",
            paddingVertical: RFPercentage(0.6),
            paddingBottom: Platform.OS == 'ios' ? RFPercentage(3) : RFPercentage(0.5),
            height: Platform.OS == 'ios' ? RFPercentage(9.2) : RFPercentage(10),
          }
        }}

      >
        <BottomTab.Screen
          name="TV Tracker"
          component={TVTracker}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Octicons
                name='home'
                size={RFPercentage(3)}
                color={color} />
            )
          }}
        />
        <BottomTab.Screen
          name="Countdown"
          component={Countdown}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo
                name='browser'
                size={RFPercentage(2.5)}
                color={color} />
            )
          }}
        />
        <BottomTab.Screen
          name="Find"
          component={Find}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name='online-prediction'
                size={RFPercentage(4)}
                style={{ marginBottom: RFPercentage(0) }}
                color={color} />
            )
          }}
        />
        <BottomTab.Screen
          name="More"
          component={More}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo
                name='folder-video'
                size={RFPercentage(3)}
                color={color} />)
          }}
        />


      </BottomTab.Navigator>
    );
  }

}

