import * as ToolbarPrimitive from '@radix-ui/react-toolbar'

import { styled } from '../../lib/stitches.config'

const StyledToolbar = styled(ToolbarPrimitive.Root, {
  display: 'flex',
  padding: 10,
  width: '100%',
  minWidth: 'max-content',
  borderRadius: 6,
  backgroundColor: 'white',
  boxShadow: `0 2px 10px $colors$blackA7`,
})

const itemStyles = {
  all: 'unset',
  flex: '0 0 auto',
  color: '$colores$slate11',
  height: 25,
  padding: '0 5px',
  borderRadius: 4,
  display: 'inline-flex',
  fontSize: 13,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': { backgroundColor: '$colors$brand3', color: '$colors$brand11' },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px $colors$brand7` },
}

const StyledButton = styled(
  ToolbarPrimitive.Button,
  {
    ...itemStyles,
    paddingLeft: 10,
    paddingRight: 10,
    color: 'white',
    backgroundColor: '$colors$brand9',
  },
  { '&:hover': { color: 'white', backgroundColor: '$colors$brand10' } },
)

const StyledLink = styled(
  ToolbarPrimitive.Link,
  {
    ...itemStyles,
    backgroundColor: 'transparent',
    color: '$colors$slate11',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  { '&:hover': { backgroundColor: 'transparent', cursor: 'pointer' } },
)

const StyledSeparator = styled(ToolbarPrimitive.Separator, {
  width: 1,
  backgroundColor: '$colors$slate6',
  margin: '0 10px',
})

const StyledToggleGroup = styled(ToolbarPrimitive.ToggleGroup, {
  display: 'inline-flex',
  borderRadius: 4,
})

const StyledToggleItem = styled(ToolbarPrimitive.ToggleItem, {
  ...itemStyles,
  boxShadow: 0,
  backgroundColor: 'white',
  marginLeft: 2,
  '&:first-child': { marginLeft: 0 },
  '&[data-state=on]': {
    backgroundColor: '$colors$brand5',
    color: '$colors$brand11',
  },
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
  ToolbarSeparator,
  ToolbarLink,
  ToolbarToggleGroup,
  ToolbarToggleItem,
}
