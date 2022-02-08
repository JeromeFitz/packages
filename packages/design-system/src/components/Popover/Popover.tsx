import { Box, panelStyles } from '@ds/components'
import { styled, CSS } from '@ds/stitches.config'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import * as React from 'react'

type PopoverProps = React.ComponentProps<typeof PopoverPrimitive.Root> & {
  children: React.ReactNode
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

type PopoverContentPrimitiveProps = React.ComponentProps<
  typeof PopoverPrimitive.Content
>

type PopoverContentProps = PopoverContentPrimitiveProps & {
  css?: CSS
  hideArrow?: boolean
}

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
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
