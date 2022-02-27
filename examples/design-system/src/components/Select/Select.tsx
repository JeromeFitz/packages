import {
  Box,
  Flex,
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
  SelectLabel as _SelectLabel,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from '@jeromefitz/design-system/src/components'
import { styled } from '@jeromefitz/design-system/src/stitches.config'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  DesktopIcon,
  MoonIcon,
  SunIcon,
} from '@radix-ui/react-icons'
import * as React from 'react'

const defaultValue = 'blueberry'

const SelectLabel = styled(_SelectLabel, {
  fontFamily: '$mono',
})

const SelectDemo = () => {
  const [selectValue, selectValueSet] = React.useState(defaultValue)

  return (
    <Box>
      <Select onValueChange={selectValueSet} value={selectValue}>
        <SelectTrigger aria-label="Food">
          <SelectValue aria-label={selectValue} />
          <SelectIcon>
            <ChevronDownIcon />
          </SelectIcon>
        </SelectTrigger>
        <SelectContent>
          <SelectScrollUpButton>
            <ChevronUpIcon />
          </SelectScrollUpButton>
          <SelectViewport>
            <SelectGroup>
              <SelectLabel>Theme</SelectLabel>
              <SelectItem value="light">
                <SelectItemText>
                  <Flex direction="row" align="center" gap="2">
                    <SunIcon />
                    <Box as="span">Light</Box>
                  </Flex>
                </SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="dark">
                <SelectItemText>
                  <Flex direction="row" align="center" gap="2">
                    <MoonIcon />
                    <Box as="span">Dark</Box>
                  </Flex>
                </SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="system">
                <SelectItemText>
                  <Flex direction="row" align="center" gap="2">
                    <DesktopIcon />
                    <Box as="span">System</Box>
                  </Flex>
                </SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">
                <SelectItemText>Apple</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="banana">
                <SelectItemText>Banana</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="blueberry">
                <SelectItemText>Blueberry</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="grapes">
                <SelectItemText>Grapes</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="pineapple">
                <SelectItemText>Pineapple</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
            </SelectGroup>

            <SelectSeparator />

            <SelectGroup>
              <SelectLabel>Vegetables</SelectLabel>
              <SelectItem value="aubergine">
                <SelectItemText>Aubergine</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="broccoli">
                <SelectItemText>Broccoli</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="carrot" disabled>
                <SelectItemText>Carrot</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="courgette">
                <SelectItemText>Courgette</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="leek">
                <SelectItemText>Leek</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
            </SelectGroup>

            <SelectSeparator />

            <SelectGroup>
              <SelectLabel>Meat</SelectLabel>
              <SelectItem value="beef">
                <SelectItemText>Beef</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="chicken">
                <SelectItemText>Chicken</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="lamb">
                <SelectItemText>Lamb</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
              <SelectItem value="pork">
                <SelectItemText>Pork</SelectItemText>
                <SelectItemIndicator>
                  <CheckIcon />
                </SelectItemIndicator>
              </SelectItem>
            </SelectGroup>
          </SelectViewport>
          <SelectScrollDownButton>
            <ChevronDownIcon />
          </SelectScrollDownButton>
        </SelectContent>
      </Select>
    </Box>
  )
}

export { SelectDemo as Select }
