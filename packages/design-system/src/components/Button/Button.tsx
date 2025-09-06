import { styled } from '../../lib/stitches.config'

const Button = styled('button', {
  '&::after': {
    boxSizing: 'border-box',
  },
  '&::before': {
    boxSizing: 'border-box',
  },
  '&:disabled': {
    backgroundColor: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none',
  },
  alignItems: 'center',
  // @reset
  all: 'unset',

  boxSizing: 'border-box',
  compoundVariants: [
    {
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$slateA3',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$slateA4',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slateA8, 0 0 0 1px $colors$slateA8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$slateA4',
            boxShadow: 'none',
          },
        backgroundColor: 'transparent',
        color: '$hiContrast',
      },
      ghost: 'true',
      variant: 'gray',
    },
    {
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$brandA3',
            boxShadow: 'none',
          },
        },
        '&:active': {
          backgroundColor: '$brandA4',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$brandA8, 0 0 0 1px $colors$brandA8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$brandA4',
            boxShadow: 'none',
          },
        backgroundColor: 'transparent',
      },
      ghost: 'true',
      variant: 'brand',
    },
  ],
  defaultVariants: {
    size: '1',
    variant: 'gray',
  },
  // @custom reset?
  display: 'inline-flex',
  flexShrink: 0,

  fontFamily: '$sans',
  fontSize: '$2',
  fontVariantNumeric: 'tabular-nums',
  fontVariationSettings: '"wght" $fontWeights$5',
  fontWeight: '$fontWeights$5',
  // @custom
  height: '$5',
  justifyContent: 'center',

  lineHeight: '1',

  px: '$3',
  userSelect: 'none',
  variants: {
    ghost: {
      true: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
      },
    },
    size: {
      '1': {
        borderRadius: '$1',
        fontSize: '$2',
        height: '$6',
        lineHeight: '$sizes$5',
        px: '$3',
      },
      '2': {
        borderRadius: '$2',
        fontSize: '$3',
        height: '$7',
        lineHeight: '$sizes$6',
        px: '$4',
      },
      '3': {
        borderRadius: '$2',
        fontSize: '$4',
        height: '$8',
        lineHeight: '$sizes$7',
        px: '$5',
      },
    },
    state: {
      active: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate5',
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
        },
        '&:active': {
          backgroundColor: '$slate5',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
        },
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px $colors$slate8',
        color: '$slate11',
      },
      waiting: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$slate5',
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
        },
        '&:active': {
          backgroundColor: '$slate5',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8',
        },
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px $colors$slate8',
        color: 'transparent',
        pointerEvents: 'none',
      },
    },
    variant: {
      brand: {
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
        },
        '&:active': {
          backgroundColor: '$brand3',
          boxShadow: 'inset 0 0 0 1px $colors$brand8',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$brand8, 0 0 0 1px $colors$brand8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$brand4',
            boxShadow: 'inset 0 0 0 1px $colors$brand8',
          },
        backgroundColor: '$loContrast',
        boxShadow: 'inset 0 0 0 1px $colors$slate7',
        color: '$brand11',
      },
      gray: {
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
        },
        '&:active': {
          backgroundColor: '$slate2',
          boxShadow: 'inset 0 0 0 1px $colors$slate8',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$slate4',
            boxShadow: 'inset 0 0 0 1px $colors$slate8',
          },
        backgroundColor: '$loContrast',
        boxShadow: 'inset 0 0 0 1px $colors$slate7',
        color: '$hiContrast',
      },
      transparentBlack: {
        '@hover': {
          '&:hover': {
            backgroundColor: 'hsla(0,0%,0%,.25)',
          },
        },
        '&:active': {
          backgroundColor: 'hsla(0,0%,0%,.3)',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px hsla(0,0%,0%,.35), 0 0 0 1px hsla(0,0%,0%,.35)',
        },
        backgroundColor: 'hsla(0,0%,0%,.2)',
        color: 'black',
      },
      transparentWhite: {
        '@hover': {
          '&:hover': {
            backgroundColor: 'hsla(0,100%,100%,.25)',
          },
        },
        '&:active': {
          backgroundColor: 'hsla(0,100%,100%,.3)',
        },
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px hsla(0,100%,100%,.35), 0 0 0 1px hsla(0,100%,100%,.35)',
        },
        backgroundColor: 'hsla(0,100%,100%,.2)',
        color: 'white',
      },
    },
  },
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
})

Button.toString = () => `.${Button.className}`

export { Button }
