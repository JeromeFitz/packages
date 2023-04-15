import { Meta, StoryFn } from '@storybook/react'

import { Announce } from './Announce'

const dummyContent = 'Hello'

export default {
  title: 'Announce',
  component: Announce,
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
  },
} as Meta<typeof Announce>

const Template: StoryFn<typeof Announce> = ({ children, ...args }) => (
  <Announce {...args}>{children}</Announce>
)

export const Default = {
  render: Template,

  args: {
    children: dummyContent,
  },
}
