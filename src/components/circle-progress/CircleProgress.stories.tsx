import { ComponentStory, ComponentMeta } from '@storybook/react';

import CircleProgress from './CircleProgress';

export default {
  title: 'Components/CircleProgress',
  component: CircleProgress,
  argTypes: {
    percentage: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
    },
  },
} as ComponentMeta<typeof CircleProgress>;

const Template: ComponentStory<typeof CircleProgress> = (args) => <CircleProgress {...args} />;

export const Default = Template.bind({});
