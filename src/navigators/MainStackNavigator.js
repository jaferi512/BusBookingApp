import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Help,
  TimeSection,
  SeatBook,
  Profile,
  BookingList,
} from '../activities';
const MainStack = createDrawerNavigator();
import Icon from 'react-native-vector-icons/dist/FontAwesome';
//Tabs Start
const Tab = createBottomTabNavigator();
const TabStackScreen = () => (
  <Tab.Navigator
    tabBarOptions={{
      style: {
        backgroundColor: '#101820FF',
      },
      activeTintColor: '#FEE715FF',
      inactiveTintColor: '#FFF',
    }}>
    <Tab.Screen
      name="home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
          <Icon name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Bookings"
      component={BookingList}
      options={{
        tabBarLabel: 'My Bookings',
        tabBarIcon: ({color, size}) => (
          <Icon name="book" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="help"
      component={Help}
      options={{
        tabBarLabel: 'Help',
        tabBarIcon: ({color, size}) => (
          <Icon name="question-circle" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color, size}) => (
          <Icon name="user" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);
//Tabs End

export function MainStackNavigator() {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen
        name={'home'}
        component={TabStackScreen}
        options={{
          title: 'Home',
        }}
      />
      <MainStack.Screen
        name={'profile'}
        component={Profile}
        options={{
          title: 'Profile',
        }}
      />
      <MainStack.Screen
        name={'help'}
        component={Help}
        options={{
          title: 'Help',
        }}
      />
      <MainStack.Screen
        name={'bookings'}
        component={BookingList}
        options={{
          title: 'Bookings',
        }}
      />
    </MainStack.Navigator>
  );
}
