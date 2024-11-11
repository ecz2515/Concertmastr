import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import SettingsModal from '@/components/SettingsModal'; // Import the SettingsModal component

const LogoTitle = () => {
  return (
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
};

export default function AppLayout() {
  const navigation = useNavigation<any>();
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

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
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                  name="arrow-back"
                  size={30}
                  color="white"
                  style={{ paddingLeft: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Tabs.Screen
          name="biographies"
          options={{
            title: 'Biographies',
            headerTitle: () => <LogoTitle />,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                  name="arrow-back"
                  size={30}
                  color="white"
                  style={{ paddingLeft: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Tabs.Screen
          name="program-notes"
          options={{
            title: 'Program Notes',
            headerTitle: () => <LogoTitle />,
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                  name="arrow-back"
                  size={30}
                  color="white"
                  style={{ paddingLeft: 15 }}
                />
              </TouchableOpacity>
            ),
          }}
        />

        <Tabs.Screen
          name="program-notes/piece1"
          options={{
            title: 'Brahms Program Notes',
            headerTitle: () => <LogoTitle />,
            headerLeft: () => (
              <TouchableOpacity onPress={() => (navigation as any).navigate('program-notes')}>
                <Ionicons
                  name="arrow-back"
                  size={30}
                  color="white"
                  style={{ paddingLeft: 15 }}
                />
              </TouchableOpacity>
            ),
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
