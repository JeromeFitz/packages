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

  variants: {
    size: {
      '1': {
        height: '$4',
        px: '$2',
        fontSize: '$1',
      },
      '2': {
        height: '$5',
        px: '$3',
        fontSize: '$2',
      },
    },
    variant: {
      // brand: {
      //   backgroundColor: '$brand3',
      //   color: '$brand11',
      //   '&:focus': {
      //     boxShadow: 'inset 0 0 0 1px $colors$brand8, 0 0 0 1px $colors$brand8',
      //   },
      // },
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
    // {
    //   interactive: true,
    //   variant: 'crimson',
    //   css: {
    //     '@hover': {
    //       '&:hover': {
    //         backgroundColor: '$crimson4',
    //       },
    //     },
    //     '&:active': {
    //       backgroundColor: '$crimson5',
    //     },
    //     '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
    //       {
    //         backgroundColor: '$crimson5',
    //       },
    //   },
    // },
    // {
    //   interactive: true,
    //   variant: 'pink',
    //   css: {
    //     '@hover': {
    //       '&:hover': {
    //         backgroundColor: '$pink4',
    //       },
    //     },
    //     '&:active': {
    //       backgroundColor: '$pink5',
    //     },
    //     '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
    //       {
    //         backgroundColor: '$pink5',
    //       },
    //   },
    // },
    // {
    //   interactive: true,
    //   variant: 'purple',
    //   css: {
    //     '@hover': {
    //       '&:hover': {
    //         backgroundColor: '$purple4',
    //       },
    //     },
    //     '&:active': {
    //       backgroundColor: '$purple5',
    //     },
    //     '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
    //       {
    //         backgroundColor: '$purple5',
    //       },
    //   },
    // },
    {
      interactive: true,
      variant: 'brand',
      css: {
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
    // {
    //   interactive: true,
    //   variant: 'indigo',
    //   css: {
    //     '@hover': {
    //       '&:hover': {
    //         backgroundColor: '$indigo4',
    //       },
    //     },
    //     '&:active': {
    //       backgroundColor: '$indigo5',
    //     },
    //     '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
    //       {
    //         backgroundColor: '$indigo5',
    //       },
    //   },
    // },
    {
      interactive: true,
      variant: 'blue',
      css: {
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
    // {
    //   interactive: true,
    //   variant: 'cyan',
    //   css: {
    //     '@hover': {
    //       '&:hover': {
    //         backgroundColor: '$cyan4',
    //       },
    //     },
    //     '&:active': {
    //       backgroundColor: '$cyan5',
    //     },
    //     '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
    //       {
    //         backgroundColor: '$cyan5',
    //       },
    //   },
    // },
    // {
    //   interactive: true,
    //   variant: 'teal',
    //   css: {
    //     '@hover': {
    //       '&:hover': {
    //         backgroundColor: '$teal4',
    //       },
    //     },
    //     '&:active': {
    //       backgroundColor: '$teal5',
    //     },
    //     '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
    //       {
    //         backgroundColor: '$teal5',
    //       },
    //   },
    // },
    {
      interactive: true,
      variant: 'green',
      css: {
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
    // {
    //   interactive: true,
    //   variant: 'lime',
    //   css: {
    //     '@hover': {
    //       '&:hover': {
    //         backgroundColor: '$lime4',
    //       },
    //     },
    //     '&:active': {
    //       backgroundColor: '$lime5',
    //     },
    //     '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
    //       {
    //         backgroundColor: '$lime5',
    //       },
    //   },
    // },
    // {
    //   interactive: true,
    //   variant: 'yellow',
    //   css: {
    //     '@hover': {
    //       '&:hover': {
    //         backgroundColor: '$yellow4',
    //       },
    //     },
    //     '&:active': {
    //       backgroundColor: '$yellow5',
    //     },
    //     '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
    //       {
    //         backgroundColor: '$yellow5',
    //       },
    //   },
    // },
    {
      interactive: true,
      variant: 'orange',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$orange4',
          },
        },
        '&:active': {
          backgroundColor: '$orange5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$orange5',
          },
      },
    },
    // {
    //   interactive: true,
    //   variant: 'gold',
    //   css: {
    //     '@hover': {
    //       '&:hover': {
    //         backgroundColor: '$gold4',
    //       },
    //     },
    //     '&:active': {
    //       backgroundColor: '$gold5',
    //     },
    //     '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
    //       {
    //         backgroundColor: '$gold5',
    //       },
    //   },
    // },
    // {
    //   interactive: true,
    //   variant: 'bronze',
    //   css: {
    //     '@hover': {
    //       '&:hover': {
    //         backgroundColor: '$bronze4',
    //       },
    //     },
    //     '&:active': {
    //       backgroundColor: '$bronze5',
    //     },
    //     '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
    //       {
    //         backgroundColor: '$bronze5',
    //       },
    //   },
    // },
  ],
  defaultVariants: {
    size: '1',
  },
})

export { Badge }
