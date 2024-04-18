import type { Meta, StoryObj } from "@storybook/react"
import { useState } from "react"
import Datepicker from "components/Datepicker"

const meta: Meta = {
  title: "Example/Datepicker",
  component: Datepicker,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>

const SelectWithHooks = (props: any) => {
  const [selected, setSelected] = useState<Date | null>(new Date())

  console.log(selected)

  return <Datepicker selected={selected} onChange={setSelected} {...props} />
}

export const Default: Story = {
  render: (args) => <SelectWithHooks {...args} />,
  args: {
    label: "Date picker",
  },
  parameters: {
    style: {
      margin: "300px",
    },
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
        type: "auto",
        transform: () => {
          return `
    const [selected, setSelected] = useState<Date | null>(null);

    return <Datepicker
        selected={selected}
        onChange={setSelected}
        {...props}
    />;
            `
        },
      },
    },
  },
}

export const MonthPicker: Story = {
  render: (args) => <SelectWithHooks {...args} />,
  args: {
    label: "Select Month and Year",
    showMonthYearPicker: true,
    showFullMonthYearPicker: true,
  },
  parameters: {
    style: {
      margin: "300px",
    },
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
        type: "auto",
        transform: () => {
          return `
    const [selected, setSelected] = useState<Date | null>(null);

    return <Datepicker
        selected={selected}
        onChange={setSelected}
        showMonthYearPicker
        showFullMonthYearPicker
        {...props}
    />;
            `
        },
      },
    },
  },
}
