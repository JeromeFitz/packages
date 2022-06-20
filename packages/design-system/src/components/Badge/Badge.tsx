import { styled } from '../../lib/stitches.config'

const Badge = styled('span', {
  // @reset
  alignItems: 'center',
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  justifyContent: 'center',
  lineHeight: '1',
  verticalAlign: 'middle',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&:disabled': {
    backgroundColor: '$slate3',
    pointerEvents: 'none',
    color: '$slate8',
  },
  '&::before': {
    boxSizing: 'border-box',
    content: '""',
  },
  '&::after': {
    boxSizing: 'border-box',
    content: '""',
  },

  // @custom
  backgroundColor: '$colors$brand3',
  color: '$colors$brand11',
  '&:focus': {
    boxShadow: 'inset 0 0 0 1px $colors$brand8, 0 0 0 1px $colors$brand8',
  },
  borderRadius: '$pill',
  whiteSpace: 'nowrap',
  fontVariantNumeric: 'tabular-nums',
  fontVariationSettings: '"wght" $fontWeights$6',
  fontWeight: '$6',

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'background 300ms ease',
  },

  variants: {
    size: {
      '1': {
        height: '$5',
        px: '$3',
        fontSize: '$2',
      },
      '2': {
        height: '$6',
        px: '$3',
        fontSize: '$3',
      },
    },
    variant: {
      red: {
        backgroundColor: '$red4',
        color: '$red11',
      },
      brand: {
        backgroundColor: '$brand4',
        color: '$brand11',
      },
      blue: {
        backgroundColor: '$blue4',
        color: '$blue11',
      },
      green: {
        backgroundColor: '$green4',
        color: '$green11',
      },
      orange: {
        backgroundColor: '$orange4',
        color: '$orange11',
      },
    },
    interactive: {
      true: {},
    },
  },

  compoundVariants: [
    {
      interactive: true,
      variant: 'red',
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
    },
    {
      interactive: true,
      variant: 'brand',
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
    },
    {
      interactive: true,
      variant: 'blue',
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
    },
    {
      interactive: true,
      variant: 'green',
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
    },

    {
      interactive: true,
      variant: 'orange',
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
    },
  ],
  defaultVariants: {
    size: '1',
    interactive: false,
  },
})

export { Badge }
