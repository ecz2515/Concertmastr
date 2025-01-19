import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Dimensions,
  Animated,
  ScrollView,
} from 'react-native';
import { Button, Switch } from 'react-native-paper'; // Use Switch from React Native Paper
import { useAppContext } from '../AppStateProvider';

const { width, height } = Dimensions.get('window');

interface SettingsModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function SettingsModal({ visible, onClose }: SettingsModalProps) {
  const slideAnim = useRef(new Animated.Value(width)).current;
  const [localVisible, setLocalVisible] = useState(visible);
  const {
    enhancedContrast,
    setEnhancedContrast,
    trueTone,
    setTrueTone,
    blueLight,
    setBlueLight,
    fontSize,
    setFontSize,
  } = useAppContext();

  const MIN_FONT_SIZE = 12;
  const MAX_FONT_SIZE = 28;

  useEffect(() => {
    if (visible) {
      setLocalVisible(true);
      Animated.timing(slideAnim, {
        toValue: width / 2,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: width,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setLocalVisible(false));
    }
  }, [visible]);

  if (!localVisible) return null;

  return (
    <Modal
      transparent={true}
      visible={localVisible}
      onRequestClose={onClose}
      animationType="none"
    >
      <View style={styles.overlay} onTouchEnd={onClose} />
      <Animated.View style={[styles.modalContainer, { left: slideAnim }]}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          bounces={false}
        >
          <View style={styles.logoContainer}>
            <Text style={styles.title}>Settings</Text>
          </View>

          {/* Font Size Controls */}
          <Text style={styles.sectionTitle}>Font Size</Text>
          <View style={styles.fontSizeControlsContainer}>
            <View style={styles.fontSizeControls}>
              <Button
                mode="contained"
                style={[
                  styles.fontButton,
                  fontSize <= MIN_FONT_SIZE && { backgroundColor: 'gray' }, // Disabled style
                ]}
                contentStyle={styles.fullButtonContent}
                labelStyle={styles.fontButtonText}
                onPress={() => setFontSize(fontSize - 2)}
                disabled={fontSize <= MIN_FONT_SIZE} // Disable if at minimum
              >
                -
              </Button>
              <Button
                mode="contained"
                style={[
                  styles.fontButton,
                  fontSize >= MAX_FONT_SIZE && { backgroundColor: 'gray' }, // Disabled style
                ]}
                contentStyle={styles.fullButtonContent}
                labelStyle={styles.fontButtonText}
                onPress={() => setFontSize(fontSize + 2)}
                disabled={fontSize >= MAX_FONT_SIZE} // Disable if at maximum
              >
                +
              </Button>
            </View>
          </View>

          <Button
            mode="contained"
            style={styles.resetButton}
            contentStyle={styles.fullButtonContent}
            labelStyle={styles.resetButtonText}
            onPress={() => setFontSize(16)}
          >
            Reset Font Size
          </Button>

          {/* Toggle Settings */}
          <View style={styles.toggleGroup}>
            <Text style={styles.toggleLabel}>Enhanced Contrast</Text>
            <Switch
              value={enhancedContrast}
              onValueChange={setEnhancedContrast}
              style={styles.toggleSwitch}
            />
          </View>
          <View style={styles.toggleGroup}>
            <Text style={styles.toggleLabel}>True Tone</Text>
            <Switch
              value={trueTone}
              onValueChange={setTrueTone}
              style={styles.toggleSwitch}
            />
          </View>
          <View style={styles.toggleGroup}>
            <Text style={styles.toggleLabel}>Blue Light</Text>
            <Switch
              value={blueLight}
              onValueChange={setBlueLight}
              style={styles.toggleSwitch}
            />
          </View>

          {/* Spacer to push Reset All Settings to the bottom */}
          <View style={{ flex: 1 }} />

          {/* Reset All Settings Button */}
          <Button
            mode="contained"
            style={styles.resetAllButton}
            contentStyle={styles.fullButtonContent}
            labelStyle={styles.resetAllButtonText}
            onPress={() => {
              setFontSize(16);
              setEnhancedContrast(false);
              setTrueTone(false);
              setBlueLight(false);
            }}
          >
            Reset All
          </Button>
        </ScrollView>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: width / 2,
    backgroundColor: 'black',
    padding: 20,
    paddingTop: 10,
    borderLeftWidth: 1,
    borderColor: '#333',
  },
  scrollContent: {
    flexGrow: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: 'DMSans-Bold',
    color: 'white',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'DMSans-Regular',
    color: 'white',
    marginBottom: 10,
  },
  fontSizeControlsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    maxWidth: 200,
  },
  fontSizeControls: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  fontButton: {
    backgroundColor: '#333',
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
  },
  fullButtonContent: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontButtonText: {
    fontSize: 20,
    fontFamily: 'DMSans-Regular',
    color: 'white',
  },
  resetButton: {
    marginTop: 10,
    marginBottom: 50,
    borderRadius: 8,
    backgroundColor: '#6C3483',
  },
  resetButtonText: {
    fontSize: 14,
    fontFamily: 'DMSans-Regular',
    color: 'white',
  },
  toggleGroup: {
    marginBottom: 20,
  },
  toggleLabel: {
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
    color: 'white',
    marginBottom: 10,
  },
  toggleSwitch: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  resetAllButton: {
    marginTop: 20,
    marginBottom: 0,
    backgroundColor: '#8b3232',
    borderRadius: 8,
  },
  resetAllButtonText: {
    fontSize: 16,
    fontFamily: 'DMSans-Regular',
    fontWeight: 'bold',
    color: 'white',
  },
});
