/**
 * https://www.radix-ui.com/primitives/docs/components/toggle-group
 */
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'

import { styled } from '../../lib/stitches.config'

const StyledToggleGroup = styled(ToggleGroupPrimitive.Root, {
  display: 'inline-flex',
  backgroundColor: '$colore$slate6',
  borderRadius: 4,
  boxShadow: `0 2px 10px $colors$blackA7`,
})

const StyledItem = styled(ToggleGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: 'white',
  color: '$colors$slate11',
  height: 35,
  width: 35,
  display: 'flex',
  fontSize: 15,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 1,
  '&:first-child': {
    marginLeft: 0,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  '&:last-child': { borderTopRightRadius: 4, borderBottomRightRadius: 4 },
  '&:hover': { backgroundColor: '$colors$brand3' },
  '&[data-state=on]': {
    backgroundColor: '$colors$brand5',
    color: '$colors$brand11',
  },
  '&:focus': { position: 'relative', boxShadow: `0 0 0 2px black` },
})

const ToggleGroup = StyledToggleGroup
const ToggleGroupItem = StyledItem

export { ToggleGroup, ToggleGroupItem }
