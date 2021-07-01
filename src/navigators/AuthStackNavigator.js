import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LogIn, SignUp} from '../activities';

const AuthStack = createStackNavigator();

export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator initialRouteName="login" headerMode="none">
      <AuthStack.Screen name={'signup'} component={SignUp} />
      <AuthStack.Screen name={'login'} component={LogIn} />
    </AuthStack.Navigator>
  );
}
