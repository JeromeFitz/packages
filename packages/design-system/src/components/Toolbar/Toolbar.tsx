import * as ToolbarPrimitive from '@radix-ui/react-toolbar'

import { styled } from '../../lib/stitches.config'

const StyledToolbar = styled(ToolbarPrimitive.Root, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: `0 2px 10px $colors$blackA7`,
  display: 'flex',
  minWidth: 'max-content',
  padding: 10,
  width: '100%',
})

const itemStyles = {
  '&:focus': { boxShadow: `0 0 0 2px $colors$brand7`, position: 'relative' },
  '&:hover': { backgroundColor: '$colors$brand3', color: '$colors$brand11' },
  alignItems: 'center',
  all: 'unset',
  borderRadius: 4,
  color: '$colores$slate11',
  display: 'inline-flex',
  flex: '0 0 auto',
  fontSize: 13,
  height: 25,
  justifyContent: 'center',
  lineHeight: 1,
  padding: '0 5px',
}

const StyledButton = styled(
  ToolbarPrimitive.Button,
  {
    ...itemStyles,
    backgroundColor: '$colors$brand9',
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
  },
  { '&:hover': { backgroundColor: '$colors$brand10', color: 'white' } },
)

const StyledLink = styled(
  ToolbarPrimitive.Link,
  {
    ...itemStyles,
    alignItems: 'center',
    backgroundColor: 'transparent',
    color: '$colors$slate11',
    display: 'inline-flex',
    justifyContent: 'center',
  },
  { '&:hover': { backgroundColor: 'transparent', cursor: 'pointer' } },
)

const StyledSeparator = styled(ToolbarPrimitive.Separator, {
  backgroundColor: '$colors$slate6',
  margin: '0 10px',
  width: 1,
})

const StyledToggleGroup = styled(ToolbarPrimitive.ToggleGroup, {
  borderRadius: 4,
  display: 'inline-flex',
})

const StyledToggleItem = styled(ToolbarPrimitive.ToggleItem, {
  ...itemStyles,
  '&:first-child': { marginLeft: 0 },
  '&[data-state=on]': {
    backgroundColor: '$colors$brand5',
    color: '$colors$brand11',
  },
  backgroundColor: 'white',
  boxShadow: 0,
  marginLeft: 2,
})

const Toolbar = StyledToolbar
const ToolbarButton = StyledButton
const ToolbarSeparator = StyledSeparator
const ToolbarLink = StyledLink
const ToolbarToggleGroup = StyledToggleGroup
const ToolbarToggleItem = StyledToggleItem

export {
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
}
