import type { Meta, StoryObj } from "@storybook/react"
import { Breadcrumb } from "components/Breadcrumbs"
import { useState } from "react"

const meta: Meta = {
  title: "Example/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof meta>

const routes = [
  { route: "1", text: "Home" },
  { route: "2", text: "Projects" },
  { route: "3", text: "About" },
]

const BreadcrumbsWithHooks = (props: any) => {
  const [step, setStep] = useState(0)

  const onClick = ({ index }: { index: number }) => {
    setStep(index)
  }

  return <Breadcrumb {...props} activeStep={step} routes={routes} onClickStep={onClick} />
}

export const Default: Story = {
  args: {
    routes,
  },
  render: (args) => <BreadcrumbsWithHooks {...args} />,
  parameters: {
    docs: {
      source: {
        language: "tsx",
        excludeDecorators: true,
        type: "auto",
        transform: () => {
          return `const [step, setStep] = useState(0)

const onClick = ({index}: {index: number}) => {
  setStep(index)
}

const routes = [
  {route: '1', text: 'Home'},
  {route: '2', text: 'Projects'},
  {route: '3', text: 'About'},
]

return  <Breadcrumb
        {...props}
        activeStep={step}
        routes={routes}
        onClickStep={onClick}
        />`
        },
      },
    },
  },
}
