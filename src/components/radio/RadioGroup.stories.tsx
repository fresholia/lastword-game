import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioGroup from './RadioGroup';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  argTypes: {
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;
export const Default = Template.bind({});

Default.args = {
  isDisabled: false,
  name: 'atölye15',
  children: (
    <>
      <RadioGroup.Item value="1">Option 1</RadioGroup.Item>
      <RadioGroup.Item value="2">Option 2</RadioGroup.Item>
      <RadioGroup.Item value="3">Option 3</RadioGroup.Item>
    </>
  ),
};
