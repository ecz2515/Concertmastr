import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useAppContext } from '@/AppStateProvider';

export default function BeethovenSymphony7ProgramNotes() {
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
      <Text
        style={[
          styles.sectionTitle,
          { fontSize: fontSize * 1.5 },
          enhancedContrast && styles.enhancedSectionTitle, // Enhanced Contrast for title
        ]}
      >
        Ludwig van Beethoven
      </Text>
      <Text
        style={[
          styles.pieceSubtitle,
          { fontSize: fontSize * 1.2 },
          enhancedContrast && styles.enhancedPieceSubtitle, // Enhanced Contrast for subtitle
        ]}
      >
        Symphony No. 7 in A Major, Op. 92
      </Text>
      <Text
        style={[
          styles.content,
          { fontSize, lineHeight: fontSize * 1.5 },
          enhancedContrast && styles.enhancedContent, // Enhanced Contrast for content
        ]}
      >
        Ludwig van Beethoven's *Symphony No. 7 in A Major* is widely regarded as one of the
        composer's most dynamic and rhythmically compelling works. Premiered on December 8, 1813,
        in Vienna, the symphony was conducted by Beethoven himself and received immediate acclaim.
        {'\n\n'}
        The first movement, *Poco sostenuto - Vivace*, begins with a slow, majestic introduction
        that leads into a lively and spirited theme. This section showcases Beethoven's mastery of
        building intensity and drama through rhythmic drive and harmonic innovation.
        {'\n\n'}
        The second movement, *Allegretto*, is arguably the most famous of the symphony. Its
        somber, repetitive theme unfolds with an almost hypnotic quality, earning it recognition as
        one of Beethoven's most poignant and powerful creations. This movement has been featured
        extensively in popular culture, cementing its legacy beyond the concert hall.
        {'\n\n'}
        The *Presto* third movement provides a stark contrast, bursting with energy and playful
        rhythms. The interplay between the strings and winds creates an infectious sense of joy and
        lightheartedness.
        {'\n\n'}
        The symphony concludes with the *Allegro con brio*, a rousing and exhilarating finale that
        propels the work to its climactic conclusion. The relentless energy and forward momentum of
        this movement embody Beethoven's revolutionary spirit and his unparalleled ability to
        channel raw emotion through music.
        {'\n\n'}
        Often referred to as the "apotheosis of the dance" by Richard Wagner, Beethoven's *Symphony
        No. 7* remains a cornerstone of the symphonic repertoire, celebrated for its rhythmic
        vitality, emotional depth, and timeless appeal.
      </Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  enhancedSectionTitle: {
    fontWeight: '900', // Bolder font weight
    textDecorationLine: 'underline', // Add underline for emphasis
  },
  pieceSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 20,
  },
  enhancedPieceSubtitle: {
    fontWeight: '800', // Bolder font weight for subtitles
    textShadowColor: '#FFFFFF', // Subtle shadow for visibility
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
  },
  enhancedContent: {
    fontWeight: '700', // Bold content for Enhanced Contrast
    textShadowColor: '#FFFFFF', // Subtle shadow for better readability
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
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
  },
});
