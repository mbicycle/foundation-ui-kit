import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '../components/Accordion';

const meta: Meta = {
  title: 'Example/Accordion',
  component: Accordion,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        heading: 'What is Flowbite?',
        content: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS.',
      },
      {
        heading: 'Is there a Figma file available?',
        content: 'Yes, Flowbite is first conceptualized and designed using the Figma software.',
      },
      {
        heading: 'What are the differences between Flowbite and Tailwind UI?',
        content: 'The main difference is that Flowbite is open-source under the MIT license, whereas Tailwind UI is a paid product.',
      },
    ],
  },
};
