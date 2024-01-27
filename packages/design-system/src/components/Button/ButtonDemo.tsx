import { darkTheme, styled } from '../../lib/stitches.config'

const ButtonDemo = styled('button', {
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$grayA8',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },
  alignItems: 'center',
  // @reset
  all: 'unset',
  boxSizing: 'border-box',
  br: '$2',
  color: '$hiContrast',
  defaultVariants: {
    variant: 'white',
  },
  display: 'inline-flex',
  fontSize: '$2',
  height: '$5',
  lineHeight: 1,
  m: 0,

  px: '$2',

  py: 0,
  userSelect: 'none',

  variants: {
    variant: {
      gray: {
        '@hover': {
          '&:hover': {
            bc: '$grayA5',
          },
        },
        backgroundColor: '$grayA4',
      },
      white: {
        '@hover': {
          '&:hover': {
            bc: '$whiteA12',
          },
        },
        [`.${darkTheme} &`]: {
          '@hover': {
            '&:hover': {
              bc: '$whiteA6',
            },
          },
          backgroundColor: '$whiteA5',
        },
        backgroundColor: '$whiteA11',
      },
    },
  },

  // For Safari layout shifts when interacting with positioned components
  willChange: 'transform',
})

export { ButtonDemo }
