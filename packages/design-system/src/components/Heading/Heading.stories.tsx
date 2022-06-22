import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Heading } from './Heading'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import mdx from './Heading.mdx'

const dummyContent = 'Lorem ipsum dolor sit amet.'

export default {
  title: 'Heading',
  component: Heading,
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
      options: ['1', '2', '3', '4'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = ({ children, ...args }) => (
  <Heading {...args}> {children}</Heading>
)

export const Default = Template.bind({})
Default.args = {
  children: dummyContent,
  size: '3',
}
