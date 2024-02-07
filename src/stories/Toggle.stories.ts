import Toggle from '../components/Toggle';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
    title: 'Example/Toggle',
    component: Toggle,
    argTypes: {
        color: {
            options: ['blue', 'red', 'yellow'],
            control: {
                type: 'inline-radio',
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Blue: Story = {
    args: {
        color: 'blue',
    },
};

export const Red: Story = {
    args: {
        color: 'red',
    },
};

export const Yellow: Story = {
    args: {
        color: 'yellow',
    },
};

