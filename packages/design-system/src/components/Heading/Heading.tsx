import type { ElementRef } from 'react'

import type { CSS } from '../../lib/stitches.config'
import type {
  HeadingProps,
  HeadingSizeVariants,
  TextSizeVariants,
} from './Heading.types'

import merge from 'lodash/merge'
import { forwardRef } from 'react'

import { Text } from '../Text'
import { DEFAULT_TAG } from './Heading.types'

const Heading = forwardRef<ElementRef<typeof DEFAULT_TAG>, HeadingProps>(
  (props, forwardedRef) => {
    // '2' here is the default heading size variant
    const { size = '1', ...textProps } = props
    // This is the mapping of Heading Variants to Text variants
    const textSize: Record<HeadingSizeVariants, TextSizeVariants['size']> = {
      1: { '@bp2': '5', '@initial': '4' },
      2: { '@bp2': '7', '@initial': '6' },
      3: { '@bp2': '8', '@initial': '7' },
      4: { '@bp2': '9', '@initial': '8' },
    }

    // This is the mapping of Heading Variants to Text css
    const textCss: Record<HeadingSizeVariants, CSS> = {
      1: {
        '@bp2': { lineHeight: '1.25' },
        letterSpacing: '-0.02em',
        lineHeight: '1',
      },
      2: {
        '@bp2': { lineHeight: '1.25' },
        letterSpacing: '-0.03em',
        lineHeight: '1',
      },
      3: {
        '@bp2': { lineHeight: '1.5' },
        letterSpacing: '-0.04em',
        lineHeight: '1.125',
      },
      4: {
        '@bp2': { lineHeight: '1.5' },
        letterSpacing: '-0.05em',
        lineHeight: '1.125',
      },
    }

    return (
      <Text
        as={DEFAULT_TAG}
        {...textProps}
        css={{
          // fontVariantNumeric: 'proportional-nums',
          fontVariationSettings: '"wght" $fontWeights$7',
          fontWeight: '$fontWeights$7',
          ...merge(textCss[size], props.css),
        }}
        ref={forwardedRef}
        size={textSize[size]}
      />
    )
  },
)

Heading.displayName = 'Heading'

export { Heading }
