/**
 * https://www.radix-ui.com/docs/primitives/components/select
 */
import * as SelectPrimitive from '@radix-ui/react-select'

import { styled } from '../../stitches.config'

const StyledTrigger = styled(SelectPrimitive.SelectTrigger, {
  all: 'unset',
  alignItems: 'center',
  backgroundColor: '$colors$violet3',
  borderRadius: '$1',
  boxShadow: `0 2px 10px $colors$blackA7`,
  color: '$colors$violet11',
  display: 'inline-flex',
  fontSize: '0.8125rem',
  gap: '$2',
  height: '2rem',
  justifyContent: 'center',
  lineHeight: 1,
  padding: '0 1rem',
  '&:hover': { backgroundColor: '$colors$violet4' },
  '&:focus': { boxShadow: `0 0 0 2px $colors$violet11` },
})

const StyledContent = styled(SelectPrimitive.Content, {
  backgroundColor: '$colors$violet3',
  borderRadius: '$4',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  overflow: 'hidden',
})

const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: '$1',
})

const StyledItem = styled(SelectPrimitive.Item, {
  all: 'unset',
  alignItems: 'center',
  borderRadius: 3,
  color: '$colors$violet11',
  display: 'flex',
  fontSize: '0.75rem',
  height: '1.5rem',
  lineHeight: 1,
  padding: '0 $5 0 $5',
  my: '$1',
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
  color: '$colors$violet12',
  // fontFamily: '$mono',
  fontSize: '0.75rem',
  fontWeight: 700,
  lineHeight: 1.5,
  padding: '0 $5 0 $5',
  my: '$1',
  // textTransform: 'uppercase',
})

const StyledSeparator = styled(SelectPrimitive.Separator, {
  backgroundColor: '$colors$violet6',
  height: 1,
  margin: '$2',
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
  backgroundColor: '$colors$violet3',
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
