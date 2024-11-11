// components/SettingsModal.tsx
import React, { useState } from 'react';
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

const { width } = Dimensions.get('window');

interface SettingsModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function SettingsModal({ visible, onClose }: SettingsModalProps) {
  const slideAnim = React.useRef(new Animated.Value(width)).current;

  // States for toggles
  const [trueTone, setTrueTone] = useState(false);
  const [blueLight, setBlueLight] = useState(false);
  const [enhancedContrast, setEnhancedContrast] = useState(false);

  React.useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: width / 2, // Slide to halfway width
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: width,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }
  }, [visible]);

  return (
    <Modal
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      animationType="none"
    >
      <TouchableOpacity style={styles.overlay} onPress={onClose} activeOpacity={1} />
      <Animated.View style={[styles.modalContainer, { left: slideAnim }]}>
        {/* Logo and Title */}
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Settings</Text>
        </View>

        {/* Font Size Controls */}
        <Text style={styles.sectionTitle}>Font Size</Text>
        <View style={styles.fontSizeControls}>
          <TouchableOpacity
            style={[styles.fontButton, styles.decreaseButton]}
            onPress={() => {
              /* Implement decrease font size logic */
            }}
            activeOpacity={0.7} // Feedback effect on press
          >
            <Text style={styles.fontButtonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.fontButton, styles.increaseButton]}
            onPress={() => {
              /* Implement increase font size logic */
            }}
            activeOpacity={0.7} // Feedback effect on press
          >
            <Text style={styles.fontButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Toggle Settings */}
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
        <View style={styles.toggleGroup}>
          <Text style={styles.toggleLabel}>Enhanced Contrast</Text>
          <Switch
            value={enhancedContrast}
            onValueChange={setEnhancedContrast}
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
    justifyContent: 'center', // Center buttons horizontally
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
