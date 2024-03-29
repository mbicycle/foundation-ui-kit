import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../components/Modal';

const meta: Meta = {
  title: 'Example/ModalButton',
  component: Modal,
  argTypes: {
    buttonText: {
      control: 'text',
    },
    modalId: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    buttonText: 'Toggle modal',
    modalId: 'default-modal',
  },
};
