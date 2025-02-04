import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useAppContext } from '../AppStateProvider';

interface Musician {
  name: string;
  photo?: string;
  position?: string;
}

interface Section {
  title: string;
  data: Musician[];
}

export default function MeetOrchestra() {
  const [groupedMusicians, setGroupedMusicians] = useState<Section[]>([]);
  const { enhancedContrast, fontSize, trueTone, blueLight } = useAppContext();

  useEffect(() => {
    const fetchMusicians = async () => {
      try {
        const response = await fetch('/assets/musicians.json');
        const data = await response.json();
        const groupedData = data.sections.map((section: any) => ({
          title: section.section,
          data: section.musicians,
        }));
        setGroupedMusicians(groupedData);
      } catch (error) {
        console.error('Error fetching musicians data:', error);
        setGroupedMusicians([]);
      }
    };

    fetchMusicians();
  }, []);

  const defaultMusicianImage = "/assets/images/default_musician.jpg";

  const MusicianCard = ({ musician }: { musician: Musician }) => {
    const [imgSrc, setImgSrc] = useState(
      musician.photo
        ? (musician.photo.startsWith('http')
            ? musician.photo
            : `/assets/orchestra_headshots/${musician.photo}`)
        : defaultMusicianImage
    );

    return (
      <div style={{
        ...styles.card,
        ...(enhancedContrast ? styles.enhancedCard : {})
      }}>
        <Image
          src={imgSrc}
          alt={`Photo of ${musician.name}`}
          width={100} 
          height={100}
          priority={true}
          quality={75}
          onError={() => setImgSrc(defaultMusicianImage)}
          style={styles.image}
        />
        <p style={{
          ...styles.name,
          fontSize: fontSize * 1.2,
          ...(enhancedContrast ? styles.enhancedName : {})
        }}>
          {musician.name}
        </p>
        {musician.position && (
          <p style={{
            ...styles.position,
            fontSize: fontSize * 0.9,
            ...(enhancedContrast ? styles.enhancedPosition : {})
          }}>
            {musician.position}
          </p>
        )}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.scrollContainer}>
        {groupedMusicians.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h2 style={{
              ...styles.sectionHeader,
              fontSize: fontSize * 1.5,
              ...(enhancedContrast ? styles.enhancedSectionHeader : {})
            }}>
              {section.title}
            </h2>
            <div style={styles.musiciansGrid}>
              {section.data.map((musician, index) => (
                <MusicianCard 
                  key={`${musician.name}-${index}`}
                  musician={musician}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {trueTone && <div style={styles.trueToneOverlay} />}
      {blueLight && <div style={styles.blueLightOverlay} />}
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#111',
    minHeight: '100vh',
  },
  scrollContainer: {
    padding: '20px',
  },
  sectionHeader: {
    color: 'white',
    fontWeight: 'bold',
    padding: '10px',
    textAlign: 'center' as const,
    marginTop: '15px',
    marginBottom: '10px',
  },
  enhancedSectionHeader: {
    fontWeight: 'bold',
  },
  musiciansGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    padding: '10px',
  },
  card: {
    padding: '10px',
    borderRadius: '15px',
    backgroundColor: '#333',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },
  enhancedCard: {
    backgroundColor: '#444',
    border: '1px solid white',
  },
  image: {
    borderRadius: '50%',
    marginBottom: '10px',
  },
  name: {
    fontFamily: 'DMSans-Regular',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '5px',
    textAlign: 'center' as const,
  },
  enhancedName: {
    fontWeight: '900',
    textShadow: '0 1px 1px #FFFFFF',
  },
  position: {
    color: 'lightgray',
    fontStyle: 'italic',
    textAlign: 'center' as const,
  },
  enhancedPosition: {
    color: 'white',
    fontWeight: 'bold',
  },
  trueToneOverlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 223, 186, 0.4)',
    zIndex: 1,
    pointerEvents: 'none' as const,
  },
  blueLightOverlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 140, 0, 0.4)',
    zIndex: 1,
    pointerEvents: 'none' as const,
  },
};
