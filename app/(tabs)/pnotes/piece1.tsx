import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useAppContext } from '@/AppStateProvider';

export default function EtherealLandscapesProgramNotes() {
  const scrollViewRef = useRef<ScrollView>(null);
  const { enhancedContrast, fontSize, trueTone, blueLight } = useAppContext();

  useFocusEffect(
    React.useCallback(() => {
      // Scroll to the top when the screen gains focus
      scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    }, [])
  );

  return (
    <ScrollView
      ref={scrollViewRef}
      style={[
        styles.scrollView,
        enhancedContrast && styles.enhancedBackground, // Apply Enhanced Contrast
      ]}
      contentContainerStyle={styles.container}
    >
      {/* Apply dynamic styles */}
      <Text style={[styles.sectionTitle, { fontSize: fontSize * 1.5 }]}>
        Eleanor Vance
      </Text>
      <Text style={[styles.pieceSubtitle, { fontSize: fontSize * 1.2 }]}>
        Ethereal Landscapes
      </Text>
      <Text
        style={[
          styles.content,
          { fontSize, lineHeight: fontSize * 1.5 },
          enhancedContrast && styles.enhancedText, // Enhanced Contrast for text
        ]}
      >
        Eleanor Vance's *Ethereal Landscapes* is a modern composition that invites listeners into a
        vivid auditory world of texture, harmony, and emotional depth. Written in 2022, this piece
        exemplifies the contemporary movement toward immersive soundscapes, blending orchestral
        techniques with electronic elements.
        {'\n\n'}
        The piece opens with *Stillness and Echoes*, a movement that unfolds delicately, featuring
        ethereal strings and sparse piano notes. The use of silence is as important as the sound,
        creating a contemplative space for the audience.
        {'\n\n'}
        The second movement, *Celestial Streams*, introduces electronic textures, weaving them with
        live instrumentation to evoke the sensation of flowing water under a starlit sky. Pulsating
        rhythms and shimmering harmonies create an otherworldly experience.
        {'\n\n'}
        The finale, *Resonant Earth*, grounds the listener with deep, resonant chords and dynamic
        percussive patterns. This movement explores themes of connection and balance, drawing on
        inspiration from natural landscapes and human resilience.
        {'\n\n'}
        Premiered in 2023 at the New York Philharmonic under the baton of conductor Emily Rivera,
        *Ethereal Landscapes* has been praised for its innovative approach to blending the organic
        and the synthetic. The piece continues to inspire audiences with its capacity to transport
        them to a realm beyond the ordinary.
      </Text>
      {/* True Tone and Blue Light overlays */}
      {trueTone && <View style={styles.trueToneOverlay} />}
      {blueLight && <View style={styles.blueLightOverlay} />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: 'black', // Default background
  },
  enhancedBackground: {
    backgroundColor: '#000000', // Stronger black for enhanced contrast
  },
  container: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24, // Scaled dynamically
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  pieceSubtitle: {
    fontSize: 18, // Scaled dynamically
    fontWeight: '600',
    color: 'white',
    marginBottom: 20,
  },
  content: {
    fontSize: 16, // Scaled dynamically
    lineHeight: 24,
    color: 'white',
  },
  enhancedText: {
    color: '#FFFFFF', // Brighter white for enhanced contrast
  },
  trueToneOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 244, 214, 0.2)', // Warm overlay for True Tone
    zIndex: 1,
  },
  blueLightOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 173, 96, 0.2)', // Amber overlay for Blue Light
    zIndex: 1,
  },
});
