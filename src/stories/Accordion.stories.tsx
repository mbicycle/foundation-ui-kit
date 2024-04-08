import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '../components/Accordion';

const meta: Meta = {
  title: 'Example/Accordion',
  component: Accordion,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {
    defaultOpen: {
      control: 'boolean',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const RenderAccordion = (props: any) => {

  return <Accordion defaultOpen={true} {...props}>
        <Accordion.Title className="text-blue-500">Accordion Title</Accordion.Title>
        <Accordion.Body>
          <p>Accordion Body</p>
        </Accordion.Body>
  </Accordion>
};

export const Default: Story = {
  args: {
    defaultOpen: true,
  },
  render: (args) => RenderAccordion(args)
};
