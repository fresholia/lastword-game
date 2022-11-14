import React, { useRef } from 'react';
import classNames from 'classnames';

import useOnClickOutside from 'core/utils/hooks/useOnClickOutside';

import ModalBody from './body/ModalBody';
import ModalHeader from './header/ModalHeader';

import { ModalProps } from './Modal.types';

import './modal.scss';

function Modal({ children, isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef.current, onClose);

  /*
  NOTE:
    I wanted to use React portal here too, but as I can't understand why,
    there is no createPortal in 'react-dom/client'.
  */
  return (
    <div
      className={classNames('modal-root', 'is-horizontally-centered', 'is-aligned-center', {
        hide: !isOpen,
      })}>
      <div className={classNames('modal', 'is-flex-column')} ref={modalRef}>
        {children}
      </div>
    </div>
  );
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;

export default Modal;
