import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from '../../navigation/drawer-navigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, StyleSheet, useColorScheme} from 'react-native';

const NavigationProvider = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.SafeAreaView}>
        <StatusBar barStyle={!isDarkMode ? 'light-content' : 'dark-content'} />
        <DrawerNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
});

export default NavigationProvider;
