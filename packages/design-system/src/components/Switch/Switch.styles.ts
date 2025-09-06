import * as SwitchPrimitive from '@radix-ui/react-switch'

import { styled } from '../../lib/stitches.config'

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 100ms cubic-bezier(0.22, 1, 0.36, 1)',
  },
  '&[data-state="checked"]': {
    transform: 'translateX(11px)',
  },
  backgroundColor: 'white',
  borderRadius: '$round',
  boxShadow: 'rgba(0, 0, 0, 0.3) 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 1px 2px;',
  height: 13,
  left: 0,
  position: 'absolute',
  transform: 'translateX(1px)',

  width: 13,
  willChange: 'transform',
})

const StyledSwitch = styled(SwitchPrimitive.Root, {
  '&::after': {
    boxSizing: 'border-box',
  },
  '&::before': {
    boxSizing: 'border-box',
  },
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$slate8',
  },
  '&[data-state="checked"]': {
    '&:focus': {
      boxShadow: '0 0 0 2px $colors$brand11',
    },
    backgroundColor: '$colors$brand11',
  },

  // @reset
  alignItems: 'center',
  all: 'unset',
  backgroundColor: '$slate5',
  borderRadius: '$pill',
  boxSizing: 'border-box',
  cursor: 'pointer',
  defaultVariants: {
    size: '1',
  },

  display: 'inline-flex',
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',

  position: 'relative',

  userSelect: 'none',
  variants: {
    size: {
      '1': {
        height: '$3',
        width: '$5',
      },
      '2': {
        [`& ${StyledThumb}`]: {
          '&[data-state="checked"]': {
            transform: 'translateX(22px)',
          },
          height: 21,
          transform: 'translateX(2px)',
          width: 21,
        },
        height: '$5',
        width: '$7',
      },
    },
  },
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
})

export { StyledSwitch, StyledThumb }
