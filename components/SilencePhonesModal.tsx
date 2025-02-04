import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { BsBellSlash } from 'react-icons/bs';
import styled from 'styled-components';

interface SilencePhonesModalProps {
  visible: boolean;
  onDismiss: () => void;
}

const SilencePhonesModal: React.FC<SilencePhonesModalProps> = ({ visible, onDismiss }) => {
  return (
    <Dialog.Root open={visible} onOpenChange={(open) => !open && onDismiss()}>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <BsBellSlash size={40} color="#333" style={{ marginBottom: '10px' }} />
          <DialogTitle>Shh... Phones on Silent!</DialogTitle>
          <DialogDescription>
            To let the music play uninterrupted, please kindly set your mobile phone to silent mode.
          </DialogDescription>
          <DialogButton onClick={onDismiss}>
            Got it!
          </DialogButton>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
`;

const DialogContent = styled(Dialog.Content)`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DialogTitle = styled(Dialog.Title)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const DialogDescription = styled(Dialog.Description)`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

const DialogButton = styled.button`
  background-color: #333;
  color: white;
  font-weight: bold;
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export default SilencePhonesModal;
