import { render } from '@testing-library/react';

import Button from './Button';
import { ButtonProps } from './Button.types';

describe('<Button />', () => {
  const defaultProps: ButtonProps = {
    children: 'atölye15',
  };

  it('renders', () => {
    render(<Button />);
  });

  it('should render children correctly', () => {
    const { getByRole } = render(<Button {...defaultProps} />);
    expect(getByRole('button')).toHaveTextContent(defaultProps.children as string);
  });
});
