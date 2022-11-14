import Modal from 'components/modal/Modal';
import { ModalProps } from 'components/modal/Modal.types';
import Typography from 'components/typography/Typography';
import SettingsForm from 'settings/form/SettingsForm';

function SettingsModal({ isOpen, onClose }: ModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Header>
        <Typography as="h1" variant="h3" textWeight="bold">
          Settings
        </Typography>
      </Modal.Header>
      <Modal.Body>
        <SettingsForm />
      </Modal.Body>
    </Modal>
  );
}

export default SettingsModal;
