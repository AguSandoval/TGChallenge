import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import GeraldIcon from '../../components/gerald-icon';
import {BrandColors} from '../../constants';
import DebitCardComponent from '../../components/debit-card';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {HomeStackParamList} from '../../navigation/stack-navigator';
import {StackNavigationProp} from '@react-navigation/stack';

// Its better to define the data outside the component since it doesn't change
// This way, the data is not recreated on every render

// Defines the navigation prop type
type ScreenOneProps = StackNavigationProp<HomeStackParamList, 'Screen1'>;

/**
 * ScreenOne
 * This is the first screen in the app that users see.
 * It contains a brief description of the app and a button to
 * navigate to the next screen
 */
const ScreenOne = () => {
  // Gets the navigate function from useNavigation hook
  // this could've been done with props as well since the navigation prop is passed down from the parent
  const {navigate} = useNavigation<ScreenOneProps>();

  return (
    <View style={styles.screenContainer}>
      <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        style={styles.titleContainer}>
        <Text style={styles.title}>Welcome to</Text>
        <GeraldIcon isDarkMode />
      </Animated.View>

      <Animated.View
        entering={FadeIn.delay(200).duration(500)}
        exiting={FadeOut}
        style={styles.centerContainer}>
        <Text style={styles.subheading}>
          Get an Instant Cash Advance and put your bills on autopilot
        </Text>
        <DebitCardComponent />
        <TouchableOpacity
          style={styles.navigationButton}
          // Navigate to Screen 2 when the button is pressed
          onPress={() => navigate('Screen2')}>
          <Text style={styles.buttonText}>More information</Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        entering={FadeIn.delay(300).duration(500)}
        exiting={FadeOut}>
        <Text style={styles.loremIpsumText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed culpa
          praesentium error explicabo modi. Facere in, vero accusamus
          consectetur nisi dolorum tempora ab praesentium quibusdam pariatur sit
          perferendis adipisci deserunt.
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  title: {
    fontSize: 20,
    color: 'gray',
  },
  centerContainer: {
    gap: 20,
  },
  subheading: {
    textAlign: 'center',
    color: 'gray',
    fontWeight: '600',
  },
  navigationButton: {
    backgroundColor: BrandColors.secondary,
    padding: 16,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loremIpsumText: {
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
  },
});

export default ScreenOne;
