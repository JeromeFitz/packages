import { Meta, StoryFn } from '@storybook/react'

import { Text } from '../index'

import { Alert } from './Alert'

const dummyContent = <Text css={{ p: '$3' }}>Dummy Content Here</Text>

export default {
  title: 'Alert',
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: 'MDX Content is TBD',
      },
    },
  },
  argTypes: {
    as: {
      control: false,
    },
    children: {
      control: false,
    },
    ref: {
      control: false,
    },
    size: {
      options: ['1'],
      control: { type: 'select' },
    },
    variant: {
      options: ['loContrast', 'brand', 'error', 'info', 'success', 'warning'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Alert>

const Template: StoryFn<typeof Alert> = ({ children, ...args }) => (
  <Alert {...args}>{children}</Alert>
)

export const Default = {
  render: Template,

  args: {
    children: dummyContent,
  },
}
