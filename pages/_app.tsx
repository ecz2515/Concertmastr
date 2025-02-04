import React from 'react';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { AppStateProvider } from '../AppStateProvider';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Service Worker registration
    if ('serviceWorker' in navigator) {
      console.log('Service Worker: Supported in this browser');
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js', { scope: '/' })
          .then((registration) => {
            console.log('Service Worker: Registration successful', registration.scope);
            console.log('Service Worker: Active state:', registration.active);
            console.log('Service Worker: Waiting state:', registration.waiting);
            console.log('Service Worker: Installing state:', registration.installing);
          })
          .catch((error) => {
            console.error('Service Worker: Registration failed', error);
          });
      });
    } else {
      console.error('Service Worker: Not supported in this browser');
    }
  }, []);

  return (
    <AppStateProvider>
      <Component {...pageProps} />
    </AppStateProvider>
  );
}
