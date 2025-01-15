import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Modal, Portal } from 'react-native-paper';

interface SilencePhonesModalProps {
  visible: boolean;
  onDismiss: () => void;
}

const SilencePhonesModal: React.FC<SilencePhonesModalProps> = ({ visible, onDismiss }) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modalContainer}
      >
        <Text style={styles.modalTitle}>Shh... Phones on Silent!</Text>
        <Text style={styles.modalContent}>
          To let the music play uninterrupted, please kindly set your mobile phone to silent mode.
        </Text>
        <TouchableOpacity onPress={onDismiss} style={styles.modalButton}>
          <Text style={styles.modalButtonText}>Got it!</Text>
        </TouchableOpacity>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 40,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalContent: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SilencePhonesModal;
