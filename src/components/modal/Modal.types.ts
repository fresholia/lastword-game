import React from 'react';

type ModalProps = {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export type { ModalProps };
