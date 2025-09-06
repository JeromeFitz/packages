import type { Meta, StoryFn } from '@storybook/react'

import { Button } from './Button'

const buttonText = 'Default Button Text'

export default {
  argTypes: {
    as: {
      control: false,
    },
    ghost: {
      control: { type: 'radio' },
      options: [true, false],
    },
    ref: {
      control: false,
    },
    size: {
      control: { type: 'select' },
      options: ['1', '2', '3'],
    },
    state: {
      control: { type: 'radio' },
      options: [null, 'active', 'waiting'],
    },
    variant: {
      control: { type: 'select' },
      options: ['brand', 'gray', 'transparentBlack', 'transparentWhite'],
    },
  },
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'MDX Content is TBD',
      },
    },
  },
  title: 'Button',
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = ({ children = buttonText, ...args }) => (
  <Button {...args}>{children}</Button>
)

export const Default = {
  args: {},
  render: Template,
}

export const Brand = {
  args: { children: 'Custom Brand Button', variant: 'brand' },
  parameters: {
    docs: {
      description: {
        story: 'Custom Description for **Brand**',
      },
    },
  },

  render: Template,
}

export const Ghost = {
  args: { ghost: true },
  render: Template,
}

export const Size2 = {
  args: { size: '2' },
  render: Template,
}

export const Size3 = {
  args: { size: '3' },
  render: Template,
}
