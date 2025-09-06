import type { Meta, StoryFn } from '@storybook/react'

import { Text } from '../index'
import { Alert } from './Alert'

const dummyContent = <Text css={{ p: '$3' }}>Dummy Content Here</Text>

export default {
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
      control: { type: 'select' },
      options: ['1'],
    },
    variant: {
      control: { type: 'select' },
      options: ['loContrast', 'brand', 'error', 'info', 'success', 'warning'],
    },
  },
  component: Alert,
  parameters: {
    docs: {
      description: {
        component: 'MDX Content is TBD',
      },
    },
  },
  title: 'Alert',
} as Meta<typeof Alert>

const Template: StoryFn<typeof Alert> = ({ children, ...args }) => (
  <Alert {...args}>{children}</Alert>
)

export const Default = {
  args: {
    children: dummyContent,
  },

  render: Template,
}
