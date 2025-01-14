import React, { useState, useEffect, useRef } from 'react';
import { SectionList, View, Text, Image, StyleSheet, SectionListData, FlatList } from 'react-native';
import { useAppContext } from '@/AppStateProvider';
import { useFocusEffect } from '@react-navigation/native';

interface Musician {
  name: string;
  photo: string;
  position?: string; // Optional parameter for special roles
}

interface Section {
  title: string;
  data: Musician[];
}

const MeetOrchestra: React.FC = () => {
  const [groupedMusicians, setGroupedMusicians] = useState<Section[]>([]);
  const { enhancedContrast, fontSize, trueTone, blueLight } = useAppContext();

  // Reference for SectionList
  const sectionListRef = useRef<SectionList>(null);

  useEffect(() => {
    const fetchMusicians = async () => {
      const data = require('@/assets/musicians.json');

      // Map sections directly from the JSON
      const groupedData = data.sections.map((section: any) => ({
        title: section.section,
        data: section.musicians
      }));

      setGroupedMusicians(groupedData);
    };

    fetchMusicians();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      if (groupedMusicians.length > 0) {
        sectionListRef.current?.scrollToLocation({
          animated: false,
          sectionIndex: 0,
          itemIndex: 0,
        });
      }
    }, [groupedMusicians])
  );

  const photoMap: { [key: string]: any } = {
    "jing_wang.jpg": require('@/assets/orchestra_headshots/jing_wang.jpg'),
    "leung_kin_fung.jpg": require('@/assets/orchestra_headshots/leung_kin-fung.jpg'),
    "anders_hui.jpg": require('@/assets/orchestra_headshots/anders_hui.jpg'),
    "wang_liang.jpg": require('@/assets/orchestra_headshots/wang_liang.jpg'),
    "ai_jin.jpg": require('@/assets/orchestra_headshots/ai_jin.jpg'),
    "ba_wenjing.jpg": require('@/assets/orchestra_headshots/ba_wenjing.jpg'),
    "cheng_li.jpg": require('@/assets/orchestra_headshots/cheng_li.jpg'),
    "gui_li.jpg": require('@/assets/orchestra_headshots/gui_li.jpg'),
    "jia_shuchen.jpg": require('@/assets/orchestra_headshots/jia_shuchen.jpg'),
    // Default fallback image
    default: require('@/assets/images/default_musician.jpg'),
  };

  const renderMusicianCard = ({ item }: { item: Musician }) => {
    const musicianPhoto = photoMap[item.photo] || photoMap.default;

    return (
      <View style={[styles.card, enhancedContrast && styles.enhancedCard]}>
        <Image source={musicianPhoto} style={styles.image} />
        <Text
          style={[
            styles.name,
            { fontSize: fontSize * 1.2 },
            enhancedContrast && styles.enhancedName,
          ]}
        >
          {item.name}
        </Text>
        {item.position && (
          <Text
            style={[
              styles.position,
              { fontSize: fontSize * 0.9 },
              enhancedContrast && styles.enhancedPosition,
            ]}
          >
            {item.position}
          </Text>
        )}
      </View>
    );
  };

  const renderSectionHeader = ({ section }: { section: SectionListData<Musician> }) => (
    <Text
      style={[
        styles.sectionHeader,
        { fontSize: fontSize * 1.5 },
        enhancedContrast && styles.enhancedSectionHeader,
      ]}
    >
      {section.title}
    </Text>
  );

  const renderSection = ({ section }: { section: SectionListData<Musician> }) => (
    <View>
      {renderSectionHeader({ section })}
      <FlatList
        data={section.data}
        numColumns={2}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={renderMusicianCard}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        ref={sectionListRef}
        sections={groupedMusicians}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={() => null} // Use renderSection for section rendering
        renderSectionHeader={renderSection}
        stickySectionHeadersEnabled={false} // Disable sticky headers
        contentContainerStyle={{ paddingBottom: 20 }}
        bounces={false}
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
  sectionHeader: {
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 10,
  },
  enhancedSectionHeader: {
    fontWeight: 'bold',
  },
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#333',
    alignItems: 'center',
    maxWidth: '45%', // Ensure cards are side-by-side
  },
  enhancedCard: {
    backgroundColor: '#444',
    borderWidth: 1,
    borderColor: 'white',
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
    textAlign: 'center',
  },
  enhancedName: {
    fontWeight: '900',
    textShadowColor: '#FFFFFF',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  position: {
    color: 'lightgray',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  enhancedPosition: {
    color: 'white',
    fontWeight: 'bold',
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
    pointerEvents: 'none',
  },
});

export default MeetOrchestra;
