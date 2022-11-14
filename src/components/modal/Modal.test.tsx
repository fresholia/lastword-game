import { render } from '@testing-library/react';

import Modal from './Modal';

describe('<Modal />', () => {
  const defaultProps = {
    isOpen: true,
    onClose: () => {},
  };

  it('renders', () => {
    render(<Modal {...defaultProps} />);
  });

  it('should render children correctly', () => {
    const { getByText } = render(<Modal {...defaultProps}>Modal content</Modal>);
    expect(getByText('Modal content')).toBeInTheDocument();
  });

  it('should render header correctly', () => {
    const { getByText } = render(
      <Modal {...defaultProps}>
        <Modal.Header>Modal header</Modal.Header>
      </Modal>,
    );
    expect(getByText('Modal header')).toBeInTheDocument();
  });
});
