import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Badge } from './Badge'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import mdx from './Badge.mdx'

const dummyContent = 'Hello'

export default {
  title: 'Badge',
  component: Badge,
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
      options: ['1', '2'],
      control: { type: 'select' },
    },
    variant: {
      options: ['brand', 'blue', 'green', 'orange', 'red'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = ({ children, ...args }) => (
  <Badge {...args}>{children}</Badge>
)

export const Default = Template.bind({})
Default.args = {
  children: dummyContent,
}
