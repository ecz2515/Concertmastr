import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAppContext } from '../../AppStateProvider';
import concertData from '../../concert.json';

export default function ArtistBio() {
  const router = useRouter();
  const { id } = router.query;
  const scrollViewRef = useRef<HTMLDivElement>(null);
  const { enhancedContrast, fontSize, trueTone, blueLight } = useAppContext();
  const artist = id ? concertData.artists[Number(id)] : null;

  useEffect(() => {
    // Scroll to top when component mounts
    scrollViewRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!artist) {
    return <p style={styles.errorText}>Artist not found</p>;
  }

  return (
    <div
      ref={scrollViewRef}
      style={{
        ...styles.scrollView,
        ...(enhancedContrast ? styles.enhancedBackground : {}),
      }}
    >
      <div style={styles.container}>
        <div style={styles.centeredContainer}>
          {artist.image && (
            <Image
              src={
                artist.image?.startsWith('http')
                  ? artist.image
                  : '/assets/images/default_musician.jpg'
              }
              alt={`Photo of ${artist.name}`}
              width={150}
              height={150}
              style={styles.bioImage}
            />
          )}
          <h1
            style={{
              ...styles.sectionTitle,
              fontSize: fontSize * 1.5,
              ...(enhancedContrast ? styles.enhancedSectionTitle : {}),
            }}
          >
            {artist.name}
          </h1>
          <p
            style={{
              ...styles.pieceSubtitle,
              fontSize: fontSize * 1.2,
              ...(enhancedContrast ? styles.enhancedPieceSubtitle : {}),
            }}
          >
            {artist.role || ''}
          </p>
        </div>
        <p
          style={{
            ...styles.content,
            fontSize,
            lineHeight: `${fontSize * 1.5}px`,
            ...(enhancedContrast ? styles.enhancedContent : {}),
          }}
        >
          {artist.bio}
        </p>
        {trueTone && <div style={styles.trueToneOverlay} />}
        {blueLight && <div style={styles.blueLightOverlay} />}
      </div>
    </div>
  );
}

const styles = {
  scrollView: {
    flex: 1,
    backgroundColor: 'black',
    minHeight: '100vh',
  },
  enhancedBackground: {
    backgroundColor: '#000000',
  },
  container: {
    padding: '20px',
  },
  centeredContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    marginBottom: '20px',
  },
  bioImage: {
    borderRadius: '75px',
    marginBottom: '10px',
    border: '2px solid white',
    objectFit: 'cover' as const,
  },
  sectionTitle: {
    fontFamily: 'DMSans-Bold',
    color: 'white',
    marginBottom: '5px',
    textAlign: 'center' as const,
  },
  enhancedSectionTitle: {
    fontWeight: '900',
    textDecoration: 'underline',
  },
  pieceSubtitle: {
    fontFamily: 'DMSans-Regular',
    color: 'gray',
    textAlign: 'center' as const,
    marginBottom: '15px',
  },
  content: {
    fontFamily: 'DMSans-Regular',
    color: 'white',
  },
  enhancedContent: {
    fontWeight: '700',
    textShadow: '0 1px 1px #FFFFFF',
  },
  errorText: {
    fontSize: '18px',
    fontFamily: 'DMSans',
    color: 'red',
    textAlign: 'center' as const,
    marginTop: '50px',
  },
  trueToneOverlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 223, 186, 0.4)',
    zIndex: -1,
    pointerEvents: 'none' as const,
  },
  blueLightOverlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 140, 0, 0.4)',
    zIndex: -1,
    pointerEvents: 'none' as const,
  },
  enhancedPieceSubtitle: {
    fontWeight: '800',
    color: 'white',
    textShadow: '0 1px 1px #FFFFFF',
  },
};
