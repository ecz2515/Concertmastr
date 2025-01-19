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
    'DMSans-Regular': require('../assets/fonts/DMSans-Regular.ttf'),
    'DMSans-Bold': require('../assets/fonts/DMSans-Bold.ttf'),
    'DMSans-Italic': require('../assets/fonts/DMSans-Italic.ttf'),
    'DMSans-Light': require('../assets/fonts/DMSans-Light.ttf'),
    'DMSans-LightItalic': require('../assets/fonts/DMSans-LightItalic.ttf'),
    'DMSans-Medium': require('../assets/fonts/DMSans-Medium.ttf'),
    'DMSans-MediumItalic': require('../assets/fonts/DMSans-MediumItalic.ttf'),
    'DMSans-SemiBold': require('../assets/fonts/DMSans-SemiBold.ttf'),
    'DMSans-SemiBoldItalic': require('../assets/fonts/DMSans-SemiBoldItalic.ttf'),
    'DMSans-ExtraBold': require('../assets/fonts/DMSans-ExtraBold.ttf'),
    'DMSans-ExtraBoldItalic': require('../assets/fonts/DMSans-ExtraBoldItalic.ttf'),
    'DMSans-Black': require('../assets/fonts/DMSans-Black.ttf'),
    'DMSans-BlackItalic': require('../assets/fonts/DMSans-BlackItalic.ttf'),
    'DMSans-Thin': require('../assets/fonts/DMSans-Thin.ttf'),
    'DMSans-ThinItalic': require('../assets/fonts/DMSans-ThinItalic.ttf'),
    'DMSans-BoldItalic': require('../assets/fonts/DMSans-BoldItalic.ttf'),
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
        fontFamily: 'DMSans-Regular',
        fontWeight: '400',
      },
      medium: {
        fontFamily: 'DMSans-Medium',
        fontWeight: '500',
      },
      bold: {
        fontFamily: 'DMSans-Bold',
        fontWeight: '700',
      },
      light: {
        fontFamily: 'DMSans-Light',
        fontWeight: '300',
      },
      thin: {
        fontFamily: 'DMSans-Thin',
        fontWeight: '100',
      },
      italic: {
        fontFamily: 'DMSans-Italic',
        fontWeight: '400',
      },
      semiBold: {
        fontFamily: 'DMSans-SemiBold',
        fontWeight: '600',
      },
      extraBold: {
        fontFamily: 'DMSans-ExtraBold',
        fontWeight: '800',
      },
      black: {
        fontFamily: 'DMSans-Black',
        fontWeight: '900',
      },
      boldItalic: {
        fontFamily: 'DMSans-BoldItalic',
        fontWeight: '700',
        fontStyle: 'italic',
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
