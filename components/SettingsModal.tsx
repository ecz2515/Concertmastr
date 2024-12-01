import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Dimensions,
  Animated,
  Switch,
} from 'react-native';
import { useAppContext } from '../AppStateProvider'; // Import global state hook

const { width } = Dimensions.get('window');

interface SettingsModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function SettingsModal({ visible, onClose }: SettingsModalProps) {
  const slideAnim = useRef(new Animated.Value(width)).current; // Start off-screen
  const { enhancedContrast, setEnhancedContrast, trueTone, setTrueTone, blueLight, setBlueLight, fontSize, setFontSize } = useAppContext();

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: width / 2, // Slide in to halfway width
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: width, // Slide out
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [visible]);

  if (!visible) return null; // Render modal only when visible

  return (
    <Modal transparent={true} visible={visible} onRequestClose={onClose} animationType="none">
      <TouchableOpacity style={styles.overlay} onPress={onClose} activeOpacity={1} />
      <Animated.View style={[styles.modalContainer, { left: slideAnim }]}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Settings</Text>
        </View>

        {/* Font Size Controls */}
        <Text style={styles.sectionTitle}>Font Size</Text>
        <View style={styles.fontSizeControls}>
          <TouchableOpacity
            style={[styles.fontButton, styles.decreaseButton]}
            onPress={() => setFontSize(fontSize - 1)}
            activeOpacity={0.7}
          >
            <Text style={styles.fontButtonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.fontButton, styles.increaseButton]}
            onPress={() => setFontSize(fontSize + 1)}
            activeOpacity={0.7}
          >
            <Text style={styles.fontButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Toggle Settings */}
        <View style={styles.toggleGroup}>
          <Text style={styles.toggleLabel}>Enhanced Contrast</Text>
          <Switch
            value={enhancedContrast}
            onValueChange={setEnhancedContrast} // Update global state
            style={styles.toggleSwitch}
          />
        </View>
        <View style={styles.toggleGroup}>
          <Text style={styles.toggleLabel}>True Tone</Text>
          <Switch
            value={trueTone}
            onValueChange={setTrueTone} // Update global state
            style={styles.toggleSwitch}
          />
        </View>
        <View style={styles.toggleGroup}>
          <Text style={styles.toggleLabel}>Blue Light</Text>
          <Switch
            value={blueLight}
            onValueChange={setBlueLight} // Update global state
            style={styles.toggleSwitch}
          />
        </View>
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
    paddingTop: 80,
    borderLeftWidth: 1,
    borderColor: '#333',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  fontSizeControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  fontButton: {
    padding: 15,
    backgroundColor: '#333',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
  },
  decreaseButton: {
    marginRight: 5,
  },
  increaseButton: {
    marginLeft: 5,
  },
  fontButtonText: {
    color: 'white',
    fontSize: 22,
  },
  toggleGroup: {
    marginBottom: 20,
  },
  toggleLabel: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },
  toggleSwitch: {
    alignSelf: 'flex-start',
  },
});
