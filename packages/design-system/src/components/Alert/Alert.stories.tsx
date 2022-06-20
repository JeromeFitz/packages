import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Text } from '../Text'

import { Alert } from './Alert'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import mdx from './Alert.mdx'

const dummyContent = <Text css={{ p: '$3' }}>Dummy Content Here</Text>

export default {
  title: 'Alert',
  component: Alert,
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
      options: ['1'],
      control: { type: 'select' },
    },
    variant: {
      options: ['loContrast', 'brand', 'error', 'info', 'success', 'warning'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Alert>

const Template: ComponentStory<typeof Alert> = ({ children, ...args }) => (
  <Alert {...args}>{children}</Alert>
)

export const Default = Template.bind({})
Default.args = {
  children: dummyContent,
}
