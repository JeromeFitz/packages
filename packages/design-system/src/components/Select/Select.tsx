import * as SelectPrimitive from '@radix-ui/react-select'

import { styled } from '../../stitches.config'

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  padding: '0 15px',
  fontSize: 13,
  lineHeight: 1,
  height: 35,
  gap: 5,
  backgroundColor: 'white',
  color: '$colors$violet11',
  boxShadow: `0 2px 10px $colors$blackA7`,
  '&:hover': { backgroundColor: '$colors$violet3' },
  '&:focus': { boxShadow: `0 0 0 2px black` },
})

const StyledContent = styled(SelectPrimitive.Content, {
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
})

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: 5,
})

const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: '$colors$violet11',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$colors$violet8',
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: '$colors$violet9',
    color: '$colors$violet1',
  },
})

const StyledLabel = styled(SelectPrimitive.Label, {
  padding: '0 25px',
  fontSize: 12,
  lineHeight: '25px',
  color: '$colors$violet11',
})

const StyledSeparator = styled(SelectPrimitive.Separator, {
  height: 1,
  backgroundColor: '$colors$violet6',
  margin: 5,
})

const StyledItemIndicator = styled(SelectPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: '$colors$violet11',
  cursor: 'default',
}

const StyledScrollUpButton = styled(
  SelectPrimitive.ScrollUpButton,
  scrollButtonStyles
)

const StyledScrollDownButton = styled(
  SelectPrimitive.ScrollDownButton,
  scrollButtonStyles
)

// Exports
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
