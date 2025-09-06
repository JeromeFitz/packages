import type { ComponentProps } from 'react'

import type { CSS, VariantProps } from '../../lib/stitches.config'
import type { Text } from '../index'

const DEFAULT_TAG = 'p'

type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size'>
type ParagraphSizeVariants = '1' | '2' | '3' | '4' | '5' | '6'
type TextWeightVariants = Pick<VariantProps<typeof Text>, 'weight'>
type ParagraphWeightVariants = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
type ParagraphVariants = {
  size?: ParagraphSizeVariants
  weight?: ParagraphWeightVariants
} & Omit<VariantProps<typeof Text>, 'size'>
type ParagraphProps = ComponentProps<typeof DEFAULT_TAG> &
  ParagraphVariants & { as?: any; css?: CSS }

export type {
  ParagraphProps,
  ParagraphSizeVariants,
  ParagraphWeightVariants,
  TextSizeVariants,
  TextWeightVariants,
}
export { DEFAULT_TAG }
