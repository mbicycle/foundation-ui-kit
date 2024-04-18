import type { Meta, StoryObj } from "@storybook/react"
import Select from "components/Select"
import { useState } from "react"

const meta: Meta = {
  title: "Example/Select",
  component: Select,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  argTypes: {
    options: {
      control: false,
    },
    onChange: {
      control: false,
    },
    value: {
      control: false,
    },
    multiple: {
      control: false,
    },
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>

const options = [
  { id: "1", name: "Option 1" },
  { id: "2", name: "Option 2" },
  { id: "3", name: "Option 3" },
  { id: "4", name: "Option 4" },
]

const SelectWithHooks = (props: any) => {
  const [selected, setSelected] = useState<string | null>(null)

  return <Select value={selected} onChange={setSelected} options={options} {...props} />
}

const SelectWithHooksAndMultipleChooses = (props: any) => {
  const [selected, setSelected] = useState([options[0].id])

  return <Select value={selected} onChange={setSelected} options={options} multiple {...props} />
}

export const Default: Story = {
  render: (args) => <SelectWithHooks {...args} />,
  args: {
    options,
    label: "Simple select",
    placeholder: "Select an option...",
  },
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
        type: "auto",
        transform: () => {
          return `
const options = [
  {id: '1', name: 'Option 1'},
  {id: '2', name: 'Option 2'},
  {id: '3', name: 'Option 3'},
  {id: '4', name: 'Option 4'},
];

const [selected, setSelected] = useState<string | null>(null);

return <Select
    value={selected}
    onChange={setSelected}
    options={options}
    {...props}
  />;
            `
        },
      },
    },
  },
}

export const Multiple: Story = {
  render: (args) => <SelectWithHooksAndMultipleChooses {...args} />,
  args: {
    options,
    placeholder: "Select multiple options...",
  },
}
