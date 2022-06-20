import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

import { Button } from '../Button/Button'
import { Text } from '../Text'

import { Sheet, SheetContent, SheetTrigger } from './Sheet'
import type { SheetContentPropsExtended } from './Sheet'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mdx from './Sheet.mdx'

export default {
  title: 'Sheet',
  component: Sheet,
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
    ref: {
      control: false,
    },
    side: {
      options: ['top', 'right', 'bottom', 'left'],
      control: { type: 'select' },
    },
    state: {
      options: [null, 'active', 'waiting'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof SheetContentPropsExtended>

const Template: ComponentStory<typeof SheetContentPropsExtended> = ({ ...args }) => {
  const [isSheetOpen, isSheetOpenSet] = useState(false)
  const handleIsSheetOpen = (newMenuState: boolean) => {
    isSheetOpenSet(newMenuState)
  }
  return (
    <Sheet open={isSheetOpen} onOpenChange={handleIsSheetOpen}>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent handleIsSheetOpen={handleIsSheetOpen} {...args}>
        <Text>Text Goes Here</Text>
        <Text>Text Goes Here</Text>
        <Text>Text Goes Here</Text>
        <Text>Text Goes Here</Text>
        <Text>Text Goes Here</Text>
        <Text>Text Goes Here</Text>
      </SheetContent>
    </Sheet>
  )
}

export const Default = Template.bind({})
Default.args = {}
