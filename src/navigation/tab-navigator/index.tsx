/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ContactScreen from '../../screens/contact';
import HomeStackScreen from '../stack-navigator';
import {BrandColors} from '../../constants';
import {StyleSheet, Text} from 'react-native';

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
          tabBarIcon: () => <Text style={styles.icon}>🏠</Text>,
        }}
        component={HomeStackScreen}
      />
      <Tab.Screen
        name="ContactTab"
        options={{
          title: 'Contact',
          tabBarIcon: () => <Text style={styles.icon}>📞</Text>,
        }}
        component={ContactScreen}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  icon: {
    fontSize: 18,
  },
});

export default TabNavigator;
