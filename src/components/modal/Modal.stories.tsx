import { ComponentStory, ComponentMeta } from '@storybook/react';

import Modal from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  onClose: () => {},
  children: (
    <>
      <Modal.Header>Modal header</Modal.Header>
      <Modal.Body>Modal body</Modal.Body>
    </>
  ),
};
