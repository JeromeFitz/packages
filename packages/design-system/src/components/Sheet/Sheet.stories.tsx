import { ComponentMeta, ComponentStory } from '@storybook/react'
import { motion, AnimatePresence } from 'framer-motion'
import * as React from 'react'

import { Box } from '../Box'
import { Button } from '../Button/Button'
import { Flex } from '../Flex'
import { Text } from '../Text'

import { Sheet, SheetContent, SheetTrigger } from './Sheet'
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
} as ComponentMeta<typeof SheetContent>

const Template: ComponentStory<typeof SheetContent> = ({ ...args }) => {
  const [isMenuOpen, isMenuOpenSet] = React.useState(false)
  const handleIsMenuOpen = (newMenuState: boolean) => {
    isMenuOpenSet(newMenuState)
  }
  return (
    <Sheet open={isMenuOpen} onOpenChange={handleIsMenuOpen}>
      <SheetTrigger asChild>
        <Button>Open Sheet</Button>
      </SheetTrigger>
      <AnimatePresence>
        <SheetContent {...args}>
          <Box
            as={motion.div}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            dragElastic={0.1}
            dragMomentum={false}
            // dragTransition={{ bounceStiffness: 10, bounceDamping: 0.2 }}
            css={{
              background: '$panel',
              borderColor: '$panel',
              borderWidth: '$2',
              borderStyle: 'solid',
              borderTopLeftRadius: '$4',
              borderTopRightRadius: '$4',
              top: '25%',
              // width: '100%',
              height: '100%',
              minHeight: '250px',
              position: 'relative',
            }}
            onDragEnd={(event, info) => {
              if (info?.offset?.y > 200 || info?.velocity?.y > 200) {
                handleIsMenuOpen(false)
              }
            }}
          >
            <Flex align="center" justify="center" css={{ mt: '$1', mb: '$4' }}>
              <Box
                as="div"
                css={{
                  background: '$hoverBackground',
                  borderRadius: '$pill',
                  cursor: 'grab',
                  height: '3px',
                  width: '$6',
                  '&:active': {
                    background: '$focusBackground',
                    cursor: 'grabbing',
                  },
                  '@media (prefers-reduced-motion: no-preference)': {
                    transition: 'background 200ms ease-out',
                  },
                }}
              />
            </Flex>
            <Box
              css={{
                m: '$4',
                position: 'relative',
              }}
            >
              <Text>Text Goes Here</Text>
              <Text>Text Goes Here</Text>
              <Text>Text Goes Here</Text>
              <Text>Text Goes Here</Text>
              <Text>Text Goes Here</Text>
              <Text>Text Goes Here</Text>
            </Box>
          </Box>
        </SheetContent>
      </AnimatePresence>
    </Sheet>
  )
}

export const Default = Template.bind({})
Default.args = {}
