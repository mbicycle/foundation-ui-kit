import { Button } from '../components/button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      control:  { type: 'inline-radio', options:  ['primary', 'warning', 'transparent', 'empty'] },
    },
    size: {
      control: { type: 'inline-radio', options: ['small', 'medium', 'large'] },
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
  args: {
    children: 'Press me',
  },
  parameters: {
    style: {
      margin: '30px',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Standard: Story = {
  args: {
    children: 'Press me',
  },
  parameters: {
    style: {
      margin: '30px',
    },
  },
};

export const DisabledButton: Story = {
  args: {
    children: 'Disabled',
    isDisabled: true,
  },
  parameters: {
    style: {
      margin: '30px',
    },
  },
};

export const SmallButton: Story = {
  args: {
    children: 'Small',
    size: 'small',
  },
  parameters: {
    style: {
      margin: '30px',
    },
  },
};

export const MediumButton: Story = {
  args: {
    children: 'Medium',
    size: 'medium',
  },
  parameters: {
    style: {
      margin: '30px',
    },
  },
};

export const LargeButton: Story = {
  args: {
    children: 'Large',
    size: 'large',
  },
  parameters: {
    style: {
      margin: '30px',
    },
  },
};

export const UppercaseButton: Story = {
  args: {
    children: 'Uppercase Text',
    uppercase: true,
  },
  parameters: {
    style: {
      margin: '30px',
    },
  },
};

export const PrimaryButton: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
  },
  parameters: {
    style: {
      margin: '30px',
    },
  },
};

export const WarningButton: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
  },
  parameters: {
    style: {
      margin: '30px',
    },
  },
};

export const TransparentButton: Story = {
  args: {
    children: 'Transparent',
    variant: 'transparent',
  },
  parameters: {
    style: {
      margin: '30px',
    },
  },
};

export const EmptyButton: Story = {
  args: {
    children: 'Empty',
    variant: 'empty',
  },
  parameters: {
    style: {
      margin: '30px',
    },
  },
};
