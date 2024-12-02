import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useAppContext } from '@/AppStateProvider'; // Import global state hook

export default function bio1() {
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
        Victor Stoyanov
      </Text>
      <Text
        style={[
          styles.pieceSubtitle,
          { fontSize: fontSize * 1.2 },
          enhancedContrast && styles.enhancedPieceSubtitle,
        ]}
      >
        Conductor
      </Text>
      <Image
        source={require('@/assets/headshots/musician1.jpg')}
        style={styles.bioImage}
      />
      <Text
        style={[
          styles.content,
          { fontSize, lineHeight: fontSize * 1.5 },
          enhancedContrast && styles.enhancedContent,
        ]}
      >
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
