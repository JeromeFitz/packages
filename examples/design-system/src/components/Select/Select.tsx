import {
  Box,
  Flex,
  Icon,
  Select,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectContent,
  SelectViewport,
  SelectGroup,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectLabel,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from '@jeromefitz/design-system/src/components'
import { useState } from 'react'

const defaultValue = 'blueberry'

const SelectDemo = () => {
  const [selectValue, selectValueSet] = useState(defaultValue)

  return (
    <Box>
      <Select onValueChange={selectValueSet} value={selectValue}>
        <SelectTrigger aria-label="Food">
          <SelectValue aria-label={selectValue} />
          <SelectIcon>
            <Icon.ChevronDown />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent>
          <SelectScrollUpButton>
            <Icon.ChevronUp />
          </SelectScrollUpButton>
          <SelectViewport>
            <SelectGroup>
              <SelectLabel>Theme</SelectLabel>
              <SelectItem value="light">
                <SelectItemText>
                  <Flex direction="row" align="center" gap="2">
                    <Icon.Sun />
                    <Box as="span">Light</Box>
                  </Flex>
                </SelectItemText>
                <SelectItemIndicator>
                  <Icon.Check />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="dark">
                <SelectItemText>
                  <Flex direction="row" align="center" gap="2">
                    <Icon.Moon />
                    <Box as="span">Dark</Box>
                  </Flex>
                </SelectItemText>
                <SelectItemIndicator>
                  <Icon.Check />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="system">
                <SelectItemText>
                  <Flex direction="row" align="center" gap="2">
                    <Icon.Desktop />
                    <Box as="span">System</Box>
                  </Flex>
                </SelectItemText>
                <SelectItemIndicator>
                  <Icon.Check />
                </SelectItemIndicator>
              </SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">
                <SelectItemText>Apple</SelectItemText>
                <SelectItemIndicator>
                  <Icon.Check />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="banana">
                <SelectItemText>Banana</SelectItemText>
                <SelectItemIndicator>
                  <Icon.Check />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="blueberry">
                <SelectItemText>Blueberry</SelectItemText>
                <SelectItemIndicator>
                  <Icon.Check />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="grapes">
                <SelectItemText>Grapes</SelectItemText>
                <SelectItemIndicator>
                  <Icon.Check />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="pineapple">
                <SelectItemText>Pineapple</SelectItemText>
                <SelectItemIndicator>
                  <Icon.Check />
                </SelectItemIndicator>
              </SelectItem>
            </SelectGroup>

            <SelectSeparator />

            <SelectGroup>
              <SelectLabel>Vegetables</SelectLabel>
              <SelectItem value="aubergine">
                <SelectItemText>Aubergine</SelectItemText>
                <SelectItemIndicator>
                  <Icon.Check />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="broccoli">
                <SelectItemText>Broccoli</SelectItemText>
                <SelectItemIndicator>
                  <Icon.Check />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="carrot" disabled>
                <SelectItemText>Carrot</SelectItemText>
                <SelectItemIndicator>
                  <Icon.Check />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="courgette">
                <SelectItemText>Courgette</SelectItemText>
                <SelectItemIndicator>
                  <Icon.Check />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="leek">
                <SelectItemText>Leek</SelectItemText>
                <SelectItemIndicator>
                  <Icon.Check />
                </SelectItemIndicator>
              </SelectItem>
            </SelectGroup>

            <SelectSeparator />

            <SelectGroup>
              <SelectLabel>Meat</SelectLabel>
              <SelectItem value="beef">
                <SelectItemText>Beef</SelectItemText>
                <SelectItemIndicator>
                  <Icon.Check />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="chicken">
                <SelectItemText>Chicken</SelectItemText>
                <SelectItemIndicator>
                  <Icon.Check />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="lamb">
                <SelectItemText>Lamb</SelectItemText>
                <SelectItemIndicator>
                  <Icon.Check />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="pork">
                <SelectItemText>Pork</SelectItemText>
                <SelectItemIndicator>
                  <Icon.Check />
                </SelectItemIndicator>
              </SelectItem>
            </SelectGroup>
          </SelectViewport>
          <SelectScrollDownButton>
            <Icon.ChevronDown />
          </SelectScrollDownButton>
        </SelectContent>
      </Select>
    </Box>
  )
}

export { SelectDemo as Select }
