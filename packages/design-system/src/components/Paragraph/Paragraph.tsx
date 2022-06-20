import merge from 'lodash/merge'
import * as React from 'react'

import type { CSS } from '../../lib/stitches.config'
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

  // This is the mapping of Paragraph Variants to Text SizeVariants
  const textSize: Record<ParagraphSizeVariants, TextSizeVariants['size']> = {
    1: { '@initial': '3', '@bp2': '4' },
    2: { '@initial': '4', '@bp2': '5' },
    3: { '@initial': '5', '@bp2': '6' },
    4: { '@initial': '6', '@bp2': '7' },
    5: { '@initial': '7', '@bp2': '8' },
    6: { '@initial': '8', '@bp2': '9' },
  }

  // This is the mapping of Paragraph Variants to Text CSS
  const textCss: Record<ParagraphSizeVariants, CSS> = {
    1: {
      color: '$typefacePrimary',
      lineHeight: '1.25',
      '@bp2': { lineHeight: '1.5' },
    },
    2: {
      color: '$typefaceSecondary',
      lineHeight: '1.25',
      '@bp2': { lineHeight: '1.5' },
    },
    3: {
      color: '$typefaceTertiary',
      lineHeight: '1.25',
      '@bp2': { lineHeight: '1.5' },
    },
    4: {
      color: '$typefaceTertiary',
      lineHeight: '1.25',
      '@bp2': { lineHeight: '1.5' },
    },
    5: {
      color: '$typefaceTertiary',
      lineHeight: '1.25',
      '@bp2': { lineHeight: '1.5' },
    },
    6: {
      color: '$typefaceTertiary',
      lineHeight: '1.25',
      '@bp2': { lineHeight: '1.5' },
    },
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
