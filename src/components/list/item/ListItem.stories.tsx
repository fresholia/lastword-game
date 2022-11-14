import { ComponentStory, ComponentMeta } from '@storybook/react';

import ListItem from './ListItem';

export default {
  title: 'Components/List/Item',
  component: ListItem,
  argTypes: {},
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
