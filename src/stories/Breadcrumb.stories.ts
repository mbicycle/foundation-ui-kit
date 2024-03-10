import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '../components/Breadcrumbs';

const meta: Meta = {
  title: 'Example/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    items: {
      control: {
        type: 'array',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: ['Home', 'Projects', 'Flowbite'],
  },
};

export const FiveItems: Story = {
  args: {
    items: ['Home', 'Projects', 'Flowbite', 'Page 4', 'Page 5'],
  },
};

export const CustomItems: Story = {
  args: {
    items: ['Start', 'Step 1', 'Step 2', 'Step 3', 'End'],
  },
};
