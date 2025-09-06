import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { styled } from '../../lib/stitches.config'

const RadioGroup = styled(RadioGroupPrimitive.Root, {
  display: 'flex',
})

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  '&::after': {
    backgroundColor: '$blue9',
    borderRadius: '50%',
    content: '""',
    display: 'block',
    height: '7px',
    width: '7px',
  },
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
})

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  '@hover': {
    '&:hover': {
      boxShadow: 'inset 0 0 0 1px $colors$slate8',
    },
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  '&::before': {
    boxSizing: 'border-box',
  },
  '&:focus': {
    borderColor: '$red7',
    boxShadow: 'inset 0 0 0 1px $colors$blue9, 0 0 0 1px $colors$blue9',
    outline: 'none',
  },
  alignItems: 'center',
  all: 'unset',
  appearance: 'none',
  borderRadius: '50%',
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  boxSizing: 'border-box',
  color: '$hiContrast',
  defaultVariants: {
    size: '1',
  },
  display: 'inline-flex',
  justifyContent: 'center',

  lineHeight: '1',
  margin: '0',
  outline: 'none',
  overflow: 'hidden',
  padding: '0',
  textDecoration: 'none',

  userSelect: 'none',
  variants: {
    size: {
      '1': {
        height: '$3',
        width: '$3',
      },
      '2': {
        [`& ${StyledIndicator}`]: {
          '&::after': {
            height: '$3',
            width: '$3',
          },
        },
        height: '$5',

        width: '$5',
      },
    },
  },
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
})

export { RadioGroup, StyledIndicator, StyledRadio }
