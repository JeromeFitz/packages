/**
 * https://www.radix-ui.com/docs/primitives/components/toggle
 */
import * as TogglePrimitive from '@radix-ui/react-toggle'

import { styled } from '../../lib/stitches.config'

const Toggle = styled(TogglePrimitive.Root, {
  // @reset
  alignItems: 'center',
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
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
  WebkitTapHighlightColor: 'transparent',
  color: '$hiContrast',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  height: '$5',
  width: '$5',
  backgroundColor: 'transparent',
  '@hover': {
    '&:hover': {
      backgroundColor: '$slateA3',
    },
  },
  '&:active': {
    backgroundColor: '$slateA4',
  },
  '&:focus': {
    boxShadow: 'inset 0 0 0 1px $slateA8, 0 0 0 1px $slateA8',
    zIndex: 1,
  },

  '&[data-state="on"]': {
    backgroundColor: '$slateA5',
    '@hover': {
      '&:hover': {
        backgroundColor: '$slateA5',
      },
    },
    '&:active': {
      backgroundColor: '$slateA7',
    },
  },

  variants: {
    shape: {
      circle: {
        borderRadius: '$round',
      },
      square: {
        borderRadius: '$1',
      },
    },
  },
})

export { Toggle }
