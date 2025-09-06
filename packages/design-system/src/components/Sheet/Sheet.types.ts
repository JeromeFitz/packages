import type * as DialogPrimitive from '@radix-ui/react-dialog'
import type { ComponentProps } from 'react'

import type { CSS, VariantProps } from '../../lib/stitches.config'
import type { StyledContent } from './Sheet.styles'

type SheetProps = ComponentProps<typeof DialogPrimitive.Root>

type SheetContentVariants = VariantProps<typeof StyledContent>
type DialogContentPrimitiveProps = ComponentProps<typeof DialogPrimitive.Content>
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
type SheetContentProps = DialogContentPrimitiveProps &
  SheetContentVariants & { css?: CSS }

export type {
  DialogContentPrimitiveProps,
  SheetContentProps,
  SheetContentVariants,
  SheetProps,
}
