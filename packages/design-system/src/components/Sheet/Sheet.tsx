import type { ElementRef } from 'react'

import type { SheetContentProps, SheetProps } from './Sheet.types'

import * as DialogPrimitive from '@radix-ui/react-dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { forwardRef, useId } from 'react'

import { Box } from '../Box'
import { Flex } from '../Flex'
import { StyledContent, StyledOverlay } from './Sheet.styles'

/**
 * @note This only works for BOTTOM right now :X
 */
const Notch = () => {
  return (
    <Flex align="center" css={{ mb: '$4', mt: '$1' }} justify="center">
      <Box
        as="div"
        css={{
          '@media (prefers-reduced-motion: no-preference)': {
            transition: 'background 200ms ease-out',
          },
          '&:active': {
            background: '$focusBackground',
            cursor: 'grabbing',
          },
          background: '$hoverBackground',
          borderRadius: '$pill',
          cursor: 'grab',
          height: '$1',
          width: '$7',
        }}
      />
    </Flex>
  )
}

function Sheet({ children, ...props }: SheetProps) {
  return (
    <DialogPrimitive.Root {...props}>
      <DialogPrimitive.Portal>
        <StyledOverlay />
      </DialogPrimitive.Portal>
      {children}
    </DialogPrimitive.Root>
  )
}

interface SheetContentPropsExtended extends SheetContentProps {
  handleIsSheetOpen: (k: boolean) => void
}

const SheetContent = forwardRef<
  ElementRef<typeof StyledContent>,
  SheetContentPropsExtended
>(({ children, handleIsSheetOpen, ...props }, forwardedRef) => {
  const keyBox1 = useId()
  const keyBox2 = useId()
  return (
    <DialogPrimitive.Portal>
      <StyledContent {...props} ref={forwardedRef}>
        <AnimatePresence>
          <Box
            as={motion.div}
            css={{
              background: '$panel',
              borderColor: '$panel',
              borderStyle: 'solid',
              borderTopLeftRadius: '$4',
              borderTopRightRadius: '$4',
              borderWidth: '$2',
              height: '100%',
              minHeight: '150px',
              position: 'relative',
              zIndex: '$toast',
            }}
            drag="y"
            dragConstraints={{ bottom: 0, left: 0, right: 0, top: 0 }}
            dragElastic={0.1}
            dragMomentum={false}
            key={keyBox1}
            onDragEnd={(event, info) => {
              if (info?.offset?.y > 200 || info?.velocity?.y > 200) {
                handleIsSheetOpen(false)
              }
            }}
          >
            <Notch />
            <Box
              css={{
                m: '$4',
                position: 'relative',
              }}
            >
              {children}
            </Box>
          </Box>
          <Box
            css={{
              background: '$panel',
              borderColor: '$panel',
              borderStyle: 'solid',
              borderTopLeftRadius: '$4',
              borderTopRightRadius: '$4',
              borderWidth: '$2',
              bottom: 0,
              height: '125px',
              position: 'fixed',
              width: '100%',
              zIndex: '$1',
            }}
            key={keyBox2}
          />
        </AnimatePresence>
      </StyledContent>
    </DialogPrimitive.Portal>
  )
})

const SheetClose = DialogPrimitive.Close
const SheetDescription = DialogPrimitive.Description
const SheetPortal = DialogPrimitive.Portal
const SheetTitle = DialogPrimitive.Title
const SheetTrigger = DialogPrimitive.Trigger

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
}
export type { SheetContentPropsExtended }
