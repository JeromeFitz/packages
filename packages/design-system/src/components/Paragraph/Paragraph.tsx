import type { ElementRef } from 'react'

import type { CSS } from '../../lib/stitches.config'
import type {
  ParagraphProps,
  ParagraphSizeVariants,
  // ParagraphWeightVariants,
  TextSizeVariants,
  // TextWeightVariants,
} from './Paragraph.types'

import merge from 'lodash/merge'
import { forwardRef } from 'react'

import { Text } from '../index'
import { DEFAULT_TAG } from './Paragraph.types'

const Paragraph = forwardRef<ElementRef<typeof DEFAULT_TAG>, ParagraphProps>(
  (props, forwardedRef) => {
    const { size = '1', weight = '4', ...textProps } = props

    // This is the mapping of Paragraph Variants to Text SizeVariants
    const textSize: Record<ParagraphSizeVariants, TextSizeVariants['size']> = {
      '1': { '@bp2': '4', '@initial': '3' },
      '2': { '@bp2': '5', '@initial': '4' },
      '3': { '@bp2': '6', '@initial': '5' },
      '4': { '@bp2': '7', '@initial': '6' },
      '5': { '@bp2': '8', '@initial': '7' },
      '6': { '@bp2': '9', '@initial': '8' },
    }

    // This is the mapping of Paragraph Variants to Text CSS
    const textCss: Record<ParagraphSizeVariants, CSS> = {
      1: {
        '@bp2': { lineHeight: '1.5' },
        color: '$typefacePrimary',
        lineHeight: '1.25',
      },
      2: {
        '@bp2': { lineHeight: '1.5' },
        color: '$typefaceSecondary',
        lineHeight: '1.25',
      },
      3: {
        '@bp2': { lineHeight: '1.5' },
        color: '$typefaceTertiary',
        lineHeight: '1.25',
      },
      4: {
        '@bp2': { lineHeight: '1.5' },
        color: '$typefaceTertiary',
        lineHeight: '1.25',
      },
      5: {
        '@bp2': { lineHeight: '1.5' },
        color: '$typefaceTertiary',
        lineHeight: '1.25',
      },
      6: {
        '@bp2': { lineHeight: '1.5' },
        color: '$typefaceTertiary',
        lineHeight: '1.25',
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
        css={{
          ...merge(textCss[size], props.css),
        }}
        ref={forwardedRef}
        size={textSize[size]}
        weight={weight}
      />
    )
  },
)

Paragraph.displayName = 'Paragraph'

export { Paragraph }
