'use client';

import React, { createContext, useContext, useState } from 'react';

interface AppState {
  enhancedContrast: boolean;
  trueTone: boolean;
  blueLight: boolean;
  fontSize: number;
  fontFamily: string;
  setEnhancedContrast: (value: boolean) => void;
  setTrueTone: (value: boolean) => void;
  setBlueLight: (value: boolean) => void;
  setFontSize: (value: number) => void;
  setFontFamily: (value: string) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [enhancedContrast, setEnhancedContrast] = useState(false);
  const [trueTone, setTrueTone] = useState(false);
  const [blueLight, setBlueLight] = useState(false);
  const [fontSize, setFontSizeState] = useState(16);
  const [fontFamily, setFontFamily] = useState('SourceSans3');

  const MIN_FONT_SIZE = 12;
  const MAX_FONT_SIZE = 28;

  const setFontSize = (value: number) => {
    const clampedValue = Math.max(MIN_FONT_SIZE, Math.min(MAX_FONT_SIZE, value));
    setFontSizeState(clampedValue);
  };

  return (
    <AppContext.Provider
      value={{
        enhancedContrast,
        trueTone,
        blueLight,
        fontSize,
        fontFamily,
        setEnhancedContrast,
        setTrueTone,
        setBlueLight,
        setFontSize,
        setFontFamily,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppState => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppStateProvider');
  }
  return context;
};
