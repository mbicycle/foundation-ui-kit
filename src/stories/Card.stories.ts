import type { Meta, StoryObj } from '@storybook/react';
import { Card } from 'components/Card';

const meta: Meta = {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    title: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    showMoveIcon: {
      control: 'boolean',
    },
    showDeleteIcon: {
      control: 'boolean',
    },
    isSkills: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Default Title',
    subtitle: 'Default Subtitle',
    showMoveIcon: true,
    showDeleteIcon: true,
    isSkills: false,
  },
};

export const WithSkills: Story = {
  args: {
    title: 'Skills Card',
    subtitle: 'Subtitle for Skills Card',
    showMoveIcon: true,
    showDeleteIcon: true,
    isSkills: true,
  },
};
