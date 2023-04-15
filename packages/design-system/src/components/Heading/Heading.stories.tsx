import { Meta, StoryFn } from '@storybook/react'

import { Heading } from './Heading'

const dummyContent = 'Lorem ipsum dolor sit amet.'

export default {
  title: 'Heading',
  component: Heading,
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
      options: ['1', '2', '3', '4'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Heading>

const Template: StoryFn<typeof Heading> = ({ children, ...args }) => (
  <Heading {...args}> {children}</Heading>
)

export const Default = {
  render: Template,

  args: {
    children: dummyContent,
    size: '3',
  },
}
