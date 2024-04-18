import type { Meta, StoryObj } from "@storybook/react"
import Tooltip from "../components/Tooltip"

const meta: Meta = {
  title: "Example/Tooltip",
  component: Tooltip,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  tags: ["autodocs"],
  args: {
    children: (
      <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">Hover over me</button>
    ),
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Top: Story = {
  args: {
    content: "Tooltip content",
    position: "bottom",
  },
}

export const Right: Story = {
  args: {
    content: "Tooltip content",
    position: "left",
  },
}

export const Left: Story = {
  args: {
    content: "Tooltip content",
    position: "right",
  },
}

export const Bottom: Story = {
  args: {
    content: "Tooltip content",
    position: "top",
  },
}
