import React, { createContext, useContext, useState } from 'react';

interface AppState {
  enhancedContrast: boolean;
  trueTone: boolean;
  blueLight: boolean;
  fontSize: number;
  setEnhancedContrast: (value: boolean) => void;
  setTrueTone: (value: boolean) => void;
  setBlueLight: (value: boolean) => void;
  setFontSize: (value: number) => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State variables
  const [enhancedContrast, setEnhancedContrast] = useState(false);
  const [trueTone, setTrueTone] = useState(false);
  const [blueLight, setBlueLight] = useState(false);
  const [fontSize, setFontSize] = useState(16); // Default font size

  return (
    <AppContext.Provider
      value={{
        enhancedContrast,
        trueTone,
        blueLight,
        fontSize,
        setEnhancedContrast,
        setTrueTone,
        setBlueLight,
        setFontSize,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for accessing the context
export const useAppContext = (): AppState => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppStateProvider');
  }
  return context;
};
