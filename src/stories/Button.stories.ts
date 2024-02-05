import { Button } from './../components/button/index';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    isDisabled: {
      control: 'boolean',
    },
    uppercase: {
      control: {
        type: 'boolean',
        defaultValue: false,
      },
    },
  },
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    children: 'Press me',
  },
};

export const DisabledButton: Story = {
  args: {
    children: 'Disabled',
    isDisabled: true,
  },
};

export const SmallButton: Story = {
  args: {
    children: 'Small',
    size: 'small',
  },
};

export const MediumButton: Story = {
  args: {
    children: 'Medium',
    size: 'medium',
  },
};

export const LargeButton: Story = {
  args: {
    children: 'Large',
    size: 'large',
  },
};

export const UppercaseButton: Story = {
  args: {
    children: 'Uppercase Text',
    uppercase: true,
  },
};
