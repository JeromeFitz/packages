/**
 * https://www.radix-ui.com/docs/primitives/components/popover
 */
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { forwardRef } from 'react'
import type { ComponentProps, ElementRef, ReactNode } from 'react'

import { styled } from '../../lib/stitches.config'
import type { CSS } from '../../lib/stitches.config'
import { Box } from '../index'
import { panelStyles } from '../Panel/Panel.styles'

type PopoverProps = ComponentProps<typeof PopoverPrimitive.Root> & {
  children: ReactNode
}

function Popover({ children, ...props }: PopoverProps) {
  return <PopoverPrimitive.Root {...props}>{children}</PopoverPrimitive.Root>
}

const StyledContent = styled(PopoverPrimitive.Content, panelStyles, {
  minWidth: 200,
  minHeight: '$6',
  maxWidth: 265,
  '&:focus': {
    outline: 'none',
  },
})

type PopoverContentPrimitiveProps = ComponentProps<typeof PopoverPrimitive.Content>

type PopoverContentProps = PopoverContentPrimitiveProps & {
  css?: CSS
  hideArrow?: boolean
}

const PopoverContent = forwardRef<
  ElementRef<typeof StyledContent>,
  PopoverContentProps
>(({ children, hideArrow, ...props }, fowardedRef) => (
  <StyledContent sideOffset={0} {...props} ref={fowardedRef}>
    {children}
    {!hideArrow && (
      <Box css={{ color: '$panel' }}>
        <PopoverPrimitive.Arrow
          width={11}
          height={5}
          offset={5}
          style={{ fill: 'currentColor' }}
        />
      </Box>
    )}
  </StyledContent>
))
PopoverContent.displayName = 'PopoverContent'

const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverClose = PopoverPrimitive.Close

export { Popover, PopoverContent, PopoverTrigger, PopoverClose }
