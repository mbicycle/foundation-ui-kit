import type { Meta, StoryObj } from '@storybook/react';
import Toggle from 'components/Toggle';

const meta: Meta = {
  title: 'Example/Toggle',
  component: Toggle,
  argTypes: {
    color: {
      options: ['blue', 'red', 'yellow'],
      control: {
        type: 'inline-radio',
      },
    },
    text: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Toggle',
  },
};

export const Blue: Story = {
  args: {
    text: 'Blue',
    color: 'blue',
  },
};

export const Red: Story = {
  args: {
    text: 'Red',
    color: 'red',
  },
};

export const Yellow: Story = {
  args: {
    text: 'Yellow',
    color: 'yellow',
  },
};
