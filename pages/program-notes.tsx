import { useRouter } from 'next/router';
import Image from 'next/image';
import concertData from '../concert.json';
import { useAppContext } from '../AppStateProvider';

export default function ProgramScreen() {
  const router = useRouter();
  const { enhancedContrast, fontSize, trueTone, blueLight } = useAppContext();

  return (
    <div style={styles.container}>
      <div style={styles.scrollContainer}>
        {/* Title */}
        <h1
          style={{
            ...styles.title,
            fontSize: fontSize * 1.8,
            ...(enhancedContrast ? styles.enhancedTitle : {}),
          }}
        >
          Program Notes
        </h1>

        {/* Dynamic Program Blocks */}
        {concertData.program.map((piece, index) => (
          <div
            key={index}
            style={{
              ...styles.programBlock,
              ...(enhancedContrast ? styles.enhancedProgramBlock : {}),
            }}
            onClick={() => router.push(`/pnotes/${index}`)}
          >
            <p
              style={{
                ...styles.composerName,
                fontSize: fontSize * 1.2,
                ...(enhancedContrast ? styles.enhancedComposerName : {}),
              }}
            >
              {piece.composer}
            </p>
            <p
              style={{
                ...styles.workTitle,
                fontSize: fontSize * 1.2,
                ...(enhancedContrast ? styles.enhancedWorkTitle : {}),
              }}
            >
              {piece.pieceName}
            </p>
          </div>
        ))}
      </div>

      {/* True Tone and Blue Light Overlays */}
      {trueTone && <div style={styles.trueToneOverlay}></div>}
      {blueLight && <div style={styles.blueLightOverlay}></div>}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as const,
    backgroundColor: 'black',
    minHeight: '100vh',
  },
  scrollContainer: {
    padding: '20px',
  },
  title: {
    fontFamily: 'DMSans-Bold',
    color: 'white',
    textAlign: 'center' as const,
    marginBottom: '20px',
  },
  enhancedTitle: {
    fontWeight: '900',
    textDecoration: 'underline',
  },
  programBlock: {
    backgroundColor: '#333',
    borderRadius: '25px',
    padding: '20px',
    marginBottom: '20px',
    cursor: 'pointer',
  },
  enhancedProgramBlock: {
    backgroundColor: '#444',
    border: '1px solid white',
  },
  composerName: {
    fontFamily: 'DMSans-Italic',
    color: 'white',
  },
  enhancedComposerName: {
    fontWeight: '700',
  },
  workTitle: {
    fontFamily: 'DMSans-Regular',
    fontWeight: 'bold',
    color: 'white',
    marginTop: '5px',
  },
  enhancedWorkTitle: {
    fontWeight: '900',
    textShadow: '0 1px 1px #FFFFFF',
  },
  trueToneOverlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 223, 186, 0.4)',
    zIndex: -1,
  },
  blueLightOverlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 140, 0, 0.4)',
    zIndex: -1,
  },
};
