import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Image, Text, View } from 'react-native';
import HomeScreen from './index'; // Import HomeScreen from index.tsx
import HamburgerMenuButton from '@/components/HamburgerMenuButton'; // Import your custom hamburger button
import CustomDrawerContent from '@/components/CustomDrawerContent'; // Import your custom drawer content

const Drawer = createDrawerNavigator();

const LogoTitle = () => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
        source={require('@/assets/images/CM_logo.png')} // Replace with your logo path
        style={{ width: 30, height: 30, marginRight: 10 }} // Adjust size and styling
        resizeMode="contain"
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
        Concertmastr
      </Text>
    </View>
  );
};

export default function AppLayout() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <>
          <View style={{ flex: 1, paddingTop: 50 }}>
            <CustomDrawerContent {...props} />
          </View>
        </>
      )}
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: 'black' }, // Dark background for header
        headerTintColor: 'white', // White icon color for header (hamburger menu)
        drawerStyle: { backgroundColor: 'black' }, // Dark background for drawer
        drawerActiveTintColor: 'white', // White text for active drawer items
        drawerInactiveTintColor: 'white', // White text for inactive drawer items
        headerLeft: () => <HamburgerMenuButton />, // Render HamburgerMenuButton in header
      }}
    >
      {/* Define Home screen */}
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <LogoTitle />, // Custom component with logo and title
        }}
      />
    </Drawer.Navigator>
  );
}
