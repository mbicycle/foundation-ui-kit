import type { Meta, StoryObj } from "@storybook/react"
import { CategorySearch } from "../components/CategorySearch"

const meta: Meta = {
  title: "Example/CategorySearch",
  component: CategorySearch,
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
    categories: ["Mockups", "Templates", "Design", "Logos"],
  },
}

export const DifferentCategories: Story = {
  args: {
    categories: ["E-mail", "Templates", "Title"],
    searchPlaceholder: "Search",
  },
}

export const DifferentSizes: Story = {
  args: {
    size: "small",
    categories: ["Mockups", "Templates", "Design", "Logos"],
    searchPlaceholder: "Search",
  },
}

export const MediumSize: Story = {
  args: {
    size: "medium",
    categories: ["Mockups", "Templates", "Design", "Logos"],
    searchPlaceholder: "Search",
  },
}

export const LargeSize: Story = {
  args: {
    size: "large",
    categories: ["Mockups", "Templates", "Design", "Logos"],
    searchPlaceholder: "Search",
  },
}
