import { Meta, StoryFn } from '@storybook/react'

import { PageHeading } from './PageHeading'

const dummyTitle = 'Lorem ipsum dolor sit amet.'
const dummyDescription = 'Lorem ipsum dolor sit amet.'

export default {
  title: 'PageHeading',
  component: PageHeading,
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
} as Meta<typeof PageHeading>

const Template: StoryFn<typeof PageHeading> = ({ ...args }) => (
  <PageHeading {...args} />
)

export const Default = {
  render: Template,

  args: {
    title: dummyTitle,
    description: dummyDescription,
  },
}
