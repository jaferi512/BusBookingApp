/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

//All Screens Linking
import {
  Home,
  SeatBook,
  TimeSection,
  LogIn,
  SignUp,
  Profile,
  BookingList,
  Help,
} from './src/activities';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './src/navigators/MainStackNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthStackNavigator} from './src/navigators/AuthStackNavigator';
const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="auth" component={AuthStackNavigator} />
        <Stack.Screen name="main" component={MainStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
