import { render } from '@testing-library/react';

import RadioGroup from './RadioGroup';

describe('<RadioGroup />', () => {
  it('renders', () => {
    render(
      <RadioGroup name="atölye15">
        <RadioGroup.Item value="1">Option 1</RadioGroup.Item>
      </RadioGroup>,
    );
  });
});
