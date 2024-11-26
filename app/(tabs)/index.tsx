import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const imagesToPreload = [
  require('@/assets/images/event-image.jpg'),
  require('@/assets/headshots/musician1.jpg'),
  require('@/assets/headshots/musician2.jpg'),
  require('@/assets/headshots/musician3.jpg'),
];

export default function HomeScreen() {
  const navigation = useNavigation();
  const [isReady, setIsReady] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const totalImages = imagesToPreload.length;

  useEffect(() => {
    const resolvedImages = imagesToPreload.map((image) => Image.resolveAssetSource(image));
    console.log('Resolved images:', resolvedImages);

    if (imagesLoaded === totalImages) {
      console.log('All images loaded successfully!');
      setIsReady(true);
    }
  }, [imagesLoaded]);

  const handleImageLoad = (index: number) => {
    console.log(`Image ${index + 1} loaded successfully.`);
    setImagesLoaded((prev) => prev + 1);
  };

  const handleImageError = (index: number, error: any) => {
    console.error(`Image ${index + 1} failed to load.`, error);
    setImagesLoaded((prev) => prev + 1); // Proceed even if an image fails
  };

  if (!isReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ffffff" />
        <Text style={styles.loadingText}>Loading...</Text>
        <View style={styles.hiddenContainer}>
          {imagesToPreload.map((image, index) => (
            <Image
              key={index}
              source={image}
              onLoad={() => handleImageLoad(index)}
              onError={(error) => handleImageError(index, error)}
              style={styles.hiddenImage} // Offscreen rendering
            />
          ))}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/event-image.jpg')}
          style={styles.eventImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.mainContent}>
        <Text style={styles.eventTitle}>
          A Night of Majesty: Beethoven’s 7th Symphony and Brahms’ Violin Concerto
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log('Navigating to Program');
            router.push('/program');
          }}
        >
          <Text style={styles.buttonText}>Concert Program</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log('Navigating to Biographies');
            router.push('/biographies');
          }}
        >
          <Text style={styles.buttonText}>Biographies</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log('Navigating to Program Notes');
            router.push('/program-notes');
          }}
        >
          <Text style={styles.buttonText}>Program Notes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log('Navigating to Meet the Orchestra');
            router.push('/meet-orchestra');
          }}
        >
          <Text style={styles.buttonText}>Meet the Orchestra</Text>
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
    height: '100%',
  },
  mainContent: {
    paddingHorizontal: 15,
    paddingBottom: 20,
    justifyContent: 'flex-end',
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  loadingText: {
    marginTop: 10,
    color: 'white',
    fontSize: 18,
  },
  hiddenContainer: {
    position: 'absolute',
    top: -1000, // Move offscreen
    left: 0,
    opacity: 0.01,
  },
  hiddenImage: {
    width: 1,
    height: 1,
  },
});
