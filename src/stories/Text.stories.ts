import type { Meta, StoryObj } from '@storybook/react';
import Text from 'components/Text';

const meta: Meta = {
  title: 'Example/Text',
  component: Text,
  argTypes: {
    variant: {
      options: [
        'heading-two',
        'heading-three',
        'heading-four',
        'heading-five',
        'heading-six',
        'body-large',
        'body-medium',
        'body-small',
        'body-micro',
        'number-large',
        'number-medium',
        'number-small',
        'number-micro',
      ],
      control: {
        type: 'select',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HeadingTwo: Story = {
  args: {
    variant: 'heading-two',
    children: 'Heading two',
  },
};

export const HeadingThree: Story = {
  args: {
    variant: 'heading-three',
    children: 'Heading three',
  },
};

export const HeadingFour: Story = {
  args: {
    variant: 'heading-four',
    children: 'Heading four',
  },
};

export const HeadingFive: Story = {
  args: {
    variant: 'heading-five',
    children: 'Heading five',
  },
};

export const HeadingSix: Story = {
  args: {
    variant: 'heading-six',
    children: 'Heading six',
  },
};

export const BodyLarge: Story = {
  args: {
    variant: 'body-large',
    children: 'Body Large',
  },
};

export const BodyMedium: Story = {
  args: {
    variant: 'body-medium',
    children: 'Body Medium',
  },
};

export const BodySmall: Story = {
  args: {
    variant: 'body-small',
    children: 'Body Small',
  },
};

export const BodyMicro: Story = {
  args: {
    variant: 'body-micro',
    children: 'Body Micro',
  },
};

export const NumberLarge: Story = {
  args: {
    variant: 'number-large',
    children: 'Number Large',
  },
};

export const NumberMedium: Story = {
  args: {
    variant: 'number-medium',
    children: 'Number Medium',
  },
};

export const NumberSmall: Story = {
  args: {
    variant: 'number-small',
    children: 'Number Small',
  },
};

export const NumberMicro: Story = {
  args: {
    variant: 'number-micro',
    children: 'Number Micro',
  },
};
