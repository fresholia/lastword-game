import { ComponentStory, ComponentMeta } from '@storybook/react';

import Form from './Form';

export default {
  title: 'Components/FormControl',
  component: Form,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;
export const Default = Template.bind({});
