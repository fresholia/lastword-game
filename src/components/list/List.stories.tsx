import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from './List';

export default {
  title: 'Components/List',
  component: List,
  argTypes: {},
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
