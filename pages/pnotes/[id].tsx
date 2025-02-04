import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAppContext } from '../../AppStateProvider';
import concertData from '../../concert.json';

export default function ProgramNotes() {
  const router = useRouter();
  const { id } = router.query;
  const scrollViewRef = useRef<HTMLDivElement>(null);
  const { enhancedContrast, fontSize, trueTone, blueLight } = useAppContext();
  const piece = id ? concertData.program[Number(id)] : null;

  useEffect(() => {
    // Scroll to top when component mounts
    scrollViewRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!piece) {
    return <p style={styles.errorText}>Piece not found</p>;
  }

  return (
    <div style={styles.container}>
      <div
        ref={scrollViewRef}
        style={{
          ...styles.scrollView,
          ...(enhancedContrast ? styles.enhancedBackground : {}),
        }}
      >
        <div style={styles.containerContent}>
          <h1
            style={{
              ...styles.sectionTitle,
              fontSize: fontSize * 1.5,
              ...(enhancedContrast ? styles.enhancedSectionTitle : {}),
            }}
          >
            {piece.composer}
          </h1>
          <h2
            style={{
              ...styles.pieceSubtitle,
              fontSize: fontSize * 1.2,
              ...(enhancedContrast ? styles.enhancedPieceSubtitle : {}),
            }}
          >
            {piece.pieceName}
          </h2>

          {/* Add Image with Default Fallback */}
          <Image
            src={
              piece.image?.startsWith('http')
                ? piece.image
                : '/assets/images/default_piece.png'
            }
            alt={`Image for ${piece.pieceName}`}
            width={800}
            height={400}
            style={styles.pieceImage}
          />

          {/* Display Soloists */}
          {piece.soloists && piece.soloists.length > 0 && (
            <p
              style={{
                ...styles.soloist,
                fontSize: fontSize * 1.2,
                ...(enhancedContrast ? styles.enhancedSoloist : {}),
              }}
            >
              {piece.soloists.map(([name, instrument], index) => (
                <React.Fragment key={index}>
                  {name}, {instrument}
                  {index < piece.soloists.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          )}

          <p
            style={{
              ...styles.content,
              fontSize,
              lineHeight: `${fontSize * 1.5}px`,
              ...(enhancedContrast ? styles.enhancedContent : {}),
            }}
          >
            {piece.notes}
          </p>
          {trueTone && <div style={styles.trueToneOverlay} />}
          {blueLight && <div style={styles.blueLightOverlay} />}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'black',
    minHeight: '100vh',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'black',
  },
  enhancedBackground: {
    backgroundColor: '#000000',
  },
  containerContent: {
    padding: '20px',
  },
  sectionTitle: {
    fontFamily: 'DMSans-Regular',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '20px',
  },
  enhancedSectionTitle: {
    fontWeight: '900',
    textDecoration: 'underline',
  },
  pieceSubtitle: {
    fontFamily: 'DMSans-Regular',
    fontWeight: '600',
    color: 'white',
    marginBottom: '20px',
  },
  enhancedPieceSubtitle: {
    fontWeight: '800',
    textShadow: '0 1px 1px #FFFFFF',
  },
  pieceImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover' as const,
    marginBottom: '20px',
  },
  soloist: {
    fontFamily: 'DMSans-Regular',
    fontWeight: '600',
    color: 'lightgray',
    marginBottom: '20px',
  },
  enhancedSoloist: {
    fontWeight: '800',
    fontFamily: 'DMSans-Regular',
    color: 'white',
    textShadow: '0 1px 1px #FFFFFF',
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
    fontFamily: 'DMSans-Regular',
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
    zIndex: 1,
    pointerEvents: 'none' as const,
  },
  blueLightOverlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 140, 0, 0.4)',
    zIndex: 1,
    pointerEvents: 'none' as const,
  },
};
