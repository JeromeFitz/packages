import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Text } from './Text'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import mdx from './Text.mdx'

const dummyContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut urna mauris. Donec efficitur mattis arcu, nec rutrum justo egestas aliquet. Proin quis finibus turpis. Sed a hendrerit odio, sed tristique dui. Phasellus pulvinar, lorem a commodo porta, velit diam vulputate nunc, tempor hendrerit urna nunc eget ipsum. Integer tristique sodales ultrices. Nullam eget neque ut libero ullamcorper tempus sit amet et enim. Curabitur sagittis auctor lectus sed facilisis.'

export default {
  title: 'Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component:
          'Hrm, I can see why people like **MDX** for _this_. Is there a way for both worlds?',
        // story: 'This would (will) repeat for each Component w/in Story',
      },
      // page: mdx,
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
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = ({ children, ...args }) => (
  <Text {...args}> {children}</Text>
)

export const Default = Template.bind({})
Default.args = {
  children: dummyContent,
  size: '3',
}
