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
        fontWeight: 700,
        letterSpacing: '-0.02em',
        lineHeight: '20px',
        '@bp2': { lineHeight: '23px' },
      },
      2: {
        fontWeight: 700,
        letterSpacing: '-0.03em',
        lineHeight: '25px',
        '@bp2': { lineHeight: '30px' },
      },
      3: {
        fontWeight: 700,
        letterSpacing: '-0.04em',
        lineHeight: '33px',
        '@bp2': { lineHeight: '41px' },
      },
      4: {
        fontWeight: 700,
        letterSpacing: '-0.05em',
        lineHeight: '35px',
        '@bp2': { lineHeight: '55px' },
      },
    }

    return (
      <Text
        as={DEFAULT_TAG}
        {...textProps}
        ref={forwardedRef}
        size={textSize[size]}
        css={{
          fontVariantNumeric: 'proportional-nums',
          ...merge(textCss[size], props.css),
        }}
      />
    )
  }
)

Heading.displayName = 'Heading'

export { Heading }
