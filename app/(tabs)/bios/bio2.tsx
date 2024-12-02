import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useAppContext } from '@/AppStateProvider'; // Import global state hook

export default function bio2() {
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
        Clara Xu
      </Text>
      <Text
        style={[
          styles.pieceSubtitle,
          { fontSize: fontSize * 1.2 },
          enhancedContrast && styles.enhancedPieceSubtitle,
        ]}
      >
        Violinist
      </Text>
      <Image
        source={require('@/assets/headshots/musician2.jpg')}
        style={styles.bioImage}
      />
      <Text
        style={[
          styles.content,
          { fontSize, lineHeight: fontSize * 1.5 },
          enhancedContrast && styles.enhancedContent,
        ]}
      >
        Clara Xu is an internationally acclaimed violinist known for her breathtaking technique and
        deeply expressive performances. Born in Shanghai, China, Xu began playing the violin at the
        age of four. By the time she was seven, she had already performed as a soloist with the
        Shanghai Symphony Orchestra.
        {'\n\n'}
        After moving to the United States, Xu studied at the Curtis Institute of Music under the
        guidance of renowned violinists Pamela Frank and Arnold Steinhardt. Her meteoric rise
        continued as she won first prize at the International Violin Competition of Indianapolis at
        the age of 18, solidifying her status as one of the most exciting young talents of her
        generation.
        {'\n\n'}
        Xu’s playing is often praised for its blend of technical brilliance and emotional depth.
        Critics have described her interpretations of the Romantic violin repertoire, including
        works by Brahms, Tchaikovsky, and Sibelius, as both powerful and poetic. She has also been
        a strong advocate for contemporary music, premiering works by several leading composers of
        our time.
        {'\n\n'}
        In addition to her solo career, Xu is a dedicated chamber musician and a member of the
        award-winning Aurora String Quartet. Her recent performances include a European tour of
        Beethoven’s complete violin sonatas and a recording of Prokofiev’s Violin Concerto No. 2
        with the Boston Symphony Orchestra.
        {'\n\n'}
        Outside of music, Xu is passionate about mentoring young musicians and often gives
        masterclasses at conservatories and universities worldwide. When she isn’t performing, she
        enjoys painting, yoga, and exploring the art museums of the cities she visits.
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
  pieceSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 20,
  },
  enhancedPieceSubtitle: {
    fontWeight: '800', // Bolder font weight for Enhanced Contrast
    textShadowColor: '#FFFFFF', // Subtle shadow to enhance visibility
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
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
