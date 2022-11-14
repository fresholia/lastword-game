import { render } from '@testing-library/react';
import Input from './Input';
import { InputProps } from './Input.types';

describe('Input', () => {
  const defaultProps: InputProps = {
    inputType: 'primary',
    inputSize: 'medium',
    textAlign: 'left',
    placeholder: 'atölye15',
  };

  it('should render correctly', () => {
    render(<Input />);
  });

  it('should render correctly with props', () => {
    const { getByPlaceholderText } = render(<Input {...defaultProps} />);
    expect(getByPlaceholderText(defaultProps.placeholder as string)).toBeInTheDocument();
  });
});
