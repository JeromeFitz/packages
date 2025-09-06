/**
 * https://www.radix-ui.com/primitives/docs/components/popover
 */
import type { ComponentProps, ElementRef, ReactNode } from 'react'

import type { CSS } from '../../lib/stitches.config'

import * as PopoverPrimitive from '@radix-ui/react-popover'
import { forwardRef } from 'react'

import { styled } from '../../lib/stitches.config'
import { Box } from '../index'
import { panelStyles } from '../Panel/Panel.styles'

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
type PopoverProps = ComponentProps<typeof PopoverPrimitive.Root> & {
  children: ReactNode
}

function Popover({ children, ...props }: PopoverProps) {
  return <PopoverPrimitive.Root {...props}>{children}</PopoverPrimitive.Root>
}

const StyledContent = styled(PopoverPrimitive.Content, panelStyles, {
  '&:focus': {
    outline: 'none',
  },
  maxWidth: 265,
  minHeight: '$6',
  minWidth: 200,
})

type PopoverContentPrimitiveProps = ComponentProps<typeof PopoverPrimitive.Content>

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
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
          height={5}
          offset={5}
          style={{ fill: 'currentColor' }}
          width={11}
        />
      </Box>
    )}
  </StyledContent>
))
PopoverContent.displayName = 'PopoverContent'

const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverClose = PopoverPrimitive.Close

export { Popover, PopoverClose, PopoverContent, PopoverTrigger }
