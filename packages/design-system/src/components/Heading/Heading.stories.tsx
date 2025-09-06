import type { Meta, StoryFn } from '@storybook/react'

import { Heading } from './Heading'

const dummyContent = 'Lorem ipsum dolor sit amet.'

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
      options: ['1', '2', '3', '4'],
    },
  },
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: 'MDX Content is TBD',
      },
    },
  },
  title: 'Heading',
} as Meta<typeof Heading>

const Template: StoryFn<typeof Heading> = ({ children, ...args }) => (
  <Heading {...args}> {children}</Heading>
)

export const Default = {
  args: {
    children: dummyContent,
    size: '3',
  },

  render: Template,
}
