import {
  Icon,
  ToggleGroup,
  ToggleGroupItem,
} from '@jeromefitz/design-system/src/components'

const ToggleGroupDemo = () => (
  <ToggleGroup aria-label="Text alignment" defaultValue="center" type="single">
    <ToggleGroupItem aria-label="Left aligned" value="left">
      <Icon.TextAlignLeft />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Center aligned" value="center">
      <Icon.TextAlignCenter />
    </ToggleGroupItem>
    <ToggleGroupItem aria-label="Right aligned" value="right">
      <Icon.TextAlignRight />
    </ToggleGroupItem>
  </ToggleGroup>
)

export { ToggleGroupDemo as ToggleGroup }
