import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useAppContext } from '@/AppStateProvider';
import { useRouter, useLocalSearchParams } from 'expo-router';
import concertData from '@/concert.json';

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
        bounces={false}
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

        {/* Add Image with Default Fallback */}
        <Image
          source={
            piece.image?.startsWith('http')
              ? { uri: piece.image } // Use remote URL if valid
              : require('../../../assets/images/default_piece.png') // Default fallback image
          }
          style={styles.pieceImage}
          onError={() => console.error(`Failed to load image for ${piece.pieceName}: ${piece.image}`)}
        />

        {/* Display Soloists */}
          {piece.soloists && piece.soloists.length > 0 && (
            <Text
              style={[
                styles.soloist,
                { fontSize: fontSize * 1.2 },
                enhancedContrast && styles.enhancedSoloist,
              ]}
            >
              {piece.soloists.map(([name, instrument], index) => (
                <Text key={index}>
                  {name}, {instrument}
                  {index < piece.soloists.length - 1 && '\n'}
                </Text>
              ))}
            </Text>
          )}


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
    fontFamily: 'DMSans-Regular',
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
    fontFamily: 'DMSans-Regular',
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
  pieceImage: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
    resizeMode: 'cover',
    marginBottom: 20,
  },
  soloist: {
    fontSize: 18,
    fontFamily: 'DMSans-Regular',
    fontWeight: '600',
    color: 'lightgray',
    marginBottom: 20,
  },
  enhancedSoloist: {
    fontWeight: '800',
    fontFamily: 'DMSans-Regular',
    color: 'white',
    textShadowColor: '#FFFFFF',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  content: {
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
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
    fontFamily: 'DMSans-Regular',
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
