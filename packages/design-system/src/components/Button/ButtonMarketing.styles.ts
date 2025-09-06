import { darkTheme, styled } from '../../lib/stitches.config'

const StyledButton = styled('button', {
  '&:disabled': {
    bc: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    // pointerEvents: 'none',
    pointerEvents: 'not-allowed',
  },
  '&[href]': {
    cursor: 'pointer',
  },
  alignItems: 'center',
  all: 'unset',
  borderRadius: '$2',

  boxSizing: 'border-box',
  defaultVariants: {
    variant: 'contrast',
  },
  display: 'inline-flex',
  fontFamily: '$mono',
  fontSize: '$3',
  fontVariationSettings: '"wght" $fontWeights$5',
  fontWeight: '$fontWeights$5',
  // @custom
  height: '$8',

  lineHeight: '$sizes$8',

  px: '$5',

  userSelect: 'none',
  variants: {
    variant: {
      contrast: {
        '@hover': {
          '&:hover': {
            opacity: 0.9,
          },
        },
        '&:active': {
          opacity: 0.8,
        },
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$blue8',
        },
        '&:focus:not(:focus-visible)': {
          boxShadow: 'none',
        },
        $$backlight: `
            0 0 0 2px $colors$brandA8,
            -15px 0 30px -15px $colors$orangeA8,
            0 0 30px -15px $colors$orangeA8,
            15px 0 30px -15px $colors$brandA8
          `,
        [`.${darkTheme} &`]: {
          '&:focus': {
            boxShadow: '$$backlight, 0 0 0 2px $colors$blueA8',
          },
          '&:focus:not(:focus-visible)': {
            boxShadow: '$$backlight',
          },
          bc: 'hsl(0 0% 6%)',
          color: '$hiContrast',
        },
        bc: '$hiContrast',
        boxShadow: '$$backlight',
        color: '$loContrast',
      },
    },
  },
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
})

export { StyledButton }
