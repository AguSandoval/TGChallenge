import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from '../tab-navigator';
import CustomDrawer from '../../components/custom-drawer';
import {BrandColors} from '../../constants';

const Drawer = createDrawerNavigator();

/**
 * Defines the app's drawer navigation routes.
 */
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'left',
        headerTitleStyle: {
          color: 'gray',
        },
        headerTintColor: 'lightgray',
        headerShadowVisible: false,
        drawerStyle: {
          backgroundColor: BrandColors.primary,
        },
      }}
      drawerContent={CustomDrawer}>
      <Drawer.Screen
        name="Home"
        options={{
          title: 'Home',
        }}
        component={TabNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
