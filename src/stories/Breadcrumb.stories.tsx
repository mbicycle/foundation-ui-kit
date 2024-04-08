import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from 'components/Breadcrumbs';
import { useState } from "react";

const meta: Meta = {
  title: 'Example/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const routes = [
  {path: '1', label: 'Home'},
  {path: '2', label: 'Projects'},
  {path: '3', label: 'About'},
]

const BreadcrumbsWithHooks = (props: any) => {
  const [step, setStep] = useState(0)

    const onClick = ({index}: {index: number}) => {
    setStep(index)
    }

    return  <Breadcrumb
      {...props}
      activeStep={step}
      routes={routes}
      onClickStep={onClick}
    />
}

export const Default: Story = {
  args: {
    routes,
  },
  render: (args) => <BreadcrumbsWithHooks {...args} />
};

