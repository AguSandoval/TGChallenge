import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ContactScreen from '../../screens/contact';
import HomeStackScreen from '../stack-navigator';
import {BrandColors} from '../../constants';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="FeedTab"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: BrandColors.primary,
      }}>
      <Tab.Screen
        name="FeedTab"
        options={{
          title: 'Home',
        }}
        component={HomeStackScreen}
      />
      <Tab.Screen
        name="ContactTab"
        options={{
          title: 'Contact',
        }}
        component={ContactScreen}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
