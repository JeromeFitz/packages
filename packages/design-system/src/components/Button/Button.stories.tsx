import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Button } from './Button'
import mdx from './Button.mdx'

const buttonText = 'Default Button Text'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Hrm, I can see why people like **MDX** for _this_. Is there a way for both worlds?',
        // story: 'This would (will) repeat for each Component w/in Story',
      },
      page: mdx,
    },
  },
  argTypes: {
    as: {
      control: false,
    },
    ghost: {
      options: [true, false],
      control: { type: 'radio' },
    },
    ref: {
      control: false,
    },
    size: {
      options: ['1', '2', '3'],
      control: { type: 'select' },
    },
    state: {
      options: [null, 'active', 'waiting'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['brand', 'gray', 'transparentBlack', 'transparentWhite'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = ({
  children = buttonText,
  ...args
}) => <Button {...args}>{children}</Button>

// export const Default: ComponentStory<typeof Button> = (props) => (
//   <Button variant="brand" {...props}>
//     Brand Button
//   </Button>
// )

export const Default = Template.bind({})
Default.args = {}

export const Brand = Template.bind({})
Brand.args = { children: 'Custom Brand Button', variant: 'brand' }
Brand.parameters = {
  docs: {
    description: {
      story: 'Custom Description for **Brand**',
    },
  },
}

export const Ghost = Template.bind({})
Ghost.args = { ghost: true }

export const Size2 = Template.bind({})
Size2.args = { size: '2' }

export const Size3 = Template.bind({})
Size3.args = { size: '3' }
