import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function bio3() {
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
      <Text style={styles.sectionTitle}>New World Philharmonic</Text>
      <Image
        source={require('@/assets/headshots/musician3.jpg')} // Replace with your image path
        style={styles.bioImage}
      />
      <Text style={styles.content}>
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
