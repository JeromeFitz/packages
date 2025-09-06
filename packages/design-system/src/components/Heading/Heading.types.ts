import type { ComponentProps } from 'react'

import type { CSS, VariantProps } from '../../lib/stitches.config'
import type { Text } from '../index'

const DEFAULT_TAG = 'h1'

type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size'>
type HeadingSizeVariants = '1' | '2' | '3' | '4'
type HeadingVariants = { size?: HeadingSizeVariants } & Omit<
  VariantProps<typeof Text>,
  'size'
>
type HeadingProps = ComponentProps<typeof DEFAULT_TAG> &
  HeadingVariants & { as?: any; css?: CSS }

export type { HeadingProps, HeadingSizeVariants, TextSizeVariants }
export { DEFAULT_TAG }
