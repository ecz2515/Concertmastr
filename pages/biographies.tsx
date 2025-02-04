import { useRouter } from 'next/router';
import Image from 'next/image';
import concertData from '../concert.json'; // Adjust path if needed
import { useAppContext } from '../AppStateProvider'; // Import global state hook

export default function BiographiesScreen() {
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
          Biographies
        </h1>

        {/* Dynamic Biography Blocks */}
        {concertData.artists.map((artist, index) => (
          <div
            key={index}
            style={{
              ...styles.bioBlock,
              ...(enhancedContrast ? styles.enhancedBioBlock : {}),
            }}
            onClick={() =>
              router.push(`/bios/${index}`)
            }
          >
            <Image
              src={
                artist.image?.startsWith('http')
                  ? artist.image // Use remote URL
                  : '/assets/images/default_musician.jpg' // Adjust to Next.js public directory
              }
              alt={`Image of ${artist.name}`}
              width={60}
              height={60}
              style={styles.bioImage}
            />
            <p
              style={{
                ...styles.bioText,
                fontSize,
                ...(enhancedContrast ? styles.enhancedBioText : {}),
              }}
            >
              {artist.name}
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
    alignItems: 'center',
    backgroundColor: 'black',
    color: 'white',
    minHeight: '100vh',
  },
  scrollContainer: {
    padding: '20px',
    width: '100%',
    maxWidth: '800px',
  },
  title: {
    fontFamily: 'DMSans-Bold',
    textAlign: 'center' as const,
    marginBottom: '20px',
  },
  enhancedTitle: {
    fontWeight: '900',
    textDecoration: 'underline',
  },
  bioBlock: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: '25px',
    padding: '20px',
    marginBottom: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  enhancedBioBlock: {
    backgroundColor: '#444',
    border: '1px solid white',
  },
  bioImage: {
    borderRadius: '50%',
    marginRight: '15px',
  },
  bioText: {
    fontFamily: 'DMSans-Regular',
    fontWeight: 'bold',
    flex: 1,
  },
  enhancedBioText: {
    fontWeight: '900',
    textShadow: '1px 1px 2px white',
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
