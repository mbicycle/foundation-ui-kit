import type { Meta, StoryObj } from "@storybook/react"
import Accordion from "../components/Accordion"

const meta: Meta = {
  title: "Example/Accordion",
  component: Accordion,
  subcomponents: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    AccordionBody: Accordion.Body,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    AccordionTitle: Accordion.Title,
  },
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {
    defaultOpen: {
      control: "boolean",
    },
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>

const RenderAccordion = (props: any) => {
  return (
    <Accordion defaultOpen={true} {...props}>
      <Accordion.Title className="text-blue-500">Accordion Title</Accordion.Title>
      <Accordion.Body>
        <p>Accordion Body</p>
      </Accordion.Body>
    </Accordion>
  )
}

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
        type: "auto",
        transform: () => {
          return `<Accordion defaultOpen={true} {...props}>
  <Accordion.Title className="text-blue-500">Accordion Title</Accordion.Title>
  <Accordion.Body>
    <p>Accordion Body</p>
  </Accordion.Body>
</Accordion>`
        },
      },
    },
  },
  args: {
    defaultOpen: true,
  },
  render: (args) => RenderAccordion(args),
}
