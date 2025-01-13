import React, { useState, useEffect, useRef } from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';
import { useAppContext } from '@/AppStateProvider'; // Import global state hook
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect

interface Musician {
  name: string;
  instrument: string;
  photo: string;
}

const MeetOrchestra: React.FC = () => {
  const [musicians, setMusicians] = useState<Musician[]>([]);
  const { enhancedContrast, fontSize, trueTone, blueLight } = useAppContext();

  // Reference for FlatList
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    // Load the JSON data
    const fetchMusicians = async () => {
      const data: Musician[] = require('@/assets/musicians.json'); // Adjust path if necessary
      setMusicians(data);
    };
    fetchMusicians();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      // Scroll to top when the component is focused
      flatListRef.current?.scrollToOffset({ animated: false, offset: 0 });
    }, [])
  );

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
    <View style={[styles.card, enhancedContrast && styles.enhancedCard]}>
      <Image source={photoMap[item.photo]} style={styles.image} />
      <Text
        style={[
          styles.name,
          { fontSize: fontSize * 1.2 },
          enhancedContrast && styles.enhancedName,
        ]}
      >
        {item.name}
      </Text>
      <Text
        style={[
          styles.instrument,
          { fontSize },
          enhancedContrast && styles.enhancedInstrument,
        ]}
      >
        {item.instrument}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef} // Attach ref
        data={musicians}
        bounces={false}
        ListHeaderComponent={
          <View>
            <Text
              style={[
                styles.title,
                { fontSize: fontSize * 1.8 },
                enhancedContrast && styles.enhancedTitle,
              ]}
            >
              Meet the Orchestra
            </Text>
            <Text
              style={[
                styles.disclaimer,
                { fontSize: fontSize * 0.9 },
                enhancedContrast && styles.enhancedDisclaimer,
              ]}
            >
              Images feature members of the Hong Kong Philharmonic first violin section, credited
              to hkphil.org. These are for demonstration only and will be replaced with client-provided
              content.
            </Text>
          </View>
        }
        renderItem={renderMusicianCard}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // 2 cards per row
        contentContainerStyle={{ paddingBottom: 20 }} // Ensure padding at bottom
      />
      {trueTone && <View style={styles.trueToneOverlay} />}
      {blueLight && <View style={styles.blueLightOverlay} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#333',
    alignItems: 'center',
    elevation: 4, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  enhancedCard: {
    backgroundColor: '#444',
    borderWidth: 1,
    borderColor: 'white',
  },
  title: {
    fontSize: 24,
    fontFamily: 'DMSans-Bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },
  enhancedTitle: {
    fontWeight: '900',
    textDecorationLine: 'underline',
  },
  disclaimer: {
    fontSize: 14,
    fontFamily: 'DMSans',
    width: '90%',
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
    alignSelf: 'center',
  },
  enhancedDisclaimer: {
    fontWeight: '600',
    color: 'white',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontFamily: 'DMSans',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
    textAlign: 'center', // Center the text
  },
  enhancedName: {
    fontWeight: '900',
    textShadowColor: '#FFFFFF',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  instrument: {
    fontSize: 14,
    fontFamily: 'DMSans',
    color: 'lightgray',
    textAlign: 'center',
  },
  enhancedInstrument: {
    fontWeight: '700',
    color: 'white',
  },
  trueToneOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 223, 186, 0.4)', // Warm overlay for True Tone
    zIndex: 1,
    pointerEvents: 'none', // Allow interactions through overlay
  },
  blueLightOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 140, 0, 0.4)', // Blue light filter
    zIndex: 1,
    pointerEvents: 'none', // Allow interactions through overlay
  },
});

export default MeetOrchestra;
