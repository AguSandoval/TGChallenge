import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ScreenOne from '../../screens/screen-one';
import ScreenTwo from '../../screens/screen-two';

const HomeStack = createStackNavigator();

// Define the HomeStackParamList type
export type HomeStackParamList = {
  Screen1: undefined;
  Screen2: undefined;
};

const HomeStackScreen = () => (
  <HomeStack.Navigator
    initialRouteName="Screen1"
    screenOptions={{
      headerShown: false,
      cardStyleInterpolator: ({current}) => {
        return {
          cardStyle: {
            opacity: current.progress,
          },
        };
      },
    }}>
    <HomeStack.Screen name="Screen1" component={ScreenOne} />
    <HomeStack.Screen name="Screen2" component={ScreenTwo} />
  </HomeStack.Navigator>
);

export default HomeStackScreen;
