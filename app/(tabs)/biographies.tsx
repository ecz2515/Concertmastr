import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function BiographiesScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Title */}
        <Text style={styles.title}>Biographies</Text>

        {/* First Biography Block */}
        <TouchableOpacity style={styles.bioBlock}>
          <Image
            source={require('@/assets/images/react-logo.png')} // Replace with your image path
            style={styles.bioImage}
          />
          <Text style={styles.bioText}>Victor Stoyanov</Text>
        </TouchableOpacity>

        {/* Second Biography Block */}
        <TouchableOpacity style={styles.bioBlock}>
          <Image
            source={require('@/assets/images/react-logo.png')} // Replace with your image path
            style={styles.bioImage}
          />
          <Text style={styles.bioText}>Clara Xu</Text>
        </TouchableOpacity>

        {/* Third Biography Block */}
        <TouchableOpacity style={styles.bioBlock}>
          <Image
            source={require('@/assets/images/react-logo.png')} // Replace with your image path
            style={styles.bioImage}
          />
          <Text style={styles.bioText}>New World Philharmonic</Text>
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
    alignItems: 'center', // Center the content horizontally
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  bioBlock: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%', // Ensure the block takes the full width of the screen
  },
  bioImage: {
    width: 60,
    height: 60,
    borderRadius: 30, // Circle image
    marginRight: 15,
  },
  bioText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
  },
  logoContainer: {
    position: 'absolute',
    bottom: 40, // Stick it to the bottom
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
});
