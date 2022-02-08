import { Text } from '@ds/components'
import { CSS, VariantProps } from '@ds/stitches.config'
import * as React from 'react'

const DEFAULT_TAG = 'p'

type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size'>
type ParagraphSizeVariants = '1' | '2'
type ParagraphVariants = { size?: ParagraphSizeVariants } & Omit<
  VariantProps<typeof Text>,
  'size'
>
type ParagraphProps = React.ComponentProps<typeof DEFAULT_TAG> &
  ParagraphVariants & { css?: CSS; as?: any }

export type { ParagraphProps, ParagraphSizeVariants, TextSizeVariants }
export { DEFAULT_TAG }
