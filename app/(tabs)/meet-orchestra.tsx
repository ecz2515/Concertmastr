import React, { useState, useEffect } from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

interface Musician {
  name: string;
  instrument: string;
  photo: string;
}

const MeetOrchestra: React.FC = () => {
  const [musicians, setMusicians] = useState<Musician[]>([]);

  useEffect(() => {
    // Load the JSON data
    const fetchMusicians = async () => {
      const data: Musician[] = require('@/assets/musicians.json'); // Adjust path if necessary
      setMusicians(data);
    };
    fetchMusicians();
  }, []);

  const renderMusicianCard = ({ item }: { item: Musician }) => (
    <View style={styles.card}>
      <Image source={require('@/assets/images/placeholder-musician.jpg')} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.instrument}>{item.instrument}</Text>
    </View>
  );

  return (
    <FlatList
      data={musicians}
      renderItem={renderMusicianCard}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2} // 2 cards per row
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  instrument: {
    fontSize: 14,
    color: 'lightgray',
  },
});

export default MeetOrchestra;
