import {
  // Box,
  Icon,
  Toolbar,
  ToolbarButton,
  ToolbarLink,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from '@jeromefitz/design-system/src/components'

// import { NavigationMenu } from '../NavigationMenu'

const ToolbarDemo = () => (
  <Toolbar aria-label="Formatting options">
    <ToolbarToggleGroup aria-label="Text formatting" type="multiple">
      <ToolbarToggleItem aria-label="Bold" value="bold">
        <Icon.FontBold />
      </ToolbarToggleItem>
      <ToolbarToggleItem aria-label="Italic" value="italic">
        <Icon.FontItalic />
      </ToolbarToggleItem>
      <ToolbarToggleItem aria-label="Strike through" value="strikethrough">
        <Icon.Strikethrough />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
    <ToolbarSeparator />
    <ToolbarToggleGroup
      aria-label="Text alignment"
      defaultValue="center"
      type="single"
    >
      <ToolbarToggleItem aria-label="Left aligned" value="left">
        <Icon.TextAlignLeft />
      </ToolbarToggleItem>
      <ToolbarToggleItem aria-label="Center aligned" value="center">
        <Icon.TextAlignCenter />
      </ToolbarToggleItem>
      <ToolbarToggleItem aria-label="Right aligned" value="right">
        <Icon.TextAlignRight />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>
    <ToolbarSeparator />
    <ToolbarLink css={{ marginRight: 10 }} href="#" target="_blank">
      Edited 2 hours ago
    </ToolbarLink>
    <ToolbarButton css={{ marginLeft: 'auto' }}>Share</ToolbarButton>
    {/* <Box css={{ marginLeft: 'auto', marginRight: '$9' }}>
      <NavigationMenu />
    </Box> */}
  </Toolbar>
)

export { ToolbarDemo as Toolbar }
