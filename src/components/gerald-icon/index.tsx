/* eslint-disable react-native/no-inline-styles */
import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {BrandColors} from '../../constants';

interface GeraldIconProps {
  isDarkMode?: boolean;
}

/**
 * @component GeraldIcon
 * @param {boolean} isDarkMode - Determines the color of the icon
 * @description A custom component that displays the app's brand icon.
 */
const GeraldIcon: React.FC<GeraldIconProps> = ({isDarkMode}) => {
  return (
    <Text
      style={[
        styles.brandWhite,
        {
          color: isDarkMode ? BrandColors.primary : 'white',
        },
      ]}>
      Gerald
      <Text style={styles.brandDot}>.</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  brandWhite: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial Rounded MT Bold',
  },
  brandDot: {
    color: BrandColors.secondary,
  },
});

export default GeraldIcon;
