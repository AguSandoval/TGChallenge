import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {BrandColors} from '../../constants';
import GeraldIcon from '../../components/gerald-icon';
import {StackNavigationProp} from '@react-navigation/stack';
import {HomeStackParamList} from '../../navigation/stack-navigator';
import {useNavigation} from '@react-navigation/native';

const cardsText = [
  {
    title: 'Privacy',
    content:
      'We believe in digital privacy. All data on Gerald is secured using the highest privacy stands, including multi-factor authentication, to ensure your data is protected at all times.',
  },
  {
    title: 'Compliance',
    content:
      'We stay up to date with state and federal regulatory compliance laws by updating our policies on a regular basis.',
  },
  {
    title: 'Data encryption',
    content:
      'We follow the same security measures as banks. All data on our platform is encrypted at rest and in transit using AES 256 encryption, SSL, and has regular security audits.',
  },
];

type ScreenTwoProps = StackNavigationProp<HomeStackParamList, 'Screen2'>;

/**
 * ScreenTwo
 * This screen contains information about the app's privacy, compliance, and data encryption policies.
 */
const ScreenTwo = () => {
  const navigation = useNavigation<ScreenTwoProps>();

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      return navigation.goBack();
    }
    navigation.navigate('Screen1');
  };

  return (
    <View style={styles.screenContainer}>
      {/* Instead of using the default header back arrow (from stack), I'll create a custom component  */}
      <TouchableOpacity
        onPress={handleGoBack}
        style={styles.backButtonContainer}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        style={styles.titleContainer}>
        <GeraldIcon />
      </Animated.View>

      <Animated.Text
        style={styles.subheading}
        entering={FadeIn.delay(100).duration(200)}
        exiting={FadeOut}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta vero
        obcaecati, beatae, veniam consequuntur animi velit commodi vitae eum
        adipisci similique maxime quidem harum aliquid, incidunt error veritatis
        inventore dolorem.
      </Animated.Text>

      <Animated.View style={styles.cardsContainer} entering={FadeIn}>
        <FlatList
          data={cardsText}
          scrollEnabled={false}
          renderItem={({item, index}) => (
            <Animated.View
              // Delay each card by 100ms multiplied by the index
              entering={FadeIn.delay(200 + index * 100).duration(500)}
              exiting={FadeOut}
              key={item.title}
              style={styles.infoCard}>
              <Text style={styles.infoCardTitle}>{item.title}</Text>
              <Text>{item.content}</Text>
            </Animated.View>
          )}
          keyExtractor={item => item.title}
          contentContainerStyle={styles.flatListContentContainer}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: BrandColors.primary,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    color: 'gray',
  },
  subheading: {
    color: 'white',
    textAlign: 'center',
  },
  flatListContentContainer: {
    gap: 10, // Add gap between each card
  },
  cardsContainer: {
    gap: 10,
    marginTop: 20,
  },
  infoCard: {
    backgroundColor: '#f6fbff95',
    padding: 16,
    borderRadius: 10,
    gap: 10,
    borderWidth: 1,
    borderColor: '#e0e0e040',
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.05,
  },
  infoCardTitle: {
    color: BrandColors.primary,
    fontWeight: 'bold',
    fontSize: 20,
  },
  backButtonContainer: {
    alignSelf: 'flex-start',
    padding: 10,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  backArrow: {color: 'white', fontSize: 24},
});

export default ScreenTwo;
