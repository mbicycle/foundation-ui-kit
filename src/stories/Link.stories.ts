import Link from '../components/Link';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
    title: 'Example/Link',
    component: Link,
    parameters: {
        controls: { hideNoControlsWarning: true },
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        href: '#',
        children: 'Click me',
    },
};


