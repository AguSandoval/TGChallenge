import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

/**
 * @component DebitCardComponent
 * @description A component that displays the user's wallet balance and other details.
 */
const DebitCardComponent = () => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.yourWalletText}>Your Wallet</Text>
      <Text style={styles.bigText}>$25.48</Text>

      <View style={styles.dualHorizontalContainer}>
        <View style={styles.smallContainer}>
          <View style={styles.whiteCircle}>
            <Text style={styles.arrowUp}>↑</Text>
          </View>
          <View>
            <Text style={styles.whiteText}>PAST BILLS</Text>
            <Text style={styles.whiteText}>$25.48</Text>
          </View>
        </View>

        <View style={styles.dualHorizontalContainer}>
          <View style={styles.smallContainer}>
            <View style={styles.whiteCircle}>
              <Text style={styles.arrowDown}>↓</Text>
            </View>
            <View>
              <Text style={styles.whiteText}>UPCOMING BILLS</Text>
              <Text style={styles.whiteText}>$25.48</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.bandaid}>
        <Text style={styles.bandaidText}>$ 200</Text>
        <Text>available in your overdraft balance →</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 16,
    width: '100%',
    height: 220,
    backgroundColor: '#1d80f2',
    borderRadius: 20,
    gap: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.35,
  },
  yourWalletText: {
    color: 'white',
    opacity: 0.5,
    letterSpacing: 2,
    fontWeight: 'medium',
    fontSize: 12,
  },
  bigText: {
    fontSize: 40,
    fontWeight: '900',
    color: 'white',
  },
  dualHorizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  smallContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  whiteCircle: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  whiteText: {
    color: 'white',
  },
  bandaid: {
    backgroundColor: 'white',
    width: '100%',
    height: 32,
    opacity: 0.5,
    borderRadius: 50,
    marginTop: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 4,
  },
  bandaidText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  arrowUp: {
    color: 'green',
  },
  arrowDown: {
    color: 'red',
  },
});

export default DebitCardComponent;
