import { ComponentMeta, ComponentStory } from '@storybook/react'

import { PageHeading } from './PageHeading'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import mdx from './PageHeading.mdx'

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
} as ComponentMeta<typeof PageHeading>

const Template: ComponentStory<typeof PageHeading> = ({ ...args }) => (
  <PageHeading {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: dummyTitle,
  description: dummyDescription,
}
