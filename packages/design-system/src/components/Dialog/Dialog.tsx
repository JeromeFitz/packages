/**
 * https://www.radix-ui.com/primitives/docs/components/dialog
 */
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { forwardRef } from 'react'
import type { ComponentProps, ElementRef, ReactNode } from 'react'

import { styled } from '../../lib/stitches.config'
import type { CSS } from '../../lib/stitches.config'
import { Icon, IconButton } from '../index'
import { overlayStyles } from '../Overlay/Overlay.styles'
import { panelStyles } from '../Panel/Panel.styles'

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
type DialogProps = ComponentProps<typeof DialogPrimitive.Root> & {
  children: ReactNode
}

const StyledOverlay = styled(DialogPrimitive.Overlay, overlayStyles, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
})

function Dialog({ children, ...props }: DialogProps) {
  return (
    <DialogPrimitive.Root {...props}>
      <StyledOverlay />
      {children}
    </DialogPrimitive.Root>
  )
}

const StyledContent = styled(DialogPrimitive.Content, panelStyles, {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 200,
  maxHeight: '85vh',
  padding: '$4',
  marginTop: '-5vh',
  // animation: `${fadeIn} 125ms linear, ${moveDown} 125ms cubic-bezier(0.22, 1, 0.36, 1)`,

  // Among other things, prevents text alignment inconsistencies when dialog can't be centered in the viewport evenly.
  // Affects animated and non-animated dialogs alike.
  willChange: 'transform',

  '&:focus': {
    outline: 'none',
  },
})

const StyledCloseButton = styled(DialogPrimitive.Close, {
  position: 'absolute',
  top: '$2',
  right: '$2',
})

type DialogContentPrimitiveProps = ComponentProps<typeof DialogPrimitive.Content>
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
type DialogContentProps = DialogContentPrimitiveProps & { css?: CSS }

export const DialogContent = forwardRef<
  ElementRef<typeof StyledContent>,
  DialogContentProps
>(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    {children}
    <StyledCloseButton asChild>
      <IconButton variant="ghost">
        <Icon.Cross />
      </IconButton>
    </StyledCloseButton>
  </StyledContent>
))

const DialogTrigger = DialogPrimitive.Trigger
const DialogClose = DialogPrimitive.Close
const DialogTitle = DialogPrimitive.Title
const DialogDescription = DialogPrimitive.Description

export { Dialog, DialogTrigger, DialogClose, DialogTitle, DialogDescription }
