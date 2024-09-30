import { Tabs } from 'expo-router';
import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook
import { Ionicons } from '@expo/vector-icons'; // Import an icon for the back button

const LogoTitle = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={require('@/assets/images/CM_logo.png')} // Replace with your logo path
        style={{ width: 30, height: 30, marginRight: 10 }} // Adjust size and styling
        resizeMode="contain"
      />
      <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
        Concertmastr
      </Text>
    </View>
  );
};

export default function AppLayout() {
  const navigation = useNavigation(); // Hook to use navigation in header

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: 'black' }, // Dark background for header
        headerTintColor: 'white', // White icon color for header (hamburger menu)
        tabBarStyle: { display: 'none' }, // Hide the tab bar globally
      }}
    >
      {/* Define Home screen */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle: () => <LogoTitle />, // Custom component with logo and title
        }}
      />

      {/* Define Program screen */}
      <Tabs.Screen
        name="program"
        options={{
          title: 'Program',
          headerTitle: () => <LogoTitle />, // Custom component with logo and title
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={30}
                color="white"
                style={{ paddingLeft: 15 }}
              />
            </TouchableOpacity>
          ), // Add a back button that navigates back to the home screen
        }}
      />

      {/* Define Biographies screen */}
      <Tabs.Screen
        name="biographies"
        options={{
          title: 'Biographies',
          headerTitle: () => <LogoTitle />, // Custom component with logo and title
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={30}
                color="white"
                style={{ paddingLeft: 15 }}
              />
            </TouchableOpacity>
          ), // Add a back button that navigates back to the home screen
        }}
      />

      {/* Define Program Notes screen */}
      <Tabs.Screen
        name="program-notes"
        options={{
          title: 'Program Notes',
          headerTitle: () => <LogoTitle />, // Custom component with logo and title
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons 
                name="arrow-back"
                size={30}
                color="white"
                style={{ paddingLeft: 15 }}
              />
            </TouchableOpacity>
          ), // Add a back button that navigates back to the home screen
        }} 
      />
      
    </Tabs>
  );
}
