import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useAppContext } from '@/AppStateProvider'; // Import global state hook
import concertData from '@/concert.json'; // Import JSON file

export default function ProgramNotes3() {
  const scrollViewRef = useRef<ScrollView>(null);
  const { enhancedContrast, fontSize, trueTone, blueLight } = useAppContext();

  // Fetch program notes directly for the first piece
  const piece = concertData.program[2]; // Statically fetch the first piece

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
        {piece.composer}
      </Text>
      <Text
        style={[
          styles.pieceSubtitle,
          { fontSize: fontSize * 1.2 },
          enhancedContrast && styles.enhancedPieceSubtitle,
        ]}
      >
        {piece.pieceName}
      </Text>
      <Text
        style={[
          styles.content,
          { fontSize, lineHeight: fontSize * 1.5 },
          enhancedContrast && styles.enhancedContent,
        ]}
      >
        {piece.notes}
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
