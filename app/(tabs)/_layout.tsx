import { Tabs } from 'expo-router';
import { useNavigationState } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import SettingsModal from '@/components/SettingsModal';

const LogoTitle = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Image
      source={require('@/assets/images/CM_logo.png')}
      style={{ width: 30, height: 30, marginRight: 10 }}
      resizeMode="contain"
    />
    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
      Concertmastr
    </Text>
  </View>
);

export default function AppLayout() {
  const router = useRouter();
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const currentPath = useNavigationState((state) => {
    // Drill into the nested state to derive the active route name
    const activeRoute = state?.routes[state.index];
    const nestedState = activeRoute?.state;

    if (nestedState?.routes && nestedState?.index !== undefined) {
      const nestedActiveRoute = nestedState.routes[nestedState.index];
      return nestedActiveRoute?.name;
    }

    return activeRoute?.name || null;
  });

  // Log the derived currentPath for debugging
  useEffect(() => {
    console.log('[NAVIGATION]: Current Path ->', currentPath);
  }, [currentPath]);

  const renderBackButton = () => {
    console.log('[BACK BUTTON]: Rendered on Path ->', currentPath);

    return (
      <TouchableOpacity
        onPress={() => {
          console.log('[BACK BUTTON]: Pressed on Path ->', currentPath);

          if (currentPath === 'pnotes/piece1') {
            console.log('[BACK BUTTON]: Navigating to /program-notes');
            router.push('/program-notes');
          } else if (router.canGoBack()) {
            console.log('[BACK BUTTON]: Navigating back to previous route');
            router.back();
          } else {
            console.log('[BACK BUTTON]: Navigating to homepage');
            router.push('/');
          }
        }}
      >
        <Ionicons
          name="arrow-back"
          size={30}
          color="white"
          style={{ paddingLeft: 15 }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: 'black' },
          headerTintColor: 'white',
          tabBarStyle: { display: 'none' },
          headerRight: () => (
            <TouchableOpacity onPress={() => setIsSettingsVisible(true)}>
              <Ionicons
                name="settings-outline"
                size={25}
                color="white"
                style={{ paddingRight: 15 }}
              />
            </TouchableOpacity>
          ),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerTitle: () => <LogoTitle />,
          }}
        />
        <Tabs.Screen
          name="program"
          options={{
            title: 'Program',
            headerTitle: () => <LogoTitle />,
            headerLeft: renderBackButton,
          }}
        />
        <Tabs.Screen
          name="biographies"
          options={{
            title: 'Biographies',
            headerTitle: () => <LogoTitle />,
            headerLeft: renderBackButton,
          }}
        />
        <Tabs.Screen
          name="program-notes"
          options={{
            title: 'Program Notes',
            headerTitle: () => <LogoTitle />,
            headerLeft: renderBackButton,
          }}
        />
        <Tabs.Screen
          name="pnotes/piece1"
          options={{
            title: 'Brahms Program Notes',
            headerTitle: () => <LogoTitle />,
            headerLeft: renderBackButton,
          }}
        />
        <Tabs.Screen
          name="meet-orchestra"
          options={{
            title: 'Meet the Orchestra',
            headerTitle: 'Meet the Orchestra',
            headerLeft: renderBackButton,
          }}
        />
      </Tabs>

      {/* Settings Modal */}
      <SettingsModal
        visible={isSettingsVisible}
        onClose={() => setIsSettingsVisible(false)}
      />
    </>
  );
}
