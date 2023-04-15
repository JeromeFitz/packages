import { Meta, StoryFn } from '@storybook/react'

import { Flex, Label } from '../index'

import { Checkbox } from './Checkbox'

const dummyContent = 'Hello'

export default {
  title: 'Checkbox',
  component: Checkbox,
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
      options: ['1', '2', '3'],
      control: { type: 'select' },
    },
  },
} as Meta<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = ({ children, ...args }) => (
  <Flex css={{}}>
    <Checkbox {...args} />
    <Label css={{ pl: '$4' }} htmlFor={args?.id}>
      {children}
    </Label>
  </Flex>
)

export const Default = {
  render: Template,

  args: {
    children: dummyContent,
    defaultChecked: true,
    id: 'customCheckbox1',
  },
}
