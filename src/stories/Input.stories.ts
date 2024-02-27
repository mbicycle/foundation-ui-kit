import type { Meta, StoryObj } from '@storybook/react';
import { Input } from 'components/Input';

const meta: Meta = {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['text', 'tel', 'url', 'email', 'password', 'number'],
      },
    },
    id: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    id: 'first_name',
    label: 'First name',
    placeholder: 'John',
  },
};

export const Telephone: Story = {
  args: {
    type: 'tel',
    id: 'phone',
    label: 'Phone number',
    placeholder: '123-45-678',
    pattern: '[0-9]{3}-[0-9]{2}-[0-9]{3}',
  },
};

export const URL: Story = {
  args: {
    type: 'url',
    id: 'website',
    label: 'Website URL',
    placeholder: 'flowbite.com',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    id: 'email',
    label: 'Email address',
    placeholder: 'john.doe@company.com',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    id: 'password',
    label: 'Password',
    placeholder: '•••••••••',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    id: 'visitors',
    label: 'Unique visitors (per month)',
    placeholder: '',
  },
};
