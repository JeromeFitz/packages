import * as DialogPrimitive from '@radix-ui/react-dialog'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { motion, AnimatePresence } from 'framer-motion'
import * as React from 'react'

// import useDelayedRender from '../../hooks/useDelayedRender'
import { Box } from '../Box'
import { Button } from '../Button/Button'
import { Flex } from '../Flex'
import { Text } from '../Text'

import { Sheet, SheetContent, SheetTrigger } from './Sheet'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import mdx from './Sheet.mdx'
import { StyledContent, StyledOverlay } from './Sheet.styles'

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
  // const { mounted, rendered } = useDelayedRender(isMenuOpen, {
  //   enterDelay: 250,
  //   exitDelay: 1000,
  //   onUnmount: (props) => {
  //     console.dir(`>>>> onUnmount`)
  //     console.dir(props)
  //   },
  // })
  // console.dir(`> useDelayedRender`)
  // console.dir(`>> isMenuOpen: ${isMenuOpen}`)
  // console.dir(`>> mounted:    ${mounted}`)
  // console.dir(`>> rendered:   ${rendered}`)

  // if (!mounted) return null

  return (
    <Box>
      {/* <Sheet open={isMenuOpen} onOpenChange={handleIsMenuOpen}> */}
      <DialogPrimitive.Root open={isMenuOpen} onOpenChange={handleIsMenuOpen}>
        <SheetTrigger asChild>
          <Button css={{ zIndex: '$toast' }}>Open Sheet</Button>
        </SheetTrigger>
        <DialogPrimitive.Portal>
          <StyledOverlay />
        </DialogPrimitive.Portal>
        <AnimatePresence>
          <DialogPrimitive.Portal>
            {/* <StyledOverlay
              css={{
                opacity: 0,
                transition: 'all 500ms ease',
                '&[data-state="open"]': {
                  opacity: 1,
                },

                '&[data-state="closed"]': {
                  opacity: 0,
                },
              }}
            /> */}

            <StyledContent
              css={{
                // p: '$2 $2 0',
                // top: '25%',
                // height: '100vh',
                width: '100%',
                // opacity: 0,
                // transition: 'all 2s ease',
                // '&[data-state="open"]': {
                //   // opacity: 1,
                //   background: '$openBackground',
                // },

                // '&[data-state="closed"]': {
                //   // opacity: 0,
                //   background: '$focusBackground',
                // },
                zIndex: '$toast',
              }}
              // onPointerDownOutside={() => handleIsMenuOpen(false)}
              // onClick={() => handleIsMenuOpen(false)}
              {...args}
            >
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
            </StyledContent>
            {/* <Box
              css={{
                background: '$panel',
                position: 'fixed',
                bottom: 0,
                height: '75px',
                width: '100%',
                zIndex: '$1',
              }}
            /> */}
          </DialogPrimitive.Portal>
        </AnimatePresence>
        {/* </Sheet> */}
      </DialogPrimitive.Root>
    </Box>
  )
}

export const Default = Template.bind({})
Default.args = {}
