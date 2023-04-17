import { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import { Button, Text } from '../index'

import { Sheet, SheetContent, SheetTrigger } from './Sheet'

export default {
  title: 'Sheet',
  component: Sheet,
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
} as Meta<typeof Sheet>

const Template: StoryFn<typeof Sheet> = ({ ...args }) => {
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

export const Default = {
  render: Template,
  args: {},
}
