import { Text } from '@ds/components'
import { CSS, VariantProps } from '@ds/stitches.config'
import * as React from 'react'

const DEFAULT_TAG = 'h1'

type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size'>
type HeadingSizeVariants = '1' | '2' | '3' | '4'
type HeadingVariants = { size?: HeadingSizeVariants } & Omit<
  VariantProps<typeof Text>,
  'size'
>
type HeadingProps = React.ComponentProps<typeof DEFAULT_TAG> &
  HeadingVariants & { css?: CSS; as?: any }

export type { TextSizeVariants, HeadingProps, HeadingSizeVariants }
export { DEFAULT_TAG }
