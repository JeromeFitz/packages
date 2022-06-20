import * as DialogPrimitive from '@radix-ui/react-dialog'
import * as React from 'react'

import type { CSS, VariantProps } from '../../lib/stitches.config'

import { StyledContent } from './Sheet.styles'

type SheetProps = React.ComponentProps<typeof DialogPrimitive.Root>

type SheetContentVariants = VariantProps<typeof StyledContent>
type DialogContentPrimitiveProps = React.ComponentProps<
  typeof DialogPrimitive.Content
>
type SheetContentProps = DialogContentPrimitiveProps &
  SheetContentVariants & { css?: CSS }

export type {
  SheetProps,
  SheetContentVariants,
  DialogContentPrimitiveProps,
  SheetContentProps,
}
