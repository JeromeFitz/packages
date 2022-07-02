import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Paragraph } from './Paragraph'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import mdx from './Paragraph.mdx'

const dummyContent =
  '2020 Hindsight; Goodie Mob; arsenal. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut urna mauris. Donec efficitur mattis arcu, nec rutrum justo egestas aliquet. Proin quis finibus turpis. Sed a hendrerit odio, sed tristique dui. Phasellus pulvinar, lorem a commodo porta, velit diam vulputate nunc, tempor hendrerit urna nunc eget ipsum. Integer tristique sodales ultrices. Nullam eget neque ut libero ullamcorper tempus sit amet et enim. Curabitur sagittis auctor lectus sed facilisis.'

export default {
  title: 'Paragraph',
  component: Paragraph,
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
      options: ['1', '2', '3', '4', '5', '6'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Paragraph>

const Template: ComponentStory<typeof Paragraph> = ({ children, ...args }) => (
  <Paragraph {...args}> {children}</Paragraph>
)

export const Default = Template.bind({})
Default.args = {
  children: dummyContent,
  size: '1',
}
