import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

import { darkTheme, styled } from '../../lib/stitches.config'

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  '&::after': {
    boxSizing: 'border-box',
  },
  '&::before': {
    boxSizing: 'border-box',
  },
  '&:focus': { boxShadow: `0 2px 10px $colors$blackA9` },
  '&:hover': {
    backgroundColor: '$colors$brand3',
    boxShadow: `0 2px 10px $colors$blackA8`,
    cursor: 'pointer',
  },
  [`.${darkTheme} &`]: {
    '&:focus': { boxShadow: `0 2px 10px $colors$whiteA11` },
    '&:hover': {
      backgroundColor: '$colors$brand3',
      boxShadow: `0 2px 10px $colors$whiteA10`,
      cursor: 'pointer',
    },
    boxShadow: `0 2px 10px $colors$whiteA9`,
  },

  alignItems: 'center',
  all: 'unset',
  backgroundColor: '$panel',
  borderRadius: '$2',
  boxShadow: `0 2px 10px $colors$blackA7`,

  boxSizing: 'border-box',

  defaultVariants: {
    size: '1',
  },
  display: 'flex',
  justifyContent: 'center',
  outline: 'none',

  userSelect: 'none',
  variants: {
    size: {
      '1': {
        height: '$4',
        width: '$4',
      },
      '2': {
        height: '$5',
        width: '$5',
      },
      '3': {
        height: '$6',
        width: '$6',
      },
    },
  },
})

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  '& svg': {
    height: '85%',
    width: '85%',
  },
  alignItems: 'center',
  color: '$colors$brand11',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  width: '100%',
})

export { StyledCheckbox, StyledIndicator }
