import Tooltip from '../components/Tooltip';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
    title: 'Example/Tooltip',
    component: Tooltip,
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Top: Story = {
    args: {
        content: 'Tooltip content',
        position: 'bottom',
    },
};

export const Right: Story = {
    args: {
        content: 'Tooltip content',
        position: 'left',
    },
};

export const Left: Story = {
    args: {
        content: 'Tooltip content',
        position: 'right',
    },
};

export const Bottom: Story = {
    args: {
        content: 'Tooltip content',
        position: 'top',
    },
};
