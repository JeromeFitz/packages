import type { Meta, StoryFn } from '@storybook/react'

import { useState } from 'react'

import { Button, Text } from '../index'
import { Sheet, SheetContent, SheetTrigger } from './Sheet'

export default {
  argTypes: {
    as: {
      control: false,
    },
    ref: {
      control: false,
    },
    side: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
    },
    state: {
      control: { type: 'radio' },
      options: [null, 'active', 'waiting'],
    },
  },
  component: Sheet,
  parameters: {
    docs: {
      description: {
        component: 'MDX Content is TBD',
      },
    },
  },
  title: 'Sheet',
} as Meta<typeof Sheet>

const Template: StoryFn<typeof Sheet> = ({ ...args }) => {
  const [isSheetOpen, isSheetOpenSet] = useState(false)
  const handleIsSheetOpen = (newMenuState: boolean) => {
    isSheetOpenSet(newMenuState)
  }
  return (
    <Sheet onOpenChange={handleIsSheetOpen} open={isSheetOpen}>
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

export const Default = {
  args: {},
  render: Template,
}
