import type { Meta, StoryFn } from '@storybook/react'

import { Text } from './Text'

const dummyContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut urna mauris. Donec efficitur mattis arcu, nec rutrum justo egestas aliquet. Proin quis finibus turpis. Sed a hendrerit odio, sed tristique dui. Phasellus pulvinar, lorem a commodo porta, velit diam vulputate nunc, tempor hendrerit urna nunc eget ipsum. Integer tristique sodales ultrices. Nullam eget neque ut libero ullamcorper tempus sit amet et enim. Curabitur sagittis auctor lectus sed facilisis.'

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
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
  },
  component: Text,
  parameters: {
    docs: {
      description: {
        component: 'MDX Content is TBD',
      },
    },
  },
  title: 'Text',
} as Meta<typeof Text>

const Template: StoryFn<typeof Text> = ({ children, ...args }) => (
  <Text {...args}> {children}</Text>
)

export const Default = {
  args: {
    children: dummyContent,
    size: '3',
  },

  render: Template,
}
