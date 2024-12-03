import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';
import { useAppContext } from '@/AppStateProvider'; // Import global state hook
import { NativeSyntheticEvent, ImageErrorEventData } from 'react-native';

const imagesToPreload = [
  require('@/assets/images/event-image.jpg'),
  require('@/assets/headshots/musician1.jpg'),
  require('@/assets/headshots/musician2.jpg'),
  require('@/assets/headshots/musician3.jpg'),
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const { enhancedContrast, fontSize, trueTone, blueLight } = useAppContext();

  useEffect(() => {
    // Display an alert to remind users to silence their phones
    Alert.alert(
      "Shh... Phones on Silent!",
      "To let the music play uninterrupted, please kindly set your mobile phone to silent mode",
      [{ text: "Got it!", onPress: () => console.log("Alert acknowledged") }]
    );
  }, []);

  const handleImageLoad = (index: number) => {
    console.log(`Image ${index + 1} loaded successfully.`);
  };

  const handleImageError = (index: number, error: NativeSyntheticEvent<ImageErrorEventData>) => {
    console.error(`Image ${index + 1} failed to load.`, error.nativeEvent);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/event-image.jpg')}
          style={styles.eventImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.mainContent}>
        <Text
          style={[
            styles.eventTitle,
            { fontSize: fontSize * 1.6 },
            enhancedContrast && styles.enhancedEventTitle,
          ]}
        >
          A Night of Majesty: Beethoven’s 7th Symphony and Brahms’ Violin Concerto
        </Text>
        <TouchableOpacity
          style={[styles.button, enhancedContrast && styles.enhancedButton]}
          onPress={() => router.push('/program')}
        >
          <Text
            style={[
              styles.buttonText,
              { fontSize },
              enhancedContrast && styles.enhancedButtonText,
            ]}
          >
            Concert Program
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, enhancedContrast && styles.enhancedButton]}
          onPress={() => router.push('/biographies')}
        >
          <Text
            style={[
              styles.buttonText,
              { fontSize },
              enhancedContrast && styles.enhancedButtonText,
            ]}
          >
            Biographies
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, enhancedContrast && styles.enhancedButton]}
          onPress={() => router.push('/program-notes')}
        >
          <Text
            style={[
              styles.buttonText,
              { fontSize },
              enhancedContrast && styles.enhancedButtonText,
            ]}
          >
            Program Notes
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, enhancedContrast && styles.enhancedButton]}
          onPress={() => router.push('/meet-orchestra')}
        >
          <Text
            style={[
              styles.buttonText,
              { fontSize },
              enhancedContrast && styles.enhancedButtonText,
            ]}
          >
            Meet the Orchestra
          </Text>
        </TouchableOpacity>
      </View>
      {trueTone && <View style={styles.trueToneOverlay} />}
      {blueLight && <View style={styles.blueLightOverlay} />}
      {/* Offscreen image preloading */}
      <View style={styles.hiddenContainer}>
        {imagesToPreload.map((image, index) => (
          <Image
            key={index}
            source={image}
            onLoad={() => handleImageLoad(index)}
            onError={(error: any) => handleImageError(index, error)}
            style={styles.hiddenImage}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
  },
  eventImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  mainContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    justifyContent: 'flex-end',
  },
  eventTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  enhancedEventTitle: {
    fontWeight: '900', // Extra bold for Enhanced Contrast
    textDecorationLine: 'underline', // Underline for emphasis
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  enhancedButton: {
    backgroundColor: '#444', // Slightly brighter for Enhanced Contrast
    borderWidth: 1,
    borderColor: 'white', // Add border for better visibility
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  enhancedButtonText: {
    fontWeight: '900', // Extra bold for Enhanced Contrast
  },
  hiddenContainer: {
    position: 'absolute',
    top: -1000, // Move offscreen
    left: 0,
    opacity: 0.01,
  },
  hiddenImage: {
    width: 1,
    height: 1,
  },
  trueToneOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 223, 186, 0.4)', // Warmer overlay for True Tone
    zIndex: 1,
    pointerEvents: 'none',
  },
  blueLightOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 140, 0, 0.4)', // Richer amber overlay for Blue Light
    zIndex: 1,
    pointerEvents: 'none',
  },
});
