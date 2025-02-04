import React from 'react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import SilencePhonesModal from '../components/SilencePhonesModal';
import concertData from '../concert.json';

export default function HomeScreen() {
  const router = useRouter();
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Show the modal when the screen loads
    setModalVisible(true);

    // Register the service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js', { scope: '/' }) // Ensure the scope is set to the root
        .then((registration) => {
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }, []);

  return (
    <div style={styles.container}>
      <SilencePhonesModal
        visible={isModalVisible}
        onDismiss={() => setModalVisible(false)}
      />
      <div style={styles.imageContainer}>
        <Image
          src={concertData.image?.startsWith('http')
            ? concertData.image
            : '/assets/images/default_event-image.jpg'}
          alt="Event Image"
          layout="responsive"
          width={800}
          height={600}
          style={styles.eventImage}
        />
      </div>
      <div style={styles.mainContent}>
        <h1 style={styles.eventTitle}>{concertData.concertName}</h1>
        <p style={styles.eventDetails}>
          {concertData.date} | {concertData.venue} | {concertData.time}
        </p>
        <button style={styles.button} onClick={() => router.push('/program')}>
          Concert Program
        </button>
        <button style={styles.button} onClick={() => router.push('/biographies')}>
          Biographies
        </button>
        <button style={styles.button} onClick={() => router.push('/program-notes')}>
          Program Notes
        </button>
        <button style={styles.button} onClick={() => router.push('/meet-orchestra')}>
          Meet the Orchestra
        </button>
      </div>
      {concertData.trueTone && <div style={styles.trueToneOverlay}></div>}
      {concertData.blueLight && <div style={styles.blueLightOverlay}></div>}
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
    padding: '20px',
  },
  imageContainer: {
    width: '100%',
    maxWidth: '800px',
    marginBottom: '20px',
  },
  eventImage: {
    borderRadius: '8px',
  },
  mainContent: {
    textAlign: 'center' as const,
  },
  eventTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  eventDetails: {
    fontSize: '1rem',
    color: 'gray',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 20px',
    margin: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
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
