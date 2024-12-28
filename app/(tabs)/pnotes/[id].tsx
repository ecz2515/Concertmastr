import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useAppContext } from '@/AppStateProvider'; // Import global state hook
import { useRouter, useLocalSearchParams } from 'expo-router';
import concertData from '@/concert.json'; // Import JSON file

export default function ProgramNotes() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const scrollViewRef = useRef<ScrollView>(null);
  const { enhancedContrast, fontSize, trueTone, blueLight } = useAppContext();
  const router = useRouter();
  const piece = concertData.program[Number(id)]; // Convert id to number

  useFocusEffect(
    React.useCallback(() => {
      // Scroll to the top when the screen gains focus
      scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    }, [])
  );

  if (!piece) {
    return <Text style={styles.errorText}>Piece not found</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        style={[styles.scrollView, enhancedContrast && styles.enhancedBackground]}
        contentContainerStyle={styles.containerContent}
      >
        <Text
          style={[styles.sectionTitle, { fontSize: fontSize * 1.5 }, enhancedContrast && styles.enhancedSectionTitle]}
        >
          {piece.composer}
        </Text>
        <Text
          style={[styles.pieceSubtitle, { fontSize: fontSize * 1.2 }, enhancedContrast && styles.enhancedPieceSubtitle]}
        >
          {piece.pieceName}
        </Text>
        <Text
          style={[styles.content, { fontSize, lineHeight: fontSize * 1.5 }, enhancedContrast && styles.enhancedContent]}
        >
          {piece.notes}
        </Text>
        {trueTone && <View style={styles.trueToneOverlay} />}
        {blueLight && <View style={styles.blueLightOverlay} />}
      </ScrollView>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'black',
  },
  enhancedBackground: {
    backgroundColor: '#000000',
  },
  containerContent: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  enhancedSectionTitle: {
    fontWeight: '900',
    textDecorationLine: 'underline',
  },
  pieceSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
    marginBottom: 20,
  },
  enhancedPieceSubtitle: {
    fontWeight: '800',
    textShadowColor: '#FFFFFF',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
  },
  enhancedContent: {
    fontWeight: '700',
    textShadowColor: '#FFFFFF',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 50,
  },
  backButton: {
    padding: 10,
    backgroundColor: '#444',
    borderRadius: 5,
    margin: 10,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  trueToneOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 223, 186, 0.4)',
    zIndex: 1,
    pointerEvents: 'none',
  },
  blueLightOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 140, 0, 0.4)',
    zIndex: 1,
    pointerEvents: 'none',
  },
});
