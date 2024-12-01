import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useAppContext } from '@/AppStateProvider'; // Import global state hook

export default function BrahmsProgramNotes() {
  const scrollViewRef = useRef<ScrollView>(null);
  const { enhancedContrast, fontSize, trueTone, blueLight } = useAppContext(); // Access global states

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
      {/* Dynamically scale font sizes */}
      <Text style={[styles.sectionTitle, { fontSize: fontSize * 1.5 }]}>
        Johannes Brahms
      </Text>
      <Text style={[styles.pieceSubtitle, { fontSize: fontSize * 1.2 }]}>
        Violin Concerto in D Major, Op. 77
      </Text>
      <Text
        style={[
          styles.content,
          { fontSize, lineHeight: fontSize * 1.5 }, // Adjust line height based on font size
          enhancedContrast && styles.enhancedText, // Apply Enhanced Contrast for text
        ]}
      >
        Johannes Brahms' Violin Concerto in D Major is a towering masterpiece of the violin
        repertoire and a cornerstone of the Romantic era. Completed in 1878 and dedicated to his
        close friend, the violin virtuoso Joseph Joachim, the concerto is celebrated for its
        symphonic breadth and profound musical depth.
        {'\n\n'}
        The first movement, *Allegro non troppo*, begins with a sweeping orchestral introduction
        that sets the stage for the violin's dramatic entrance. Brahms weaves the soloist and
        orchestra together in a seamless dialogue, with virtuosic passages that challenge the
        performer technically and emotionally.
        {'\n\n'}
        The second movement, *Adagio*, offers a moment of sublime beauty, featuring one of the most
        heartfelt oboe solos in orchestral literature. The violin's lyrical response is a serene
        meditation that contrasts with the intensity of the outer movements.
        {'\n\n'}
        The concerto concludes with the *Allegro giocoso, ma non troppo vivace*—a lively and
        spirited rondo inspired by Hungarian dance rhythms. This finale is a jubilant celebration of
        Brahms' mastery of form and his ability to balance profound emotion with exuberant
        energy.
        {'\n\n'}
        First performed on January 1, 1879, in Leipzig, with Joachim as the soloist and Brahms
        conducting, the concerto received mixed reviews initially but has since become a beloved
        staple of the violin repertoire.
      </Text>
      {/* Add overlays for True Tone and Blue Light */}
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
    backgroundColor: '#000', // Stronger black for enhanced contrast
  },
  container: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24, // Dynamically scaled
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  pieceSubtitle: {
    fontSize: 18, // Dynamically scaled
    fontWeight: '600',
    color: 'white',
    marginBottom: 20,
  },
  content: {
    fontSize: 16, // Dynamically scaled
    lineHeight: 24, // Dynamically scaled
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
