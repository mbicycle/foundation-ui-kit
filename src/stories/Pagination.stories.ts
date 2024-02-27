import type { Meta, StoryObj } from '@storybook/react';
import Pagination from 'components/Pagination';

const meta: Meta = {
  title: 'Example/Pagination',
  component: Pagination,
  argTypes: {
    variant: {
      options: ['small', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallPagination: Story = {
  args: {
    variant: 'small',
  },
};

export const LargePagination: Story = {
  args: {
    variant: 'large',
  },
};
