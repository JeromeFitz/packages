import {
  Icon,
  ToggleGroup,
  ToggleGroupItem,
} from '@jeromefitz/design-system/src/components'
import React from 'react'

const ToggleGroupDemo = () => (
  <ToggleGroup type="single" defaultValue="center" aria-label="Text alignment">
    <ToggleGroupItem value="left" aria-label="Left aligned">
      <Icon.TextAlignLeft />
    </ToggleGroupItem>
    <ToggleGroupItem value="center" aria-label="Center aligned">
      <Icon.TextAlignCenter />
    </ToggleGroupItem>
    <ToggleGroupItem value="right" aria-label="Right aligned">
      <Icon.TextAlignRight />
    </ToggleGroupItem>
  </ToggleGroup>
)

export { ToggleGroupDemo as ToggleGroup }
