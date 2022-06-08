import { styled } from '../../lib/stitches.config'

const Text = styled('span', {
  // @reset
  lineHeight: '1.2',
  margin: '0',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
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
        textIndent: '-.005em',
      },
      '8': {
        fontSize: '$8',
        letterSpacing: '-.034em',
        textIndent: '-.018em',
      },
      '9': {
        fontSize: '$9',
        letterSpacing: '-.055em',
        textIndent: '-.025em',
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
    },
    gradient: {
      true: {
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      },
    },
    weight: {
      thin: { fontWeight: 100 },
      extraLight: { fontWeight: 200 },
      light: { fontWeight: 300 },
      normal: { fontWeight: 400 },
      medium: { fontWeight: 500 },
      semiBold: { fontWeight: 600 },
      bold: { fontWeight: 700 },
      extraBold: { fontWeight: 800 },
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
  },
})

Text.toString = () => `.${Text.className}`

export { Text }
