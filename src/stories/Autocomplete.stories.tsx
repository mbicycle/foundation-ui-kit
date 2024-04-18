import type { Meta, StoryObj } from "@storybook/react"
import Autocomplete from "../components/Autocomplete"
import { useState } from "react"

const meta: Meta = {
  title: "Example/Autocomplete",
  component: Autocomplete,
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
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>

const options = [
  { id: "1", name: "JavaScript" },
  { id: "2", name: "TypeScript" },
  { id: "3", name: "Java" },
  { id: "4", name: "C++" },
]

const AutocompleteWithHooks = (props: any) => {
  const [selected, setSelected] = useState<string | null>(null)

  return <Autocomplete value={selected} onChange={setSelected} options={options} {...props} />
}

export const Default: Story = {
  render: (args) => <AutocompleteWithHooks {...args} />,
  args: {
    options,
    label: "Simple select",
    placeholder: "Select an option...",
  },
  parameters: {
    docs: {
      source: {
        language: "tsx",
        type: "auto",
        transform: () => {
          return `
const options = [
  {id: '1', name: 'JavaScript'},
  {id: '2', name: 'TypeScript'},
  {id: '3', name: 'Java'},
  {id: '4', name: 'C++'},
];

const [selected, setSelected] = useState<string | null>(null);

return <Autocomplete
        value={selected}
        onChange={setSelected}
        options={options}
        {...props}
        />
        `
        },
      },
    },
  },
}
