import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { MD3DarkTheme, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AppStateProvider } from '../AppStateProvider';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // Load DM Sans fonts
  const [loaded] = useFonts({
    DMSans: require('../assets/fonts/DMSans-VariableFont_opsz,wght.ttf'),
    DMSansItalic: require('../assets/fonts/DMSans-Italic-VariableFont_opsz,wght.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const paperTheme = {
    ...MD3DarkTheme,
    fonts: {
      ...MD3DarkTheme.fonts,
      regular: {
        fontFamily: 'DMSans',
        fontWeight: '400', // Regular weight
      },
      medium: {
        fontFamily: 'DMSans',
        fontWeight: '500', // Medium weight
      },
      light: {
        fontFamily: 'DMSans',
        fontWeight: '300', // Light weight
      },
      thin: {
        fontFamily: 'DMSans',
        fontWeight: '200', // Thin weight
      },
      italic: {
        fontFamily: 'DMSansItalic',
        fontWeight: '400', // Italic weight
      },
    },
  };

  const navigationTheme = colorScheme === 'dark' ? NavigationDarkTheme : NavigationDefaultTheme;

  return (
    <AppStateProvider>
      <PaperProvider theme={paperTheme}>
        <ThemeProvider value={navigationTheme}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
        </ThemeProvider>
      </PaperProvider>
    </AppStateProvider>
  );
}
