import React from 'react';
import { AppProps } from 'next/app';
import { AppStateProvider } from '../AppStateProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppStateProvider>
      <Component {...pageProps} />
    </AppStateProvider>
  );
}
