import { styled } from '../../lib/stitches.config'

const Text = styled('span', {
  // @reset
  lineHeight: '1.2',
  margin: '0',
  fontVariationSettings: '"wght" $fontWeights$4',
  fontWeight: '$4',
  // fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
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
      primary: {
        color: '$typefacePrimary',
      },
      secondary: {
        color: '$typefaceSecondary',
      },
      tertiary: {
        color: '$typefaceTertiary',
      },
      contrast: {
        color: '$hiContrast',
      },
      error: {
        color: '$errorText',
      },
      info: {
        color: '$infoText',
      },
      success: {
        color: '$successText',
      },
      warning: {
        color: '$warningText',
      },
      quote: {
        color: '$quoteText',
      },
    },
    gradient: {
      true: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
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
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      gradient: 'true',
      css: {
        background:
          'linear-gradient(to right, $typefacePrimary, $typefaceSecondary)',
      },
    },
    {
      variant: 'secondary',
      gradient: 'true',
      css: {
        background:
          'linear-gradient(to right, $typefaceSecondary, $typefacePrimary)',
      },
    },
    {
      variant: 'tertiary',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $typefaceTertiary, $typefacePrimary)',
      },
    },
    {
      variant: 'contrast',
      gradient: 'true',
      css: {
        background: 'linear-gradient(to right, $hiContrast, $typefacePrimary)',
      },
    },
  ],
  defaultVariants: {
    size: '3',
    variant: 'primary',
    weight: '4',
  },
})

Text.toString = () => `.${Text.className}`

export { Text }
