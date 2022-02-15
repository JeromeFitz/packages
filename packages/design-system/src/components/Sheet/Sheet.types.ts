import * as DialogPrimitive from '@radix-ui/react-dialog'

import { VariantProps, CSS } from '../../stitches.config'

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
