import { useNavigation, useFocusEffect } from 'expo-router';
import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useAppContext } from '@/AppStateProvider'; // Import global state hook
import concertData from '@/concert.json'; // Import JSON file directly

export default function ProgramScreen() {
  const navigation = useNavigation();
  const { enhancedContrast, fontSize, trueTone, blueLight } = useAppContext();
  const scrollViewRef = useRef<ScrollView>(null);

  const { program, intermissionAfter, intermissionDuration } = concertData;

  useFocusEffect(
    React.useCallback(() => {
      // Scroll to top when screen gains focus
      scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    }, [])
  );

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.scrollContainer}
        style={styles.scrollView}
        bounces={false}
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
              {/* Composer Name */}
              <Text
                style={[
                  styles.composerName,
                  { fontSize: fontSize * 1.2 },
                  enhancedContrast && styles.enhancedComposerName,
                ]}
              >
                {piece.composer}{' '}
                <Text
                  style={[
                    styles.dates,
                    { fontSize: fontSize * 1.2 }, // Match composer name font size
                  ]}
                >
                  {piece.born && piece.death
                    ? `(${piece.born} - ${piece.death})`
                    : piece.born
                    ? `(b. ${piece.born})`
                    : ''}
                </Text>
              </Text>

              {/* Piece Title */}
              <Text
                style={[
                  styles.workTitle,
                  { fontSize: fontSize * 1.2 },
                  enhancedContrast && styles.enhancedWorkTitle,
                ]}
              >
                {piece.pieceName}{' '}
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
                <View style={styles.soloistContainer}>
                  {piece.soloists.map(([name, instrument], idx) => (
                    <Text key={idx}>
                      <Text
                        style={[
                          styles.soloistName,
                          { fontSize: fontSize * 1.1 }, // Scale soloist name
                        ]}
                      >
                        {name},
                      </Text>{' '}
                      <Text
                        style={[
                          styles.soloistInstrument,
                          { fontSize: fontSize * 1.0 }, // Scale instrument
                        ]}
                      >
                        {instrument}
                      </Text>
                    </Text>
                  ))}
                </View>
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
      </ScrollView>
      {trueTone && <View style={styles.trueToneOverlay} />}
      {blueLight && <View style={styles.blueLightOverlay} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  scrollView: {
    backgroundColor: 'black',
  },
  scrollContainer: {
    padding: 20,
  },
  title: {
    fontFamily: 'DMSans-Bold',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  enhancedTitle: {
    textDecorationLine: 'underline',
  },
  programBlock: {
    backgroundColor: '#333',
    borderRadius: 25,
    padding: 20,
    marginBottom: 20,
  },
  enhancedProgramBlock: {
    backgroundColor: '#444',
    borderWidth: 1,
    borderColor: 'white',
  },
  composerName: {
    fontFamily: 'DMSans-BoldItalic',
    fontSize: 18,
    color: 'white',
  },
  enhancedComposerName: {
    fontFamily: 'DMSans-BoldItalic',
  },
  dates: {
    fontFamily: 'DMSans-Italic',
    color: '#CCC',
  },
  workTitle: {
    fontFamily: 'DMSans-Bold',
    fontSize: 18,
    color: 'white',
    marginTop: 5,
  },
  enhancedWorkTitle: {
    textShadowColor: '#FFFFFF',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  movement: {
    fontFamily: 'DMSans-Italic',
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  enhancedMovement: {},
  soloistContainer: {
    marginTop: 10,
  },
  soloistName: {
    fontFamily: 'DMSans-SemiBold',
    color: 'white',
  },
  soloistInstrument: {
    fontFamily: 'DMSans-SemiBoldItalic',
    color: 'white',
  },
  intermission: {
    fontFamily: 'DMSans-Italic',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  enhancedIntermission: {},
  duration: {
    fontFamily: 'DMSans-Italic',
    color: '#CCC',
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
});
