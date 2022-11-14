import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    buttonType: {
      control: {
        type: 'select',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>atölye15</Button>;

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  buttonType: 'tertiary',
};
