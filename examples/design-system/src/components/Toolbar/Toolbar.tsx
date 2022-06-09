import {
  // Box,
  Icon,
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarLink,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from '@jeromefitz/design-system/src/components'
import * as React from 'react'

// import { NavigationMenu } from '../NavigationMenu'

const ToolbarDemo = () => (
  <Toolbar aria-label="Formatting options">
    <ToolbarToggleGroup type="multiple" aria-label="Text formatting">
      <ToolbarToggleItem value="bold" aria-label="Bold">
        <Icon.FontBold />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="italic" aria-label="Italic">
        <Icon.FontItalic />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="strikethrough" aria-label="Strike through">
        <Icon.Strikethrough />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
    <ToolbarSeparator />
    <ToolbarToggleGroup
      type="single"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToolbarToggleItem value="left" aria-label="Left aligned">
        <Icon.TextAlignLeft />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="center" aria-label="Center aligned">
        <Icon.TextAlignCenter />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="right" aria-label="Right aligned">
        <Icon.TextAlignRight />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
    <ToolbarSeparator />
    <ToolbarLink href="#" target="_blank" css={{ marginRight: 10 }}>
      Edited 2 hours ago
    </ToolbarLink>
    <ToolbarButton css={{ marginLeft: 'auto' }}>Share</ToolbarButton>
    {/* <Box css={{ marginLeft: 'auto', marginRight: '$9' }}>
      <NavigationMenu />
    </Box> */}
  </Toolbar>
)

export { ToolbarDemo as Toolbar }
