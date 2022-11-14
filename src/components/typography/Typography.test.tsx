import { render } from '@testing-library/react';
import Typography, { DEFAULT_TYPOGRAPHY_ELEMENT } from './Typography';
import { TypographyProps } from './Typography.types';

describe('<Typography />', () => {
  const defaultProps: TypographyProps<typeof DEFAULT_TYPOGRAPHY_ELEMENT> = {
    children: 'atölye15',
    as: 'h1',
    variant: 'h1',
  };

  it('renders', () => {
    render(<Typography {...defaultProps} />);
  });

  it('should render children correctly', () => {
    const { getByText } = render(<Typography {...defaultProps} />);
    expect(getByText(defaultProps.children as string)).toBeInTheDocument();
  });

  it('should render given element correctly', () => {
    const { getByText } = render(<Typography {...defaultProps} />);
    expect(getByText(defaultProps.children as string).tagName.toLowerCase()).toBe(defaultProps.as);
  });
});
