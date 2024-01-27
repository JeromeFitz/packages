import { styled } from '../../lib/stitches.config'

const Text = styled('span', {
  compoundVariants: [
    {
      css: {
        background:
          'linear-gradient(to right, $typefacePrimary, $typefaceSecondary)',
      },
      gradient: 'true',
      variant: 'primary',
    },
    {
      css: {
        background:
          'linear-gradient(to right, $typefaceSecondary, $typefacePrimary)',
      },
      gradient: 'true',
      variant: 'secondary',
    },
    {
      css: {
        background: 'linear-gradient(to right, $typefaceTertiary, $typefacePrimary)',
      },
      gradient: 'true',
      variant: 'tertiary',
    },
    {
      css: {
        background: 'linear-gradient(to right, $hiContrast, $typefacePrimary)',
      },
      gradient: 'true',
      variant: 'contrast',
    },
  ],
  defaultVariants: {
    size: '3',
    variant: 'primary',
    weight: '4',
  },
  // fontVariantNumeric: 'tabular-nums',
  display: 'block',
  fontVariationSettings: '"wght" $fontWeights$4',
  fontWeight: '$4',

  // @reset
  lineHeight: '1.2',
  margin: '0',
  variants: {
    gradient: {
      true: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
    size: {
      '1': {
        fontSize: '$1',
      },
      '2': {
        fontSize: '$2',
      },
      '3': {
        fontSize: '$3',
      },
      '4': {
        fontSize: '$4',
      },
      '5': {
        fontSize: '$5',
        letterSpacing: '-.015em',
      },
      '6': {
        fontSize: '$6',
        letterSpacing: '-.016em',
      },
      '7': {
        fontSize: '$7',
        letterSpacing: '-.031em',
        // textIndent: '-.005em',
      },
      '8': {
        fontSize: '$8',
        letterSpacing: '-.034em',
        // textIndent: '-.018em',
      },
      '9': {
        fontSize: '$9',
        letterSpacing: '-.055em',
        // textIndent: '-.025em',
      },
    },
    variant: {
      contrast: {
        color: '$hiContrast',
      },
      error: {
        color: '$errorText',
      },
      info: {
        color: '$infoText',
      },
      note: {
        color: '$typefacePrimary',
      },
      primary: {
        color: '$typefacePrimary',
      },
      quote: {
        color: '$quoteText',
      },
      secondary: {
        color: '$typefaceSecondary',
      },
      success: {
        color: '$successText',
      },
      tertiary: {
        color: '$typefaceTertiary',
      },
      warning: {
        color: '$warningText',
      },
    },
    weight: {
      '1': { fontVariationSettings: '"wght" $fontWeights$1', fontWeight: '$1' },
      '2': {
        fontVariationSettings: '"wght" $fontWeights$2',
        fontWeight: '$2',
      },
      '3': { fontVariationSettings: '"wght" $fontWeights$3', fontWeight: '$3' },
      '4': { fontVariationSettings: '"wght" $fontWeights$4', fontWeight: '$4' },
      '5': { fontVariationSettings: '"wght" $fontWeights$5', fontWeight: '$5' },
      '6': { fontVariationSettings: '"wght" $fontWeights$6', fontWeight: '$6' },
      '7': { fontVariationSettings: '"wght" $fontWeights$7', fontWeight: '$7' },
      '8': {
        fontVariationSettings: '"wght" $fontWeights$8',
        fontWeight: '$8',
      },
      '9': {
        fontVariationSettings: '"wght" $fontWeights$9',
        fontWeight: '$9',
      },
    },
  },
})

Text.toString = () => `.${Text.className}`

export { Text }
