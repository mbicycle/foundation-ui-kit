import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from 'components/ProgressBar';

const meta: Meta = {
  title: 'Example/ProgressBar',
  component: ProgressBar,
  argTypes: {
    progress: {
      control: {
        type: 'range', min: 0, max: 100, step: 1,
      },
    },
    size: {
      control: { type: 'select', options: ['small', 'default', 'large', 'extra-large'] },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    progress: 45,
  },
};

export const Small: Story = {
  args: {
    progress: 25,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    progress: 70,
    size: 'large',
  },
};

export const ExtraLarge: Story = {
  args: {
    progress: 90,
    size: 'extra-large',
  },
};
