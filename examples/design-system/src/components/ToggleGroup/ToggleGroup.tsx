import {
  ToggleGroup,
  ToggleGroupItem,
} from '@jeromefitz/design-system/src/components'
import {
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
} from '@radix-ui/react-icons'
import React from 'react'

const ToggleGroupDemo = () => (
  <ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
    <ToggleGroupItem value="left" aria-label="Left aligned">
      <TextAlignLeftIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="center" aria-label="Center aligned">
      <TextAlignCenterIcon />
    </ToggleGroupItem>
    <ToggleGroupItem value="right" aria-label="Right aligned">
      <TextAlignRightIcon />
    </ToggleGroupItem>
  </ToggleGroup>
)

export { ToggleGroupDemo as ToggleGroup }
