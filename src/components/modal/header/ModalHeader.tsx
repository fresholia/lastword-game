import { ModalHeaderProps } from './ModalHeader.types';

function ModalHeader({ children, ...props }: ModalHeaderProps) {
  return <header {...props}>{children}</header>;
}

export default ModalHeader;
