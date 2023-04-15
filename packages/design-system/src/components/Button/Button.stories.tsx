import { Meta, StoryFn } from '@storybook/react'

import { Button } from './Button'

const buttonText = 'Default Button Text'

export default {
  title: 'Button',
  component: Button,
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
    ghost: {
      options: [true, false],
      control: { type: 'radio' },
    },
    ref: {
      control: false,
    },
    size: {
      options: ['1', '2', '3'],
      control: { type: 'select' },
    },
    state: {
      options: [null, 'active', 'waiting'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['brand', 'gray', 'transparentBlack', 'transparentWhite'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Button>

const Template: StoryFn<typeof Button> = ({ children = buttonText, ...args }) => (
  <Button {...args}>{children}</Button>
)

export const Default = {
  render: Template,
  args: {},
}

export const Brand = {
  render: Template,
  args: { children: 'Custom Brand Button', variant: 'brand' },

  parameters: {
    docs: {
      description: {
        story: 'Custom Description for **Brand**',
      },
    },
  },
}

export const Ghost = {
  render: Template,
  args: { ghost: true },
}

export const Size2 = {
  render: Template,
  args: { size: '2' },
}

export const Size3 = {
  render: Template,
  args: { size: '3' },
}
