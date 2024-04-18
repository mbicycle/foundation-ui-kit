import type { Meta, StoryObj } from "@storybook/react"
import Toggle from "../components/Toggle"

const meta: Meta = {
  title: "Example/Toggle",
  component: Toggle,
  argTypes: {
    color: {
      options: ["blue", "red", "yellow"],
      control: {
        type: "inline-radio",
      },
    },
    label: {
      control: "text",
    },
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "Toggle",
  },
}

export const Blue: Story = {
  args: {
    label: "Blue",
    color: "blue",
  },
}

export const Red: Story = {
  args: {
    label: "Red",
    color: "red",
  },
}

export const Yellow: Story = {
  args: {
    label: "Yellow",
    color: "yellow",
  },
}
