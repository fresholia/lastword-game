import { ComponentStory, ComponentMeta } from '@storybook/react';

import Typography from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {
    as: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'a'],
      },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args}>atölye15</Typography>
);

export const H1 = Template.bind({});
H1.args = {
  variant: 'h1',
  textWeight: 'bold',
  as: 'h1',
};

export const H2 = Template.bind({});
H2.args = {
  variant: 'h2',
  textWeight: 'regular',
  as: 'h2',
};

export const H3 = Template.bind({});
H3.args = {
  variant: 'h3',
  as: 'h3',
};

export const H4 = Template.bind({});
H4.args = {
  variant: 'h4',
  as: 'h4',
};

export const H5 = Template.bind({});
H5.args = {
  variant: 'h5',
  as: 'h5',
};

export const H6 = Template.bind({});
H6.args = {
  variant: 'h6',
  as: 'h6',
};

export const Caption = Template.bind({});
Caption.args = {
  variant: 'caption',
  as: 'p',
};
