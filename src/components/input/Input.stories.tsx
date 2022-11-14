import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    inputType: {
      control: {
        type: 'select',
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  inputType: 'primary',
  placeholder: 'atölye15',
};

export const Secondary = Template.bind({});
Secondary.args = {
  inputType: 'secondary',
  placeholder: 'atölye15',
};

export const Disabled = Template.bind({});
Disabled.args = {
  inputType: 'primary',
  placeholder: 'atölye15',
  disabled: true,
};
