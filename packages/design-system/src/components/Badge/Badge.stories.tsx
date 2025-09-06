import type { Meta, StoryFn } from '@storybook/react'

import { Badge } from './Badge'

const dummyContent = 'Hello'

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
      options: ['1', '2'],
    },
    variant: {
      control: { type: 'select' },
      options: ['brand', 'blue', 'green', 'orange', 'red'],
    },
  },
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'MDX Content is TBD',
      },
    },
  },
  title: 'Badge',
} as Meta<typeof Badge>

const Template: StoryFn<typeof Badge> = ({ children, ...args }) => (
  <Badge {...args}>{children}</Badge>
)

export const Default = {
  args: {
    children: dummyContent,
  },

  render: Template,
}
