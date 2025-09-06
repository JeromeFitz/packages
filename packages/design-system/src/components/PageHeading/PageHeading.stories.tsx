import type { Meta, StoryFn } from '@storybook/react'

import { PageHeading } from './PageHeading'

const dummyTitle = 'Lorem ipsum dolor sit amet.'
const dummyDescription = 'Lorem ipsum dolor sit amet.'

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
  component: PageHeading,
  parameters: {
    docs: {
      description: {
        component: 'MDX Content is TBD',
      },
    },
  },
  title: 'PageHeading',
} as Meta<typeof PageHeading>

const Template: StoryFn<typeof PageHeading> = ({ ...args }) => (
  <PageHeading {...args} />
)

export const Default = {
  args: {
    description: dummyDescription,
    title: dummyTitle,
  },

  render: Template,
}
