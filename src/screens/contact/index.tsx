/* eslint-disable curly */
import React, {useCallback, useEffect, useMemo} from 'react';
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ProgressBar from '../../components/progress-bar';
import {BrandColors} from '../../constants';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';

const supportCategories = [
  'General Inquiries',
  'Billing',
  'Partnership',
  'Other',
];

/**
 *  Contact screen (write a brief description)
 *  This screen allows users to contact support by selecting a category
 *  and providing a brief description of their issue.
 *  The screen has 3 steps:
 *    1. Select a category
 *    2. Provide a description
 *    3. Submit the request
 */
const ContactScreen = () => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [selectedCategory, setSelectedCategory] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');

  const handleCategorySelection = useCallback(
    (category: string) => {
      if (!category || currentStep !== 0) return;

      setSelectedCategory(category);
      setCurrentStep(1);
    },
    [currentStep, setSelectedCategory, setCurrentStep],
  );

  const handleSubmitDescription = useCallback(() => {
    if (currentStep !== 1) return;
    setCurrentStep(2);
  }, [currentStep, setCurrentStep]);

  const handleResetForm = useCallback(() => {
    setCurrentStep(0);
    setSelectedCategory('');
    setDescription('');
  }, [setCurrentStep, setSelectedCategory, setDescription]);

  useEffect(() => {
    if (currentStep === 2) {
      setTimeout(() => {
        Alert.alert('Success', 'Your request has been submitted', [
          {
            text: 'OK',
            onPress: handleResetForm,
          },
        ]);
      }, 2000);
    }
  }, [currentStep, handleResetForm]);

  const stepToRender = useMemo(() => {
    switch (currentStep) {
      default:
        return (
          <Animated.FlatList
            entering={FadeIn}
            exiting={FadeOut}
            data={supportCategories}
            numColumns={2}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={() => handleCategorySelection(item)}>
                <Text style={styles.buttonText}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
            contentContainerStyle={styles.flatListContentContainer}
            columnWrapperStyle={styles.columnWrapperStyle}
          />
        );
      case 1:
        return (
          <Animated.View
            entering={FadeIn}
            exiting={FadeOut}
            style={{
              flex: 1,
              gap: 10,
            }}>
            <Text>Please provide a brief description of your issue</Text>
            <TextInput
              multiline
              numberOfLines={4}
              onChangeText={setDescription}
              value={description}
              style={styles.textArea}
            />
            <TouchableOpacity
              onPress={handleSubmitDescription}
              disabled={!description}
              style={[styles.simpleButton, !description && styles.disabled]}>
              <Text style={styles.simpleButtonText}>Submit</Text>
            </TouchableOpacity>
          </Animated.View>
        );
      case 2:
        return <ActivityIndicator size="large" color="coral" />;
    }
  }, [
    currentStep,
    description,
    handleCategorySelection,
    handleSubmitDescription,
  ]);

  const handleGoBack = () => {
    if (currentStep === 0) return;
    setCurrentStep(currentStep - 1);
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerContainer}>
        <ProgressBar currentStep={currentStep} stepsCount={2} />
        {currentStep === 0 ? (
          <Animated.Text
            entering={FadeIn}
            exiting={FadeOut}
            style={styles.headerText}>
            How can we help you today?
          </Animated.Text>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={handleGoBack}
              disabled={currentStep === 0}
              style={styles.backButtonContainer}>
              <Text style={styles.backArrow}>←</Text>
            </TouchableOpacity>
            <Animated.Text
              entering={FadeIn}
              exiting={FadeOut}
              style={styles.headerText}>
              {selectedCategory}
            </Animated.Text>
          </View>
        )}
      </View>

      <View style={styles.bodyContainer}>{stepToRender}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  flatListContentContainer: {
    gap: 10,
  },
  columnWrapperStyle: {
    gap: 10,
  },
  headerContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    gap: 20,
  },
  button: {
    backgroundColor: BrandColors.secondary,
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    width: 170,
    height: 150,
    borderColor: '#e0e0e040',
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    alignSelf: 'center',
    color: BrandColors.primary,
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  backButtonContainer: {
    position: 'absolute',
    left: 0,
  },
  backArrow: {color: BrandColors.primary, fontSize: 24},
  simpleButton: {
    backgroundColor: BrandColors.secondary,
    padding: 16,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  simpleButtonText: {color: 'white', fontWeight: 'bold'},
  textArea: {
    height: 200,
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default ContactScreen;
