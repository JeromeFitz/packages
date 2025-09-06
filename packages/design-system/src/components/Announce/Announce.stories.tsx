import type { Meta, StoryFn } from '@storybook/react'

import { Announce } from './Announce'

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
  },
  component: Announce,
  parameters: {
    docs: {
      description: {
        component: 'MDX Content is TBD',
      },
    },
  },
  title: 'Announce',
} as Meta<typeof Announce>

const Template: StoryFn<typeof Announce> = ({ children, ...args }) => (
  <Announce {...args}>{children}</Announce>
)

export const Default = {
  args: {
    children: dummyContent,
  },

  render: Template,
}
