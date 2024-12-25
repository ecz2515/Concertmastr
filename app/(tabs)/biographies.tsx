import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useAppContext } from '@/AppStateProvider'; // Import global state hook
import concertData from '@/concert.json'; // Import JSON file

export default function BiographiesScreen() {
  const router = useRouter();
  const { enhancedContrast, fontSize, trueTone, blueLight } = useAppContext();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Title */}
        <Text
          style={[
            styles.title,
            { fontSize: fontSize * 1.8 },
            enhancedContrast && styles.enhancedTitle,
          ]}
        >
          Biographies
        </Text>

        {/* Static Biography Blocks */}
        <TouchableOpacity
          style={[
            styles.bioBlock,
            enhancedContrast && styles.enhancedBioBlock,
          ]}
          onPress={() => router.push('/bios/bio1')}
        >
          <Image
            source={require('@/assets/headshots/musician1.jpg')}
            style={styles.bioImage}
          />
          <Text
            style={[
              styles.bioText,
              { fontSize },
              enhancedContrast && styles.enhancedBioText,
            ]}
          >
            {concertData.artists[0].name}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.bioBlock,
            enhancedContrast && styles.enhancedBioBlock,
          ]}
          onPress={() => router.push('/bios/bio2')}
        >
          <Image
            source={require('@/assets/headshots/musician2.jpg')}
            style={styles.bioImage}
          />
          <Text
            style={[
              styles.bioText,
              { fontSize },
              enhancedContrast && styles.enhancedBioText,
            ]}
          >
            {concertData.artists[1].name}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.bioBlock,
            enhancedContrast && styles.enhancedBioBlock,
          ]}
          onPress={() => router.push('/bios/bio3')}
        >
          <Image
            source={require('@/assets/headshots/musician3.jpg')}
            style={styles.bioImage}
          />
          <Text
            style={[
              styles.bioText,
              { fontSize },
              enhancedContrast && styles.enhancedBioText,
            ]}
          >
            {concertData.artists[2].name}
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Concertmastr Logo at the Bottom */}
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/CM_logo.png')}
          style={styles.logo}
        />
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
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  enhancedTitle: {
    fontWeight: '900', // Extra bold for Enhanced Contrast
    textDecorationLine: 'underline', // Underline for emphasis
  },
  bioBlock: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  enhancedBioBlock: {
    backgroundColor: '#444', // Slightly brighter for Enhanced Contrast
    borderWidth: 1,
    borderColor: 'white', // Add a border for better visibility
  },
  bioImage: {
    width: 60,
    height: 60,
    borderRadius: 30, // Circle image
    marginRight: 15,
  },
  bioText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
  },
  enhancedBioText: {
    fontWeight: '900', // Extra bold for Enhanced Contrast
    textShadowColor: '#FFFFFF', // Subtle shadow for better readability
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  logoContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
  trueToneOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 223, 186, 0.4)', // Warm overlay for True Tone
    zIndex: 1,
    pointerEvents: 'none',
  },
  blueLightOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 140, 0, 0.4)', // Richer amber for Blue Light
    zIndex: 1,
    pointerEvents: 'none',
  },
});
