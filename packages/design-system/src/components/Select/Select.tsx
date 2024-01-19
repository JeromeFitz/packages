/**
 * https://www.radix-ui.com/docs/primitives/components/select
 */
import * as SelectPrimitive from '@radix-ui/react-select'

import { styled } from '../../lib/stitches.config'

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: 'unset',
  alignItems: 'center',
  backgroundColor: '$colors$brand3',
  borderRadius: '$1',
  boxShadow: `0 2px 10px $colors$blackA7`,
  color: '$colors$brand11',
  display: 'inline-flex',
  fontSize: '0.8125rem',
  gap: '$2',
  height: '$7',
  justifyContent: 'center',
  lineHeight: 1,
  padding: '0 1rem',
  '&:hover': { backgroundColor: '$colors$brand4' },
  '&:focus': { boxShadow: `0 0 0 2px $colors$brand11` },
})

const StyledContent = styled(SelectPrimitive.Content, {
  backgroundColor: '$colors$brand3',
  borderRadius: '$4',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  overflow: 'hidden',
})

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: '$2',
})

const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  alignItems: 'center',
  borderRadius: '$0',
  color: '$colors$brand11',
  display: 'flex',
  fontSize: '$2',
  height: '1.5rem',
  lineHeight: 1,
  padding: '0 $6 0 $6',
  my: '$2',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$colors$brand8',
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: '$colors$brand9',
    color: '$colors$brand1',
  },
})

const StyledLabel = styled(SelectPrimitive.Label, {
  color: '$colors$brand12',
  // fontFamily: '$mono',
  fontSize: '$2',
  fontVariationSettings: '"wght" $fontWeights$7',
  fontWeight: '$fontWeights$7',
  lineHeight: 1.5,
  padding: '0 $6 0 $6',
  my: '$2',
  // textTransform: 'uppercase',
})

const StyledSeparator = styled(SelectPrimitive.Separator, {
  backgroundColor: '$colors$brand6',
  height: 1,
  margin: '$3',
})

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  alignItems: 'center',
  display: 'inline-flex',
  justifyContent: 'center',
  left: 0,
  position: 'absolute',
  width: '1.5625rem',
})

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '1.5625rem',
  backgroundColor: '$colors$brand3',
  color: '$colors$brand11',
  cursor: 'default',
}

const StyledScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles,
)

const StyledScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles,
)

const Select = SelectPrimitive.Root
const SelectTrigger = StyledTrigger
const SelectValue = SelectPrimitive.Value
const SelectIcon = SelectPrimitive.Icon
const SelectContent = StyledContent
const SelectViewport = StyledViewport
const SelectGroup = SelectPrimitive.Group
const SelectItem = StyledItem
const SelectItemText = SelectPrimitive.ItemText
const SelectItemIndicator = StyledItemIndicator
const SelectLabel = StyledLabel
const SelectSeparator = StyledSeparator
const SelectScrollUpButton = StyledScrollUpButton
const SelectScrollDownButton = StyledScrollDownButton

export {
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectContent,
  SelectViewport,
  SelectGroup,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectLabel,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
}
