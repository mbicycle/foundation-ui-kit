import type { Meta, StoryObj } from '@storybook/react';
import Divider from "components/Divider";

const meta: Meta = {
  title: 'Example/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    style: {
      margin: '30px',
    },
  },
};


export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  parameters: {
    style: {
      margin: '30px',
    },
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  parameters: {
    style: {
      margin: '30px',
      height: '10px'
    },
  },
};