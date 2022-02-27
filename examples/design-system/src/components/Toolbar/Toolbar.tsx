import {
  // Box,
  Toolbar,
  ToolbarButton,
  ToolbarSeparator,
  ToolbarLink,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from '@jeromefitz/design-system/src/components'
import {
  StrikethroughIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  FontBoldIcon,
  FontItalicIcon,
} from '@radix-ui/react-icons'
import * as React from 'react'

// import { NavigationMenu } from '../NavigationMenu'

const ToolbarDemo = () => (
  <Toolbar aria-label="Formatting options">
    <ToolbarToggleGroup type="multiple" aria-label="Text formatting">
      <ToolbarToggleItem value="bold" aria-label="Bold">
        <FontBoldIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="italic" aria-label="Italic">
        <FontItalicIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="strikethrough" aria-label="Strike through">
        <StrikethroughIcon />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
    <ToolbarSeparator />
    <ToolbarToggleGroup
      type="single"
      defaultValue="center"
      aria-label="Text alignment"
    >
      <ToolbarToggleItem value="left" aria-label="Left aligned">
        <TextAlignLeftIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="center" aria-label="Center aligned">
        <TextAlignCenterIcon />
      </ToolbarToggleItem>
      <ToolbarToggleItem value="right" aria-label="Right aligned">
        <TextAlignRightIcon />
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
