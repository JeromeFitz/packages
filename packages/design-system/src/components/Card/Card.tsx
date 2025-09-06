import { styled } from '../../lib/stitches.config'

const Card = styled('div', {
  '&::before': {
    borderRadius: '$3',
    bottom: 0,
    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
    boxSizing: 'border-box',
    content: '""',
    left: 0,
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  appearance: 'none',
  backgroundColor: '$panel',
  border: 'none',
  borderRadius: '$3',
  boxSizing: 'border-box',
  color: 'inherit',
  display: 'block',
  flexShrink: 0,

  font: 'inherit',
  lineHeight: 'inherit',
  outline: 'none',
  padding: 0,
  position: 'relative',
  textAlign: 'inherit',
  textDecoration: 'none',

  variants: {
    variant: {
      active: {
        '&::before': {
          boxShadow:
            '0px 5px 16px -5px rgba(22, 23, 24, 0.35), 0px 5px 10px -7px rgba(22, 23, 24, 0.2)',
          opacity: '1',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8',
        },
        transform: 'translateY(0)',
        transition: 'none',
      },
      ghost: {
        '@hover': {
          '&:hover': {
            '&::before': {
              opacity: '1',
            },
            backgroundColor: '$panel',
            transform: 'translateY(-2px)',
          },
        },
        '@media (prefers-reduced-motion: no-preference)': {
          transition:
            'transform 200ms cubic-bezier(0.22, 1, 0.36, 1), background-color 25ms linear',
        },
        '&::before': {
          '@media (prefers-reduced-motion: no-preference)': {
            transition: 'all 200ms cubic-bezier(0.22, 1, 0.36, 1)',
          },
          boxShadow:
            '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
          opacity: '0',
        },
        '&:active': {
          '&::before': {
            boxShadow:
              '0px 5px 16px -5px rgba(22, 23, 24, 0.35), 0px 5px 10px -7px rgba(22, 23, 24, 0.2)',
            opacity: '1',
          },
          transform: 'translateY(0)',
          transition: 'none',
        },
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8',
        },
        backgroundColor: 'transparent',
        willChange: 'transform',
      },
      interactive: {
        '@hover': {
          '&:hover': {
            '&::before': {
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.2)',
            },
          },
        },
        '&:focus': {
          '&::before': {
            boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8',
          },
        },
      },
    },
  },

  verticalAlign: 'middle',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
})

export { Card }
