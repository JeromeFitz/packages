import { styled } from '../../lib/stitches.config'

const IconButton = styled('button', {
  '&::after': {
    boxSizing: 'border-box',
  },
  '&::before': {
    boxSizing: 'border-box',
  },
  '&:active': {
    backgroundColor: '$slate2',
  },
  '&:disabled': {
    backgroundColor: 'transparent',
    color: '$slate6',
    pointerEvents: 'none',
  },
  '&:focus': {
    borderColor: '$slate8',
    boxShadow: '0 0 0 1px $colors$slate8',
  },
  '@hover': {
    '&:hover': {
      borderColor: '$slate8',
    },
  },
  WebkitTapHighlightColor: 'transparent',
  // @reset
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: '$loContrast',
  border: '1px solid $slate7',
  borderWidth: '0',
  boxSizing: 'border-box',
  color: '$hiContrast',
  defaultVariants: {
    size: '1',
    variant: 'ghost',
  },
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  fontSize: '14px',
  justifyContent: 'center',
  lineHeight: '1',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',

  userSelect: 'none',
  variants: {
    size: {
      '1': {
        borderRadius: '$1',
        height: '$5',
        width: '$5',
      },
      '2': {
        borderRadius: '$2',
        height: '$6',
        width: '$6',
      },
      '3': {
        borderRadius: '$2',
        height: '$7',
        width: '$7',
      },
      '4': {
        borderRadius: '$3',
        height: '$8',
        width: '$8',
      },
    },
    state: {
      active: {
        '&:active': {
          backgroundColor: '$slate4',
        },
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
          },
        },
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
      },
      waiting: {
        '&:active': {
          backgroundColor: '$slate4',
        },
        '@hover': {
          '&:hover': {
            boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
          },
        },
        backgroundColor: '$slate4',
        boxShadow: 'inset 0 0 0 1px hsl(206,10%,76%)',
      },
    },
    variant: {
      ghost: {
        '&:active': {
          backgroundColor: '$slateA4',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$slateA8, 0 0 0 1px $colors$slateA8',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$slateA4',
          },
        '@hover': {
          '&:hover': {
            backgroundColor: '$slateA3',
          },
        },
        backgroundColor: 'transparent',
        borderWidth: '0',
      },
      raised: {
        '&:active': {
          backgroundColor: '$slate4',
        },
        '&:focus': {
          borderColor: '$slate8',
          boxShadow:
            '0 0 0 1px $colors$slate8, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
        },
        '@hover': {
          '&:hover': {
            boxShadow:
              '0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
          },
        },
        boxShadow:
          '0 0 transparent, 0 16px 32px hsl(206deg 12% 5% / 25%), 0 3px 5px hsl(0deg 0% 0% / 10%)',
      },
    },
  },
})

export { IconButton }
