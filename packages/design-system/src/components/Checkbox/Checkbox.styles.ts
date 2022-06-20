import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { darkTheme, styled } from '../../lib/stitches.config'

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  boxSizing: 'border-box',
  userSelect: 'none',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  alignItems: 'center',
  backgroundColor: '$panel',
  borderRadius: '$2',
  display: 'flex',
  justifyContent: 'center',

  outline: 'none',

  boxShadow: `0 2px 10px $colors$blackA7`,
  '&:hover': {
    backgroundColor: '$colors$brand3',
    boxShadow: `0 2px 10px $colors$blackA8`,
    cursor: 'pointer',
  },
  '&:focus': { boxShadow: `0 2px 10px $colors$blackA9` },
  [`.${darkTheme} &`]: {
    boxShadow: `0 2px 10px $colors$whiteA9`,
    '&:hover': {
      backgroundColor: '$colors$brand3',
      boxShadow: `0 2px 10px $colors$whiteA10`,
      cursor: 'pointer',
    },
    '&:focus': { boxShadow: `0 2px 10px $colors$whiteA11` },
  },

  variants: {
    size: {
      '1': {
        width: '$4',
        height: '$4',
      },
      '2': {
        width: '$5',
        height: '$5',
      },
      '3': {
        width: '$6',
        height: '$6',
      },
    },
  },
  defaultVariants: {
    size: '1',
  },
})

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  alignItems: 'center',
  color: '$colors$brand11',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
  '& svg': {
    height: '85%',
    width: '85%',
  },
})

export { StyledCheckbox, StyledIndicator }
