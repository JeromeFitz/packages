/**
 * https://www.radix-ui.com/primitives/docs/components/toggle-group
 */
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'

import { styled } from '../../lib/stitches.config'

const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
  backgroundColor: '$colore$slate6',
  borderRadius: 4,
  boxShadow: `0 2px 10px $colors$blackA7`,
  display: 'inline-flex',
})

const StyledItem = styled(ToggleGroupPrimitive.Item, {
  '&:first-child': {
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
    marginLeft: 0,
  },
  '&:focus': { boxShadow: `0 0 0 2px black`, position: 'relative' },
  '&:hover': { backgroundColor: '$colors$brand3' },
  '&:last-child': { borderBottomRightRadius: 4, borderTopRightRadius: 4 },
  '&[data-state=on]': {
    backgroundColor: '$colors$brand5',
    color: '$colors$brand11',
  },
  alignItems: 'center',
  all: 'unset',
  backgroundColor: 'white',
  color: '$colors$slate11',
  display: 'flex',
  fontSize: 15,
  height: 35,
  justifyContent: 'center',
  lineHeight: 1,
  marginLeft: 1,
  width: 35,
})

const ToggleGroup = StyledToggleGroup
const ToggleGroupItem = StyledItem

export { ToggleGroup, ToggleGroupItem }
