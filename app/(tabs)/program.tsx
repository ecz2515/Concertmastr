import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useAppContext } from '@/AppStateProvider'; // Import global state hook

export default function ProgramScreen() {
  const navigation = useNavigation();
  const { enhancedContrast, fontSize, trueTone, blueLight } = useAppContext();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Title */}
        <Text
          style={[
            styles.title,
            { fontSize: fontSize * 1.8 },
            enhancedContrast && styles.enhancedTitle,
          ]}
        >
          Tonight's Program
        </Text>

        {/* First Program Block */}
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
            Eleanor Vance <Text style={styles.dates}>(b. 1982)</Text>
          </Text>
          <Text
            style={[
              styles.workTitle,
              { fontSize: fontSize * 1.2 },
              enhancedContrast && styles.enhancedWorkTitle,
            ]}
          >
            <Text style={styles.italicText}>Ethereal Landscapes</Text>{' '}
            <Text style={styles.duration}>(6’)</Text>
          </Text>
        </View>

        {/* Second Program Block */}
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
            Johannes Brahms <Text style={styles.dates}>(1833-1897)</Text>
          </Text>
          <Text
            style={[
              styles.workTitle,
              { fontSize: fontSize * 1.2 },
              enhancedContrast && styles.enhancedWorkTitle,
            ]}
          >
            <Text style={styles.italicText}>
              Violin Concerto in D major, Op. 77
            </Text>{' '}
            <Text style={styles.duration}>(24’)</Text>
          </Text>
          <Text
            style={[
              styles.movement,
              { fontSize },
              enhancedContrast && styles.enhancedMovement,
            ]}
          >
            I. Allegro non troppo
          </Text>
          <Text
            style={[
              styles.movement,
              { fontSize },
              enhancedContrast && styles.enhancedMovement,
            ]}
          >
            II. Adagio
          </Text>
          <Text
            style={[
              styles.movement,
              { fontSize },
              enhancedContrast && styles.enhancedMovement,
            ]}
          >
            III. Allegro giocoso, ma non troppo vivace
          </Text>
          <Text
            style={[
              styles.soloist,
              { fontSize },
              enhancedContrast && styles.enhancedSoloist,
            ]}
          >
            Clara Xu, violin
          </Text>
        </View>

        {/* Intermission */}
        <Text
          style={[
            styles.intermission,
            { fontSize },
            enhancedContrast && styles.enhancedIntermission,
          ]}
        >
          ~ 15 minute intermission ~
        </Text>

        {/* Third Program Block */}
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
            Ludwig van Beethoven <Text style={styles.dates}>(1833-1897)</Text>
          </Text>
          <Text
            style={[
              styles.workTitle,
              { fontSize: fontSize * 1.2 },
              enhancedContrast && styles.enhancedWorkTitle,
            ]}
          >
            <Text style={styles.italicText}>Symphony No. 7 in A major, Op. 92</Text>{' '}
            <Text style={styles.duration}>(35’)</Text>
          </Text>
          <Text
            style={[
              styles.movement,
              { fontSize },
              enhancedContrast && styles.enhancedMovement,
            ]}
          >
            I. Poco sostenuto - Allegro vivace
          </Text>
          <Text
            style={[
              styles.movement,
              { fontSize },
              enhancedContrast && styles.enhancedMovement,
            ]}
          >
            II. Allegretto
          </Text>
          <Text
            style={[
              styles.movement,
              { fontSize },
              enhancedContrast && styles.enhancedMovement,
            ]}
          >
            III. Presto - Assai meno presto
          </Text>
          <Text
            style={[
              styles.movement,
              { fontSize },
              enhancedContrast && styles.enhancedMovement,
            ]}
          >
            IV. Allegro con brio
          </Text>
        </View>
      </ScrollView>

      {/* Concertmastr Logo at the Bottom */}
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/CM_logo.png')}
          style={styles.logo}
        />
      </View>
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
    marginBottom: 20,
  },
  enhancedIntermission: {
    fontWeight: '700',
  },
  logoContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
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
