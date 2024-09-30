import { useNavigation } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function ProgramScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Title */}
        <Text style={styles.title}>Tonight's Program</Text>

        {/* First Program Block */}
        <View style={styles.programBlock}>
          <Text style={styles.composerName}>
            Eleanor Vance <Text style={styles.dates}>(b. 1982)</Text>
          </Text>
          <Text style={styles.workTitle}>
            <Text style={styles.italicText}>Ethereal Landscapes</Text> <Text style={styles.duration}>(6’)</Text>
          </Text>
        </View>

        {/* Second Program Block */}
        <View style={styles.programBlock}>
          <Text style={styles.composerName}>
            Johannes Brahms <Text style={styles.dates}>(1833-1897)</Text>
          </Text>
          <Text style={styles.workTitle}>
            <Text style={styles.italicText}>
              Violin Concerto in D major, Op. 77
            </Text>{' '}
            <Text style={styles.duration}>(24’)</Text>
          </Text>
          <Text style={styles.movement}>I. Allegro non troppo</Text>
          <Text style={styles.movement}>II. Adagio</Text>
          <Text style={styles.movement}>III. Allegro giocoso, ma non troppo vivace</Text>
          <Text style={styles.soloist}>Clara Xu, violin</Text>
        </View>

        {/* Intermission */}
        <Text style={styles.intermission}>~ 15 minute intermission ~</Text>

        {/* Third Program Block */}
        <View style={styles.programBlock}>
          <Text style={styles.composerName}>
            Ludwig van Beethoven <Text style={styles.dates}>(1833-1897)</Text>
          </Text>
          <Text style={styles.workTitle}>
            <Text style={styles.italicText}>Symphony No. 7 in A major, Op. 92</Text> <Text style={styles.duration}>(35’)</Text>
          </Text>
          <Text style={styles.movement}>I. Poco sostenuto - Allegro vivace</Text>
          <Text style={styles.movement}>II. Allegretto</Text>
          <Text style={styles.movement}>III. Presto - Assai meno presto</Text>
          <Text style={styles.movement}>IV. Allegro con brio</Text>
        </View>
      </ScrollView>

      {/* Concertmastr Logo at the Bottom */}
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/CM_logo.png')} // Replace with your logo path
          style={styles.logo}
        />
      </View>
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
  programBlock: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  composerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  dates: {
    fontSize: 16,
    color: 'white',
    fontStyle: 'italic',
  },
  workTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
  italicText: {
    fontStyle: 'italic',
  },
  duration: {
    fontSize: 16,
    color: 'white',
  },
  movement: {
    fontSize: 16,
    color: 'white',
    marginTop: 5,
  },
  soloist: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'white',
    marginTop: 10,
  },
  intermission: {
    fontSize: 16,
    fontStyle: 'italic',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  logoContainer: {
    position: 'absolute',
    bottom: 40, // Stick the logo to the bottom
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
});
