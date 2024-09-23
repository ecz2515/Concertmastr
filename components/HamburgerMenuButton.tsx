import { Ionicons } from '@expo/vector-icons';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer'; // Import the DrawerNavigationProp type
import React from 'react';

// Define a type that includes the drawer navigation
type DrawerNavigation = DrawerNavigationProp<Record<string, object | undefined>>;

const HamburgerMenuButton = () => {
  // Use the correct navigation type for the drawer
  const navigation = useNavigation<DrawerNavigation>();

  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <View style={{ paddingLeft: 15 }}>
        <Ionicons name="menu" size={30} color="white" />
      </View>
    </TouchableOpacity>
  );
};

export default HamburgerMenuButton;
