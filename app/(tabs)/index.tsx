import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Event Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/event-image.jpg')} // Replace with event image path
          style={styles.eventImage}
          resizeMode="cover"
        />
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        {/* Event Details */}
        <Text style={styles.eventTitle}>
          A Night of Majesty: Beethoven’s 7th Symphony and Brahms’ Violin Concerto
        </Text>

        {/* Buttons */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Tonight's Program</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Biographies</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Program Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Meet the Orchestra</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Patrons, Sponsors, and Staff</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
  },
  eventImage: {
    flex: 1,
    width: '100%',
    height: '100%', // Ensure the image fills its container
  },
  mainContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    justifyContent: 'flex-end', // Stick content to the bottom
  },
  eventTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
