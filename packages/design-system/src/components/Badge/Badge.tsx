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

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'background 300ms ease',
  },

  variants: {
    size: {
      '1': {
        height: '$5',
        px: '$3',
        fontSize: '$1',
      },
      '2': {
        height: '$6',
        px: '$3',
        fontSize: '$2',
      },
    },
    variant: {},
    interactive: {
      true: {},
    },
  },

  compoundVariants: [
    {
      interactive: true,
      variant: 'red',
      css: {
        backgroundColor: '$red3',
        color: '$red11',
        '@hover': {
          '&:hover': {
            backgroundColor: '$red4',
          },
        },
        '&:active': {
          backgroundColor: '$red5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$red5',
          },
      },
    },
    {
      interactive: true,
      variant: 'brand',
      css: {
        backgroundColor: '$brand3',
        color: '$brand11',
        '@hover': {
          '&:hover': {
            backgroundColor: '$brand4',
          },
        },
        '&:active': {
          backgroundColor: '$brand5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$brand5',
          },
      },
    },
    {
      interactive: true,
      variant: 'blue',
      css: {
        backgroundColor: '$blue3',
        color: '$blue11',
        '@hover': {
          '&:hover': {
            backgroundColor: '$blue4',
          },
        },
        '&:active': {
          backgroundColor: '$blue5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$blue5',
          },
      },
    },
    {
      interactive: true,
      variant: 'green',
      css: {
        backgroundColor: '$green3',
        color: '$green11',
        '@hover': {
          '&:hover': {
            backgroundColor: '$green4',
          },
        },
        '&:active': {
          backgroundColor: '$green5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$green5',
          },
      },
    },

    {
      interactive: true,
      variant: 'orange',
      css: {
        backgroundColor: '$orange3',
        color: '$orange11',
        '@hover': {
          '&:hover': {
            backgroundColor: '$orange4',
            // color: '$orange12',
          },
        },
        '&:active': {
          backgroundColor: '$orange5',
          // color: '$orange12',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$orange5',
            // color: '$orange12',
          },
      },
    },
  ],
  defaultVariants: {
    size: '1',
    interactive: true,
  },
})

export { Badge }
