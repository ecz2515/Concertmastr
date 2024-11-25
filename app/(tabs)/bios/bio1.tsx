import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export default function bio1() {
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
      <Text style={styles.sectionTitle}>Victor Stoyanov</Text>
      <Text style={styles.pieceSubtitle}>Conductor</Text>
      <Image
        source={require('@/assets/headshots/musician1.jpg')} // Replace with your image path
        style={styles.bioImage}
      />
      <Text style={styles.content}>
        Victor Stoyanov is a world-renowned conductor celebrated for his dynamic interpretations and
        profound musical insight. Born in Sofia, Bulgaria, Stoyanov began his musical journey as a
        violinist before discovering his passion for conducting. After completing his studies at
        the Sofia Conservatory, he continued his education at the Juilliard School in New York,
        where he studied under the legendary maestro Leonid Grin.
        {'\n\n'}
        Stoyanov's career took off when he won the prestigious Herbert von Karajan Conducting
        Competition in Berlin. This achievement opened the doors to collaborations with some of the
        most esteemed orchestras in the world, including the Berlin Philharmonic, the Vienna
        Philharmonic, and the Chicago Symphony Orchestra.
        {'\n\n'}
        Known for his charismatic presence on the podium and his meticulous attention to detail,
        Stoyanov has become a favorite among musicians and audiences alike. His repertoire spans
        from the Classical and Romantic eras to contemporary compositions, and he is particularly
        admired for his interpretations of works by Beethoven, Mahler, and Shostakovich.
        {'\n\n'}
        In addition to his conducting career, Stoyanov is a passionate advocate for music education.
        He has led masterclasses around the globe and currently serves as the artistic director of
        the Sofia Youth Orchestra, a program dedicated to nurturing the next generation of musical
        talent.
        {'\n\n'}
        Stoyanov's recent projects include a critically acclaimed recording of Gustav Mahler's
        Symphony No. 2 with the London Symphony Orchestra and an international tour with the Vienna
        Philharmonic. When not conducting, he enjoys hiking in the Bulgarian mountains and
        exploring the culinary traditions of the countries he visits.
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
