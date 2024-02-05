import { Card } from '../components/card';
import type { Meta, StoryObj } from '@storybook/react';

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
    },
};

export const WithoutSubtitle: Story = {
    args: {
        title: 'Title Without Subtitle',
        showMoveIcon: true,
        showDeleteIcon: true,
    },
};

export const WithoutIcon: Story = {
    args: {
        title: 'Title Without Icon',
        subtitle: 'Subtitle Without Icon',
        showMoveIcon: false,
        showDeleteIcon: false,
    },
};

export const WithoutMoveIcon: Story = {
    args: {
        title: 'Title Without Move Icon',
        subtitle: 'Subtitle Without Move Icon',
        showMoveIcon: false,
        showDeleteIcon: true,
    },
};

export const WithoutDeleteIcon: Story = {
    args: {
        title: 'Title Without Delete Icon',
        subtitle: 'Subtitle Without Delete Icon',
        showMoveIcon: true,
        showDeleteIcon: false,
    },
};
