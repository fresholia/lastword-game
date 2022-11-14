import { render } from '@testing-library/react';

import List from './List';

describe('<List />', () => {
  it('renders', () => {
    render(
      <List>
        <List.Item>Item 1</List.Item>
      </List>,
    );
  });
});
