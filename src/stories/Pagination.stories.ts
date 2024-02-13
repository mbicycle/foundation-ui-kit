import Pagination from '../components/Pagination';
import type { Meta, StoryObj } from '@storybook/react';

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
    tags: ['pagination', 'component', 'autodocs'],
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
