import React from 'react';
import classNames from 'classnames';
import { ModalBodyProps } from './ModalBody.types';

import './modal-body.scss';

function ModalBody({ children, className, ...props }: ModalBodyProps) {
  return (
    <div className={classNames('modal-body', className)} {...props}>
      {children}
    </div>
  );
}

export default ModalBody;
