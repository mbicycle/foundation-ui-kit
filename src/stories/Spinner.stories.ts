import type { Meta, StoryObj } from '@storybook/react';
import Spinner from '../components/Spinner';

const meta: Meta = {
  title: 'Example/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      options: ['small', 'large', 'extra-large'],
      control: { type: 'select' },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const SmallSpinner: Story = {
  args: {
    size: 'small',
  },
};

export const LargeSpinner: Story = {
  args: {
    size: 'large',
  },
};

export const ExtraLargeSpinner: Story = {
  args: {
    size: 'extra-large',
  },
};
