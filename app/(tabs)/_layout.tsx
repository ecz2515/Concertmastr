import { Tabs } from 'expo-router';
import { useNavigationState } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import SettingsModal from '@/components/SettingsModal';
import { useEffect } from 'react';

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
  const currentPath = useNavigationState(
    (state) => state?.routes[state.index]?.name // Get the current route's name
  );

  useEffect(() => {
    console.log('Navigated to:', currentPath);
  }, [currentPath]);

  const renderBackButton = () => (
    <TouchableOpacity
      onPress={() => {
        if (currentPath === 'pnotes/piece1') {
        } else if (router.canGoBack()) {
          router.back();
        } else {
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
