import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function BeethovenSymphony7ProgramNotes() {
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
      <Text style={styles.sectionTitle}>Ludwig van Beethoven</Text>
      <Text style={styles.pieceSubtitle}>Symphony No. 7 in A Major, Op. 92</Text>
      <Text style={styles.content}>
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
