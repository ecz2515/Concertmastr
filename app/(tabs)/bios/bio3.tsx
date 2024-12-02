import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useAppContext } from '@/AppStateProvider'; // Import global state hook

export default function bio3() {
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
        enhancedContrast && styles.enhancedBackground,
      ]}
      contentContainerStyle={styles.container}
    >
      <Text
        style={[
          styles.sectionTitle,
          { fontSize: fontSize * 1.5 },
          enhancedContrast && styles.enhancedSectionTitle,
        ]}
      >
        New World Philharmonic
      </Text>
      <Image
        source={require('@/assets/headshots/musician3.jpg')}
        style={styles.bioImage}
      />
      <Text
        style={[
          styles.content,
          { fontSize, lineHeight: fontSize * 1.5 },
          enhancedContrast && styles.enhancedContent,
        ]}
      >
        The New World Philharmonic is one of the most prestigious orchestras in the world, renowned
        for its commitment to artistic excellence and its innovative approach to classical music.
        Founded in 1950 and based in New York City, the orchestra has become a cultural cornerstone,
        captivating audiences with its rich sound and dynamic programming.
        {'\n\n'}
        Under the direction of distinguished conductors over the decades, including Victor
        Stoyanov, the New World Philharmonic has performed in the most celebrated concert halls
        worldwide, from Carnegie Hall to the Berlin Philharmonie. The orchestra is celebrated for
        its interpretations of the core classical repertoire, from Beethoven and Brahms to
        Tchaikovsky and Mahler, while also championing the works of contemporary composers.
        {'\n\n'}
        The orchestra's educational initiatives are equally impressive, with programs such as the
        New World Academy, which trains young musicians, and its community outreach concerts that
        bring classical music to underserved communities. These efforts reflect the orchestra's
        dedication to inspiring future generations and making music accessible to all.
        {'\n\n'}
        The New World Philharmonic has an extensive recording history, including Grammy-winning
        performances of Mahler's Symphony No. 5 and Stravinsky's *The Rite of Spring*. Their most
        recent projects include a celebrated interpretation of John Adams's *Harmonielehre* and a
        collaboration with soprano Clara Xu for a recording of Strauss's *Four Last Songs*.
        {'\n\n'}
        With its tradition of excellence and forward-thinking spirit, the New World Philharmonic
        continues to be a leader in the classical music world, bringing unparalleled artistry to
        audiences around the globe.
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
    backgroundColor: '#000000', // Stronger black for Enhanced Contrast
  },
  container: {
    padding: 20,
  },
  bioImage: {
    width: '100%',
    height: 250,
    alignSelf: 'center',
    resizeMode: 'cover',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  enhancedSectionTitle: {
    fontWeight: '900', // Extra bold for Enhanced Contrast
    textDecorationLine: 'underline', // Underline for emphasis
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
  },
  enhancedContent: {
    fontWeight: '700', // Bold text for Enhanced Contrast
    textShadowColor: '#FFFFFF', // Subtle shadow for text
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  trueToneOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 223, 186, 0.4)', // Warm overlay for True Tone
    zIndex: 1,
    pointerEvents: 'none', // Allow interactions through overlay
  },
  blueLightOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 140, 0, 0.4)', // Blue light filter
    zIndex: 1,
    pointerEvents: 'none', // Allow interactions through overlay
  },
});
