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

  const photoMap: { [key: string]: any } = {
    "jing_wang.jpg": require('@/assets/orchestra_headshots/jing_wang.jpg'),
    "leung_kin_fung.jpg": require('@/assets/orchestra_headshots/leung_kin-fung.jpg'), 
    "anders_hui.jpg": require('@/assets/orchestra_headshots/anders_hui.jpg'),
    "wang_liang.jpg": require('@/assets/orchestra_headshots/wang_liang.jpg'),
    "bei_de_gaulle.jpg": require('@/assets/orchestra_headshots/bei_de_gaulle.jpg'),
    "ai_jin.jpg": require('@/assets/orchestra_headshots/ai_jin.jpg'),
    "ba_wenjing.jpg": require('@/assets/orchestra_headshots/ba_wenjing.jpg'),
    "cheng_li.jpg": require('@/assets/orchestra_headshots/cheng_li.jpg'),
    "gui_li.jpg": require('@/assets/orchestra_headshots/gui_li.jpg'),
    "jia_shuchen.jpg": require('@/assets/orchestra_headshots/jia_shuchen.jpg'),
  };
  
  const renderMusicianCard = ({ item }: { item: Musician }) => (
    <View style={styles.card}>
      <Image source={photoMap[item.photo]} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.instrument}>{item.instrument}</Text>
    </View>
  );
  

  return (
    <View style={styles.container}>
      <FlatList
        data={musicians}
        ListHeaderComponent={
          <Text style={styles.disclaimer}>
            Images feature members of the Hong Kong Philharmonic first violin section, credited to hkphil.org. These are for demonstration only and will be replaced with client-provided content.
          </Text>
        }
        renderItem={renderMusicianCard}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // 2 cards per row}
      />
    </View>
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
  disclaimer: {
    fontSize: 14,
    width: '90%',
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'center', // Centers the element horizontally
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
    textAlign: 'center',
  },
});

export default MeetOrchestra;
