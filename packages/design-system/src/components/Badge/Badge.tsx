import { styled } from '../../lib/stitches.config'

const Badge = styled('span', {
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'background 300ms ease',
  },
  '&::after': {
    boxSizing: 'border-box',
    content: '""',
  },
  '&::before': {
    boxSizing: 'border-box',
    content: '""',
  },
  '&:disabled': {
    backgroundColor: '$slate3',
    color: '$slate8',
    pointerEvents: 'none',
  },
  '&:focus': {
    boxShadow: 'inset 0 0 0 1px $colors$brand8, 0 0 0 1px $colors$brand8',
  },
  // @reset
  alignItems: 'center',
  appearance: 'none',
  // @custom
  backgroundColor: '$colors$brand3',
  borderRadius: '$pill',
  borderWidth: '0',
  boxSizing: 'border-box',
  color: '$colors$brand11',
  compoundVariants: [
    {
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$red5',
          },
        },
        '&:active': {
          backgroundColor: '$red6',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$red6',
          },
      },
      interactive: true,
      variant: 'red',
    },
    {
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$brand5',
          },
        },
        '&:active': {
          backgroundColor: '$brand6',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$brand6',
          },
      },
      interactive: true,
      variant: 'brand',
    },
    {
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$blue5',
          },
        },
        '&:active': {
          backgroundColor: '$blue6',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$blue6',
          },
      },
      interactive: true,
      variant: 'blue',
    },
    {
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$green5',
          },
        },
        '&:active': {
          backgroundColor: '$green6',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$green6',
          },
      },
      interactive: true,
      variant: 'green',
    },

    {
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$orange5',
            // color: '$orange12',
          },
        },
        '&:active': {
          backgroundColor: '$orange6',
          // color: '$orange12',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$orange6',
            // color: '$orange12',
          },
      },
      interactive: true,
      variant: 'orange',
    },
  ],
  defaultVariants: {
    interactive: false,
    size: '1',
  },
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',

  fontVariantNumeric: 'tabular-nums',
  fontVariationSettings: '"wght" $fontWeights$6',
  fontWeight: '$6',
  justifyContent: 'center',
  lineHeight: '1',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',

  userSelect: 'none',

  variants: {
    interactive: {
      true: {},
    },
    size: {
      '1': {
        fontSize: '$2',
        height: '$5',
        px: '$3',
      },
      '2': {
        fontSize: '$3',
        height: '$6',
        px: '$3',
      },
    },
    variant: {
      blue: {
        backgroundColor: '$blue4',
        color: '$blue11',
      },
      brand: {
        backgroundColor: '$brand4',
        color: '$brand11',
      },
      gray: {
        backgroundColor: '$gray4',
        color: '$gray11',
      },
      green: {
        backgroundColor: '$green4',
        color: '$green11',
      },
      orange: {
        backgroundColor: '$orange4',
        color: '$orange11',
      },
      red: {
        backgroundColor: '$red4',
        color: '$red11',
      },
    },
  },

  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  whiteSpace: 'nowrap',
})

export { Badge }
