import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import SplashScreen from '../../pages/SplashScreen/SplashScreen';
import VideoScreen from '../../pages/VideoScreen/VideoScreen';

import MyTabs from './SCBottomTabNavigator';

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='SplashScreen'
    >
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="VideoScreen" component={VideoScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />

      {/* <Stack.Screen name="VideoScreen" component={VideoScreen} />
      <Stack.Screen name="TrendingNews" component={TrendingNews} />
      <Stack.Screen name="MatchNews" component={MatchNews} /> */}
    </Stack.Navigator>
  );
}
