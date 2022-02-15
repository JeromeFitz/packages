import * as DialogPrimitive from '@radix-ui/react-dialog'
import { Cross1Icon } from '@radix-ui/react-icons'
import * as React from 'react'

import { IconButton } from '../IconButton'

import { StyledOverlay, StyledContent, StyledCloseButton } from './Sheet.styles'
import type { SheetProps, SheetContentProps } from './Sheet.types'

function Sheet({ children, ...props }: SheetProps) {
  return (
    <DialogPrimitive.Root {...props}>
      <DialogPrimitive.Portal>
        <StyledOverlay />
        {children}
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  SheetContentProps
>(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    {children}
    <StyledCloseButton asChild>
      <IconButton variant="ghost">
        <Cross1Icon />
      </IconButton>
    </StyledCloseButton>
  </StyledContent>
))

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
