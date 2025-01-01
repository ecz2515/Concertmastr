import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { useAppContext } from '@/AppStateProvider';
import { router } from 'expo-router';
import concertData from '@/concert.json';

const imagesToPreload = [
  require('@/assets/images/default_event-image.jpg'),
  require('@/assets/images/default_musician.jpg'),
];

export default function HomeScreen() {
  const { fontFamily, enhancedContrast, fontSize, trueTone, blueLight } = useAppContext();

  useEffect(() => {
    Alert.alert(
      "Shh... Phones on Silent!",
      "To let the music play uninterrupted, please kindly set your mobile phone to silent mode",
      [{ text: "Got it!", onPress: () => console.log("Alert acknowledged") }]
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={
            concertData.image?.startsWith('http')
              ? { uri: concertData.image }
              : require('../../assets/images/default_event-image.jpg')
          }
          style={styles.eventImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.mainContent}>
        <Text
          style={[
            styles.eventTitle,
            { fontSize: fontSize * 1.6, fontFamily: 'DMSans' },
            enhancedContrast && styles.enhancedEventTitle,
          ]}
        >
          {concertData.concertName}
        </Text>
        <Text style={[styles.eventDetails, { fontSize, fontFamily: 'DMSans', fontWeight: '500' }]}>
          {concertData.date} | {concertData.venue} | {concertData.time}
        </Text>
        <Button
          mode="contained"
          style={[styles.button, enhancedContrast && styles.enhancedButton]}
          contentStyle={styles.buttonContent}
          labelStyle={[styles.buttonText, { fontSize, fontFamily: 'DMSans' }]}
          onPress={() => router.push('/program')}
        >
          Concert Program
        </Button>
        <Button
          mode="contained"
          style={[styles.button, enhancedContrast && styles.enhancedButton]}
          contentStyle={styles.buttonContent}
          labelStyle={[styles.buttonText, { fontSize, fontFamily: 'DMSans' }]}
          onPress={() => router.push('/biographies')}
        >
          Biographies
        </Button>
        <Button
          mode="contained"
          style={[styles.button, enhancedContrast && styles.enhancedButton]}
          contentStyle={styles.buttonContent}
          labelStyle={[styles.buttonText, { fontSize, fontFamily: 'DMSans' }]}
          onPress={() => router.push('/program-notes')}
        >
          Program Notes
        </Button>
        <Button
          mode="contained"
          style={[styles.button, enhancedContrast && styles.enhancedButton]}
          contentStyle={styles.buttonContent}
          labelStyle={[styles.buttonText, { fontSize, fontFamily: 'DMSans' }]}
          onPress={() => router.push('/meet-orchestra')}
        >
          Meet the Orchestra
        </Button>
      </View>
      {trueTone && <View style={styles.trueToneOverlay} />}
      {blueLight && <View style={styles.blueLightOverlay} />}
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
    fontFamily: 'DMSans', // Using DM Sans
    fontWeight: '900', // Bold weight
    color: 'white',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  eventDetails: {
    fontFamily: 'DMSans',
    color: 'gray',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500', // Medium weight for readability
  },
  button: {
    backgroundColor: '#333',
    borderRadius: 25,
    marginBottom: 10,
    width: '100%',
  },
  buttonContent: {
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enhancedButton: {
    backgroundColor: '#444',
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    fontFamily: 'DMSans',
    fontSize: 16,
    fontWeight: '600', // Semi-bold for buttons
    color: 'white',
  },
  enhancedEventTitle: {
    textDecorationLine: 'underline',
  },
  trueToneOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 223, 186, 0.4)',
    zIndex: 1,
    pointerEvents: 'none',
  },
  blueLightOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 140, 0, 0.4)',
    zIndex: 1,
    pointerEvents: 'none',
  },
});
