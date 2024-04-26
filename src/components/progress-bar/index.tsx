import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {BrandColors} from '../../constants';
import {StyleSheet} from 'react-native';

interface ProgressBarProps {
  stepsCount: number;
  currentStep: number;
}

/**
 * @component ProgressBar
 * @param {number} stepsCount - The total number of steps in the progress bar
 * @param {number} currentStep - The current step in the progress bar
 * @description A custom progress bar component that displays the progress of a multi-step process.
 */
const ProgressBar: React.FC<ProgressBarProps> = ({stepsCount, currentStep}) => {
  const progressWidth = useSharedValue(0);

  const animatedProgressStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(`${progressWidth.value}%`, {
        damping: 100,
        stiffness: 100,
      }),
    };
  });

  useEffect(() => {
    progressWidth.value = (currentStep / stepsCount) * 100;
  }, [stepsCount, currentStep, progressWidth]);

  return (
    <Animated.View style={styles.progressBar}>
      <Animated.View style={[animatedProgressStyle, styles.progress]} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  progressBar: {
    width: '100%',
    height: 5,
    backgroundColor: 'lightgray',
    borderRadius: 50,
    overflow: 'hidden',
  },
  progress: {
    backgroundColor: BrandColors.secondary,
    height: '100%',
  },
});

export default ProgressBar;
