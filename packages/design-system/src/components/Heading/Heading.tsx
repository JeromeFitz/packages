import merge from 'lodash/merge'
import * as React from 'react'

import { CSS } from '../../lib/stitches.config'
import { Text } from '../index'

import type {
  HeadingProps,
  HeadingSizeVariants,
  TextSizeVariants,
} from './Heading.types'
import { DEFAULT_TAG } from './Heading.types'

const Heading = React.forwardRef<React.ElementRef<typeof DEFAULT_TAG>, HeadingProps>(
  (props, forwardedRef) => {
    // '2' here is the default heading size variant
    const { size = '1', ...textProps } = props
    // This is the mapping of Heading Variants to Text variants
    const textSize: Record<HeadingSizeVariants, TextSizeVariants['size']> = {
      1: { '@initial': '4', '@bp2': '5' },
      2: { '@initial': '6', '@bp2': '7' },
      3: { '@initial': '7', '@bp2': '8' },
      4: { '@initial': '8', '@bp2': '9' },
    }

    // This is the mapping of Heading Variants to Text css
    const textCss: Record<HeadingSizeVariants, CSS> = {
      1: {
        letterSpacing: '-0.02em',
        lineHeight: '1',
        '@bp2': { lineHeight: '1.25' },
      },
      2: {
        letterSpacing: '-0.03em',
        lineHeight: '1',
        '@bp2': { lineHeight: '1.25' },
      },
      3: {
        letterSpacing: '-0.04em',
        lineHeight: '1.125',
        '@bp2': { lineHeight: '1.5' },
      },
      4: {
        letterSpacing: '-0.05em',
        lineHeight: '1.125',
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
          // fontVariantNumeric: 'proportional-nums',
          fontVariationSettings: '"wght" $fontWeights$7',
          fontWeight: '$fontWeights$7',
          ...merge(textCss[size], props.css),
        }}
      />
    )
  }
)

Heading.displayName = 'Heading'

export { Heading }
