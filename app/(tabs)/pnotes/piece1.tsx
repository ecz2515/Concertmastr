import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function BrahmsProgramNotes() {
  const scrollViewRef = useRef<ScrollView>(null);

  useFocusEffect(
    React.useCallback(() => {
      // Scroll to the top when the screen gains focus
      scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    }, [])
  );

  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.scrollView}
      contentContainerStyle={styles.container}
    >
      <Text style={styles.sectionTitle}>Johannes Brahms</Text>
      <Text style={styles.pieceSubtitle}>Violin Concerto in D Major, Op. 77</Text>
      <Text style={styles.content}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1, // Ensures the ScrollView fills the entire screen
    backgroundColor: 'black', // Keeps the background black
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
  pieceSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
  },
});
