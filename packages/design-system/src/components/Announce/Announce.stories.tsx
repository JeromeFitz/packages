import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Announce } from './Announce'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import mdx from './Announce.mdx'

const dummyContent = 'Hello'

export default {
  title: 'Announce',
  component: Announce,
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
  },
} as ComponentMeta<typeof Announce>

const Template: ComponentStory<typeof Announce> = ({ children, ...args }) => (
  <Announce {...args}>{children}</Announce>
)

export const Default = Template.bind({})
Default.args = {
  children: dummyContent,
}
