import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { styled } from '../../lib/stitches.config'

const RadioGridGroup = styled(RadioGroupPrimitive.Root, {
  display: 'grid',
  gap: '$1',
  gridTemplateColumns: 'repeat(5, 1fr)',
})

const RadioGrid = styled(RadioGroupPrimitive.Item, {
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
    backgroundColor: '$slate4',
    boxShadow: 'inset 0 0 0 1px $colors$slate8',
  },
  all: 'unset',
  borderRadius: '$2',
  boxShadow: 'inset 0 0 0 1px $colors$slate7',
  boxSizing: 'border-box',
  fontSize: '$3',
  height: '$6',
  lineHeight: '$sizes$6',
  px: '$1',
  textAlign: 'center',
  userSelect: 'none',
})

export { RadioGrid, RadioGridGroup }
