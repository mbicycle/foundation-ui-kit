import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../components/Modal';
import { useState } from "react";
import { Button } from "components/Button";

const meta: Meta = {
  title: 'Example/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    open: {
      control: false,
    },
    onClose: {
      control: false,
    },
    children: {
      control: "text",
    },
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

const ModalWithButton = (props: any) => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button onClick={() => setOpen(!open)}>Open modal</Button>
      <Modal {...props} open={open} onClose={() => setOpen(false)}>
        {props.children || <span className="text-red-600">Styled Modal children</span>}
      </Modal>
    </div>
  )
}

export const Default: Story = {
  args: {
    title: 'Modal Title',
  },
  render: (args) => <ModalWithButton {...args} />
};
