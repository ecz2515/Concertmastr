import { useRouter } from 'expo-router'; // Import the router for navigation
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function ProgramScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Title */}
        <Text style={styles.title}>Program Notes</Text>

        {/* First Program Block */}
        <TouchableOpacity
          style={styles.programBlock}
          onPress={() => router.push('/pnotes/piece1')} // Navigate to Brahms program notes
        >
          <Text style={styles.composerName}>
            Eleanor Vance <Text style={styles.dates}></Text>
          </Text>
          <Text style={styles.workTitle}>
            <Text>Ethereal Landscapes</Text> <Text style={styles.duration}></Text>
          </Text>
        </TouchableOpacity>

        {/* Second Program Block */}
        <TouchableOpacity
          style={styles.programBlock}
          onPress={() => router.push('/pnotes/piece1')} // Navigate to Brahms program notes
        >
          <Text style={styles.composerName}>
            Johannes Brahms <Text style={styles.dates}></Text>
          </Text>
          <Text style={styles.workTitle}>
            <Text>Violin Concerto in D major, Op. 77</Text>{' '}
            <Text style={styles.duration}></Text>
          </Text>
        </TouchableOpacity>

        {/* Third Program Block */}
        <TouchableOpacity
          style={styles.programBlock}
          onPress={() => router.push('/pnotes/piece1')} // Navigate to Brahms program notes
        >
          <Text style={styles.composerName}>
            Ludwig van Beethoven <Text style={styles.dates}></Text>
          </Text>
          <Text style={styles.workTitle}>
            <Text>Symphony No. 7 in A major, Op. 92</Text> <Text style={styles.duration}></Text>
          </Text>
        </TouchableOpacity>
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
    fontStyle: 'italic',
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
