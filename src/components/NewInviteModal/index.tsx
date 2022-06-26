import Modal from 'react-modal';

interface NewInviteModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewInviteModal({ isOpen, onRequestClose }: NewInviteModalProps) {
  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    >
      <h2>New invite</h2>
    </Modal>
  );
}
