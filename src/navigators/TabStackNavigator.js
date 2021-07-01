import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, Profile, Help, BookingList} from '../activities';
const Tab = createBottomTabNavigator();
export function TabStackkNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="bookings" component={BookingList} />
      <Tab.Screen name="help" component={Help} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
}
