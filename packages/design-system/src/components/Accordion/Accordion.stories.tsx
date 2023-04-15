import { Meta, StoryFn } from '@storybook/react'

import { Text } from '../index'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './Accordion'

const dummyContent = <Text css={{ p: '$3' }}>Dummy Content Here</Text>

export default {
  title: 'Accordion',
  component: Accordion,
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
  },
} as Meta<typeof Accordion>

const Template: StoryFn<typeof Accordion> = ({ children, ...args }) => (
  // <Alert {...args}>{children}</Alert>
  <Accordion type="single" collapsible>
    <AccordionItem value={`toggle`}>
      {/* eslint-disable @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <AccordionTrigger>{args?.title}</AccordionTrigger>
      {/* eslint-disable @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  </Accordion>
)

export const Default = {
  render: Template,

  args: {
    children: dummyContent,
    title: 'Title of Accordion',
  },
}
