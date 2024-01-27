/**
 * https://www.radix-ui.com/primitives/docs/components/toggle
 */
import * as TogglePrimitive from '@radix-ui/react-toggle'

import { styled } from '../../lib/stitches.config'

const Toggle = styled(TogglePrimitive.Root, {
  '&::after': {
    boxSizing: 'border-box',
  },
  '&::before': {
    boxSizing: 'border-box',
  },
  '&:active': {
    backgroundColor: '$slateA4',
  },
  '&:focus': {
    boxShadow: 'inset 0 0 0 1px $slateA8, 0 0 0 1px $slateA8',
    zIndex: 1,
  },
  '&[data-state="on"]': {
    '&:active': {
      backgroundColor: '$slateA7',
    },
    '@hover': {
      '&:hover': {
        backgroundColor: '$slateA5',
      },
    },
    backgroundColor: '$slateA5',
  },
  '@hover': {
    '&:hover': {
      backgroundColor: '$slateA3',
    },
  },
  WebkitTapHighlightColor: 'transparent',
  // @reset
  alignItems: 'center',
  appearance: 'none',
  backgroundColor: 'transparent',
  borderWidth: '0',
  boxSizing: 'border-box',
  color: '$hiContrast',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  fontSize: '14px',
  height: '$5',
  justifyContent: 'center',
  lineHeight: '1',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',

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

  width: '$5',
})

export { Toggle }
