import merge from 'lodash/merge'
import * as React from 'react'

import type { CSS } from '../../lib/stitches.config'
import { Text } from '../index'

import type {
  ParagraphProps,
  ParagraphSizeVariants,
  // ParagraphWeightVariants,
  TextSizeVariants,
  // TextWeightVariants,
} from './Paragraph.types'
import { DEFAULT_TAG } from './Paragraph.types'

const Paragraph = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  ParagraphProps
>((props, forwardedRef) => {
  const { size = '1', weight = '4', ...textProps } = props

  // This is the mapping of Paragraph Variants to Text SizeVariants
  const textSize: Record<ParagraphSizeVariants, TextSizeVariants['size']> = {
    '1': { '@initial': '3', '@bp2': '4' },
    '2': { '@initial': '4', '@bp2': '5' },
    '3': { '@initial': '5', '@bp2': '6' },
    '4': { '@initial': '6', '@bp2': '7' },
    '5': { '@initial': '7', '@bp2': '8' },
    '6': { '@initial': '8', '@bp2': '9' },
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

  // // This is the mapping of Paragraph Variants to Text WeightVariants
  // const textWeight: Record<ParagraphWeightVariants, TextWeightVariants['weight']> = {
  //   '1': '1',
  //   '2': '2',
  //   '3': '3',
  //   '4': '4',
  //   '5': '5',
  //   '6': '6',
  //   '7': '7',
  //   '8': '8',
  //   '9': '9',
  // }

  return (
    <Text
      as={DEFAULT_TAG}
      {...textProps}
      ref={forwardedRef}
      size={textSize[size]}
      weight={weight}
      css={{
        ...merge(textCss[size], props.css),
      }}
    />
  )
})

Paragraph.displayName = 'Paragraph'

export { Paragraph }
