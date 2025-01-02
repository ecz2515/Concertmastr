import { useRouter } from 'expo-router'; // Import the router for navigation
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useAppContext } from '@/AppStateProvider'; // Import global state hook
import concertData from '@/concert.json'; // Import JSON file

export default function ProgramScreen() {
  const router = useRouter();
  const { enhancedContrast, fontSize, trueTone, blueLight } = useAppContext(); // Access global states

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
          Program Notes
        </Text>

        {/* Dynamic Program Blocks */}
        {concertData.program.map((piece, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.programBlock,
              enhancedContrast && styles.enhancedProgramBlock,
            ]}
            onPress={() => router.push({ pathname: '/pnotes/[id]', params: { id: index.toString() } })} // Dynamic path for each piece
          >
            <Text
              style={[
                styles.composerName,
                { fontSize: fontSize * 1.2 },
                enhancedContrast && styles.enhancedComposerName,
              ]}
            >
              {piece.composer}{' '}
              {/* <Text style={styles.dates}>
                {piece.born && piece.death
                  ? `(${piece.born} - ${piece.death})`
                  : piece.born
                  ? `(b. ${piece.born})`
                  : ''}
              </Text> */}
            </Text>
            <Text
              style={[
                styles.workTitle,
                { fontSize: fontSize * 1.2 },
                enhancedContrast && styles.enhancedWorkTitle,
              ]}
            >
              <Text>{piece.pieceName}</Text>{' '}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Concertmastr Logo at the Bottom */}
      {/* <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/CM_logo.png')} // Replace with your logo path
          style={styles.logo}
        />
      </View> */}

      {/* True Tone and Blue Light overlays */}
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
  },
  title: {
    fontSize: 30,
    fontFamily: 'DMSans-Bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  enhancedTitle: {
    fontWeight: '900', // Extra bold for Enhanced Contrast
    textDecorationLine: 'underline', // Underline for emphasis
  },
  programBlock: {
    backgroundColor: '#333',
    borderRadius: 25,
    padding: 20,
    marginBottom: 20,
  },
  enhancedProgramBlock: {
    backgroundColor: '#444', // Slightly brighter for Enhanced Contrast
    borderWidth: 1,
    borderColor: 'white', // Add a border for better separation
  },
  composerName: {
    fontSize: 18,
    fontFamily: 'DMSansItalic',
    color: 'white',
  },
  enhancedComposerName: {
    fontWeight: '700', // Bold italic for Enhanced Contrast
  },
  workTitle: {
    fontSize: 18,
    fontFamily: 'DMSans',
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
  enhancedWorkTitle: {
    fontWeight: '900', // Extra bold for Enhanced Contrast
    textShadowColor: '#FFFFFF', // Subtle shadow for visibility
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  duration: {
    fontSize: 16,
    fontFamily: 'DMSans',
    color: 'white',
  },
  logoContainer: {
    position: 'absolute',
    bottom: 40, // Stick the logo to the bottom
    width: '100%',
    alignItems: 'center',
  },
  dates: {
    fontSize: 16,
    fontFamily: 'DMSans',
    color: 'white',
    fontStyle: 'italic',
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
