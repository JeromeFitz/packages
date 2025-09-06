import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { styled } from '../../lib/stitches.config'

const RadioCardGroup = styled(RadioGroupPrimitive.Root, {
  display: 'block',
})

const StyledRadioButton = styled('div', {
  alignItems: 'center',
  borderRadius: '$round',
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  display: 'flex',
  flexShrink: 0,
  height: 25,
  justifyContent: 'center',
  mr: '$3',
  width: 25,
})

const StyledRadioIndicator = styled('div', {
  backgroundColor: '$gray9',
  borderRadius: '$round',
  height: 15,
  transform: 'scale(0)',
  width: 15,
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
  '&[data-state="checked"]': {
    [`& ${StyledRadioIndicator}`]: {
      transform: 'scale(1)',
    },
    boxShadow: 'inset 0 0 0 1px $colors$gray8, 0 0 0 1px $colors$gray8 !important',
  },
  alignItems: 'center',
  all: 'unset',
  borderRadius: '$2',
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  boxSizing: 'border-box',
  display: 'flex',
  p: '$3',
  userSelect: 'none',
})

export { RadioCardGroup, StyledRadio, StyledRadioButton, StyledRadioIndicator }
