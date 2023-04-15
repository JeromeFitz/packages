import { Meta, StoryFn } from '@storybook/react'

import { Badge } from './Badge'

const dummyContent = 'Hello'

export default {
  title: 'Badge',
  component: Badge,
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
      options: ['1', '2'],
      control: { type: 'select' },
    },
    variant: {
      options: ['brand', 'blue', 'green', 'orange', 'red'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Badge>

const Template: StoryFn<typeof Badge> = ({ children, ...args }) => (
  <Badge {...args}>{children}</Badge>
)

export const Default = {
  render: Template,

  args: {
    children: dummyContent,
  },
}
