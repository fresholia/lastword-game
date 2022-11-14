import { render } from '@testing-library/react';

import CircleProgress from './CircleProgress';
import { CircleProgressProps } from './CircleProgress.types';

describe('<CircleProgress />', () => {
  const defaultProps: CircleProgressProps = {
    percentage: 50,
    children: '50',
  };

  it('renders', () => {
    render(<CircleProgress percentage={100} />);
  });

  it('should render children correctly', () => {
    const { getByText } = render(<CircleProgress {...defaultProps} />);
    expect(getByText('50')).toBeInTheDocument();
  });
});
