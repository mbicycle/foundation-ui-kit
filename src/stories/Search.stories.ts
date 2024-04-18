import type { Meta, StoryObj } from "@storybook/react"
import { Search } from "components/Search"

const meta: Meta = {
  title: "Example/Search",
  component: Search,
  argTypes: {
    searchPlaceholder: {
      control: "text",
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    searchPlaceholder: "Search",
  },
}

export const SmallSize: Story = {
  args: {
    size: "small",
    searchPlaceholder: "Search",
  },
}

export const MediumSize: Story = {
  args: {
    size: "medium",
    searchPlaceholder: "Search",
  },
}

export const LargeSize: Story = {
  args: {
    size: "large",
    searchPlaceholder: "Search",
  },
}
