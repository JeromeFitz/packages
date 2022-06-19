import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'

import { StyledOverlay, StyledContent } from './Sheet.styles'
import type { SheetProps, SheetContentProps } from './Sheet.types'

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

const SheetContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  SheetContentProps
>(({ children, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <StyledContent {...props} ref={forwardedRef}>
      {children}
    </StyledContent>
  </DialogPrimitive.Portal>
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
