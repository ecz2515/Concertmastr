import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useAppContext } from '@/AppStateProvider'; // Import global state hook
import concertData from '@/concert.json'; // Import JSON file directly

export default function ProgramScreen() {
  const navigation = useNavigation();
  const { enhancedContrast, fontSize, trueTone, blueLight } = useAppContext();

  const { program, intermissionAfter, intermissionDuration } = concertData;

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView} // Ensure the background color is applied to the scrollable area
      >
        {/* Title */}
        <Text
          style={[
            styles.title,
            { fontSize: fontSize * 1.8 },
            enhancedContrast && styles.enhancedTitle,
          ]}
        >
          Concert Program
        </Text>

        {/* Dynamic Program Blocks */}
        {program.map((piece, index) => (
          <React.Fragment key={index}>
            <View
              style={[
                styles.programBlock,
                enhancedContrast && styles.enhancedProgramBlock,
              ]}
            >
              <Text
                style={[
                  styles.composerName,
                  { fontSize: fontSize * 1.2 },
                  enhancedContrast && styles.enhancedComposerName,
                ]}
              >
                {piece.composer}{' '}
                <Text style={styles.dates}>
                  {piece.born && piece.death
                    ? `(${piece.born} - ${piece.death})`
                    : piece.born
                    ? `(b. ${piece.born})`
                    : ''}
                </Text>
              </Text>
              <Text
                style={[
                  styles.workTitle,
                  { fontSize: fontSize * 1.2 },
                  enhancedContrast && styles.enhancedWorkTitle,
                ]}
              >
                <Text style={styles.italicText}>{piece.pieceName}</Text>{' '}
                <Text style={styles.duration}>({piece.duration})</Text>
              </Text>
              {/* Movements */}
              {piece.movements.map((movement, idx) => (
                <Text
                  key={idx}
                  style={[
                    styles.movement,
                    { fontSize },
                    enhancedContrast && styles.enhancedMovement,
                  ]}
                >
                  {movement}
                </Text>
              ))}
              {/* Soloists */}
              {piece.soloists.length > 0 && (
                <Text
                  style={[
                    styles.soloist,
                    { fontSize },
                    enhancedContrast && styles.enhancedSoloist,
                  ]}
                >
                  {piece.soloists.join(', ')}
                </Text>
              )}
            </View>

            {/* Intermission */}
            {index === intermissionAfter && (
              <Text
                style={[
                  styles.intermission,
                  { fontSize },
                  enhancedContrast && styles.enhancedIntermission,
                ]}
              >
                ~ {intermissionDuration} minute intermission ~
              </Text>
            )}
          </React.Fragment>
        ))}

        {/* Concertmastr Logo at the Bottom */}
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/CM_logo.png')}
            style={styles.logo}
          />
        </View>
      </ScrollView>
      {trueTone && <View style={styles.trueToneOverlay} />}
      {blueLight && <View style={styles.blueLightOverlay} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Ensure full-screen background
  },
  scrollView: {
    backgroundColor: 'black', // Apply the same background color to the scrollable area
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  enhancedTitle: {
    fontWeight: '900',
    textDecorationLine: 'underline',
  },
  programBlock: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  enhancedProgramBlock: {
    backgroundColor: '#444',
    borderWidth: 1,
    borderColor: 'white',
  },
  composerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  enhancedComposerName: {
    fontWeight: '900',
  },
  workTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
  enhancedWorkTitle: {
    fontWeight: '900',
    textShadowColor: '#FFFFFF',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  movement: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  enhancedMovement: {
    fontWeight: '700',
  },
  soloist: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'white',
    marginTop: 10,
  },
  enhancedSoloist: {
    fontWeight: '700',
  },
  intermission: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
    marginTop: 10,
  },
  enhancedIntermission: {
    fontWeight: '700',
  },
  logoContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
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
  },
  dates: {
    color: '#CCC',
    fontWeight: 'normal',
  },
  italicText: {
    fontStyle: 'italic',
  },
  duration: {
    color: '#CCC',
    fontWeight: 'normal',
  },
});
