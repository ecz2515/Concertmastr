import { Tabs } from 'expo-router';
import { useNavigationState } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import SettingsModal from '@/components/SettingsModal';

const LogoTitle = () => (
  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
    <Image
      source={require('@/assets/images/CM_logo.png')}
      style={{ width: 20, height: 20, marginRight: 8 }}
      resizeMode="contain"
    />
    <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white', fontFamily: 'DMSans-Regular' }}>
      Concertmastr
    </Text>
  </View>
);

export default function AppLayout() {
  const router = useRouter();
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const currentPath = useNavigationState((state) => {
    const activeRoute = state?.routes[state.index];
    const nestedState = activeRoute?.state;

    if (nestedState?.routes && nestedState?.index !== undefined) {
      const nestedActiveRoute = nestedState.routes[nestedState.index];
      return nestedActiveRoute?.name;
    }

    return activeRoute?.name || null;
  });

  useEffect(() => {
    console.log('[NAVIGATION]: Current Path ->', currentPath);
  }, [currentPath]);

  const renderBackButton = () => {
    console.log('[BACK BUTTON]: Rendered on Path ->', currentPath);
  
    return (
      <TouchableOpacity
        onPress={() => {
          console.log('[BACK BUTTON]: Pressed on Path ->', currentPath);
  
          if (currentPath?.startsWith('pnotes/')) {
            router.push('/program-notes');
          } else if (currentPath?.startsWith('bios/')) {
            router.push('/biographies');
          } else if (router.canGoBack()) {
            router.back();
          } else {
            router.push('/');
          }
        }}
        hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
      >
        <Ionicons
          name="arrow-back"
          size={24}
          color="white"
          style={{ paddingLeft: 12 }}
        />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: 'black', height: 45 },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          tabBarStyle: { display: 'none' },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => setIsSettingsVisible(true)}
              hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
            >
              <Ionicons
                name="settings-outline"
                size={25}
                color="white"
                style={{ paddingRight: 12 }}
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
          name="pnotes/[id]"
          options={{
            title: 'Program Notes',
            headerTitle: () => <LogoTitle />,
            headerLeft: renderBackButton,
          }}
        />
        <Tabs.Screen
          name="meet-orchestra"
          options={{
            title: 'Meet the Orchestra',
            headerTitle: () => <LogoTitle />,
            headerLeft: renderBackButton,
          }}
        />
        <Tabs.Screen
          name="bios/[id]"
          options={{
            title: 'Biography', 
            headerTitle: () => <LogoTitle />,
            headerLeft: renderBackButton,
          }}
        />
      </Tabs>

      <SettingsModal
        visible={isSettingsVisible}
        onClose={() => setIsSettingsVisible(false)}
      />
    </>
  );
}
