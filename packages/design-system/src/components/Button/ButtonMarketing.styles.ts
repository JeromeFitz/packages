import { darkTheme, styled } from '../../lib/stitches.config'

const StyledButton = styled('button', {
  all: 'unset',
  alignItems: 'center',
  boxSizing: 'border-box',
  userSelect: 'none',
  display: 'inline-flex',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // @custom
  height: '$8',
  px: '$5',
  fontFamily: '$mono',
  fontVariationSettings: '"wght" $fontWeights$5',
  fontWeight: '$fontWeights$5',
  borderRadius: '$2',
  fontSize: '$3',
  lineHeight: '$sizes$8',

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

  variants: {
    variant: {
      contrast: {
        bc: '$hiContrast',
        color: '$loContrast',
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
        boxShadow: '$$backlight',
        [`.${darkTheme} &`]: {
          color: '$hiContrast',
          bc: 'hsl(0 0% 6%)',
          '&:focus': {
            boxShadow: '$$backlight, 0 0 0 2px $colors$blueA8',
          },
          '&:focus:not(:focus-visible)': {
            boxShadow: '$$backlight',
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'contrast',
  },
})

export { StyledButton }
