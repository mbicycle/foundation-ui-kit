import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from '../components/Dropdown';

const meta: Meta = {
  title: 'Example/DropdownInput',
  component: Dropdown,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const options = ['Option 1', 'Option 2', 'Option 3'];

export const Default: Story = {
  args: {
    options,
    placeholder: 'Select an option...',
  },
};

export const WithCustomPlaceholder: Story = {
  args: {
    options,
    placeholder: 'Custom Placeholder',
  },
};

export const WithLongOptions: Story = {
  args: {
    options: [
      'Long Option 1 with some additional text',
      'Long Option 2 with some additional text',
      'Long Option 3 with some additional text',
    ],
    placeholder: 'Select an option...',
  },
};

export const WithoutPlaceholder: Story = {
  args: {
    options,
  },
};
