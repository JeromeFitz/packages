import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Flex, Label } from '../index'

import { Checkbox } from './Checkbox'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import mdx from './Checkbox.mdx'

const dummyContent = 'Hello'

export default {
  title: 'Checkbox',
  component: Checkbox,
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
      options: ['1', '2', '3'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = ({ children, ...args }) => (
  <Flex css={{}}>
    <Checkbox {...args} />
    <Label css={{ pl: '$3' }} htmlFor={args?.id}>
      {children}
    </Label>
  </Flex>
)

export const Default = Template.bind({})
Default.args = {
  children: dummyContent,
  defaultChecked: true,
  id: 'customCheckbox1',
}
