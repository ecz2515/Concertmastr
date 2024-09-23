import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const [fontSize, setFontSize] = useState(16);
  const [trueTone, setTrueTone] = useState(false);
  const [blueLight, setBlueLight] = useState(false);
  const [enhancedContrast, setEnhancedContrast] = useState(false);

  return (
    <View style={styles.container}>
      {/* Logo and Title */}
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/CM_logo.png')} // Replace with your logo path
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.logoTitle}>Concertmastr</Text>
      </View>

      {/* Font Size Controls */}
      <Text style={styles.sectionTitle}>Font Size</Text>
      <View style={styles.fontSizeContainer}>
        <TouchableOpacity
          style={styles.fontButton}
          onPress={() => setFontSize(fontSize > 12 ? fontSize - 1 : 12)}>
          <Text style={styles.fontButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.fontSizeText}>{fontSize}</Text>
        <TouchableOpacity
          style={styles.fontButton}
          onPress={() => setFontSize(fontSize < 30 ? fontSize + 1 : 30)}>
          <Text style={styles.fontButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* True Tone Switch */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>True Tone</Text>
        <Switch
          value={trueTone}
          onValueChange={setTrueTone}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={trueTone ? '#f4f3f4' : '#f4f3f4'}
        />
      </View>

      {/* Blue Light Switch */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Blue Light</Text>
        <Switch
          value={blueLight}
          onValueChange={setBlueLight}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={blueLight ? '#f4f3f4' : '#f4f3f4'}
        />
      </View>

      {/* Enhanced Contrast Switch */}
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Enhanced Contrast</Text>
        <Switch
          value={enhancedContrast}
          onValueChange={setEnhancedContrast}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={enhancedContrast ? '#f4f3f4' : '#f4f3f4'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  logoTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  fontSizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 30,
  },
  fontButton: {
    padding: 10,
  },
  fontButtonText: {
    color: 'white',
    fontSize: 22,
  },
  fontSizeText: {
    color: 'white',
    fontSize: 20,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  switchLabel: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomDrawerContent;
