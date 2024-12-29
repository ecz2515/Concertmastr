import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useAppContext } from '@/AppStateProvider'; // Import global state hook
import { useRouter, useLocalSearchParams } from 'expo-router';
import concertData from '@/concert.json'; // Import JSON file

export default function ArtistBio() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const scrollViewRef = useRef<ScrollView>(null);
  const { enhancedContrast, fontSize, trueTone, blueLight } = useAppContext();
  const router = useRouter();
  const artist = concertData.artists[Number(id)]; // Convert id to number

  useFocusEffect(
    React.useCallback(() => {
      // Scroll to the top when the screen gains focus
      scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    }, [])
  );

  if (!artist) {
    return <Text style={styles.errorText}>Artist not found</Text>;
  }

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
        {artist.name}
      </Text>
      <Text
        style={[
          styles.pieceSubtitle,
          { fontSize: fontSize * 1.2 },
          enhancedContrast && styles.enhancedPieceSubtitle,
        ]}
      >
        {artist.role || 'Musician'} {/* Default to 'Musician' if no role */}
      </Text>
      {artist.image && (
        <Image
          source={
            artist.image?.startsWith('http')
              ? { uri: artist.image } // Use remote URL if valid
              : require('../../../assets/images/default_musician.jpg') // Default fallback image
          }
          style={styles.bioImage}
          onError={() =>
            console.error(`Failed to load image for ${artist.name}: ${artist.image}`)
          }
        />
      
      )}
      <Text
        style={[
          styles.content,
          { fontSize, lineHeight: fontSize * 1.5 },
          enhancedContrast && styles.enhancedContent,
        ]}
      >
        {artist.bio}
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
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 50,
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
