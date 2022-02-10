import merge from 'lodash/merge'
import * as React from 'react'

import { CSS } from '../../stitches.config'
import { Text } from '../index'

import type {
  ParagraphProps,
  ParagraphSizeVariants,
  TextSizeVariants,
} from './Paragraph.types'
import { DEFAULT_TAG } from './Paragraph.types'

const Paragraph = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  ParagraphProps
>((props, forwardedRef) => {
  // '2' here is the default Paragraph size variant
  const { size = '1', ...textProps } = props

  // This is the mapping of Paragraph Variants to Text variants
  const textSize: Record<ParagraphSizeVariants, TextSizeVariants['size']> = {
    1: { '@initial': '3', '@bp2': '4' },
    2: { '@initial': '5', '@bp2': '6' },
  }

  // This is the mapping of Paragraph Variants to Text css
  const textCss: Record<ParagraphSizeVariants, CSS> = {
    1: { lineHeight: '25px', '@bp2': { lineHeight: '27px' } },
    2: { color: '$slate11', lineHeight: '27px', '@bp2': { lineHeight: '30px' } },
  }
  return (
    <Text
      as={DEFAULT_TAG}
      {...textProps}
      ref={forwardedRef}
      size={textSize[size]}
      css={{
        ...merge(textCss[size], props.css),
      }}
    />
  )
})

Paragraph.displayName = 'Paragraph'

export { Paragraph }
