import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "components/Button"
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline"

const meta: Meta = {
  title: "Example/Button",
  component: Button,
  argTypes: {
    children: {
      control: "text",
    },
    variant: {
      options: ["primary", "warning", "transparent", "empty", "outline"],
      control: {
        type: "select",
      },
    },
    size: {
      control: { type: "inline-radio", options: ["small", "medium", "large"] },
    },
    isDisabled: {
      control: "boolean",
    },
  },
  args: {
    children: "Press me",
  },
  parameters: {
    style: {
      margin: "30px",
    },
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>

export const Standard: Story = {
  args: {
    children: "Press me",
  },
  parameters: {
    style: {
      margin: "30px",
    },
  },
}

export const DisabledButton: Story = {
  args: {
    children: "Disabled",
    isDisabled: true,
  },
  parameters: {
    style: {
      margin: "30px",
    },
  },
}

export const SmallButton: Story = {
  args: {
    children: "Small",
    size: "small",
  },
  parameters: {
    style: {
      margin: "30px",
    },
  },
}

export const MediumButton: Story = {
  args: {
    children: "Medium",
    size: "medium",
  },
  parameters: {
    style: {
      margin: "30px",
    },
  },
}

export const LargeButton: Story = {
  args: {
    children: "Large",
    size: "large",
  },
  parameters: {
    style: {
      margin: "30px",
    },
  },
}

export const PrimaryButton: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
  parameters: {
    style: {
      margin: "30px",
    },
  },
}

export const WarningButton: Story = {
  args: {
    children: "Warning",
    variant: "warning",
  },
  parameters: {
    style: {
      margin: "30px",
    },
  },
}

export const TransparentButton: Story = {
  args: {
    children: "Transparent",
    variant: "transparent",
  },
  parameters: {
    style: {
      margin: "30px",
    },
  },
}

export const EmptyButton: Story = {
  args: {
    children: "Empty",
    variant: "empty",
  },
  parameters: {
    style: {
      margin: "30px",
    },
  },
}

export const OutlineButton: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
  parameters: {
    style: {
      margin: "30px",
    },
  },
}

export const LoadingButton: Story = {
  args: {
    children: "Export",
    isLoading: true,
  },
  parameters: {
    style: {
      margin: "30px",
    },
  },
}

export const IconButton: Story = {
  args: {
    children: "Export",
    icon: ArrowUpOnSquareIcon,
  },
  parameters: {
    style: {
      margin: "30px",
    },
  },
}
