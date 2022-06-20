import * as React from 'react'

import type { CSS, VariantProps } from '../../lib/stitches.config'
import { Text } from '../index'

const DEFAULT_TAG = 'p'

type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size'>
type ParagraphSizeVariants = '1' | '2' | '3' | '4' | '5' | '6'
type ParagraphVariants = { size?: ParagraphSizeVariants } & Omit<
  VariantProps<typeof Text>,
  'size'
>
type ParagraphProps = React.ComponentProps<typeof DEFAULT_TAG> &
  ParagraphVariants & { css?: CSS; as?: any }

export type { ParagraphProps, ParagraphSizeVariants, TextSizeVariants }
export { DEFAULT_TAG }
