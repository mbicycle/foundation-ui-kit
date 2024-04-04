import type { Meta, StoryObj } from '@storybook/react';
import Dropdowns from '../components/Dropdowns';

const meta: Meta = {
  title: 'Example/Dropdown',
  component: Dropdowns,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  options: ['Option 1', 'Option 2', 'Option 3'],
  placeholder: 'Select an option...',
  },
};
