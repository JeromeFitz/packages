import * as MenuPrimitive from '@radix-ui/react-menu'
import * as React from 'react'

import { styled, CSS } from '../../lib/stitches.config'
import { Box, Flex, Icon } from '../index'
import { panelStyles } from '../Panel/Panel.styles'

import { itemCss, labelCss, menuCss, separatorCss } from './Menu.styles'

const Menu = styled(MenuPrimitive.Root, menuCss)
const MenuContent = styled(MenuPrimitive.Content, panelStyles)

const MenuSeparator = styled(MenuPrimitive.Separator, separatorCss)

const MenuItem = styled(MenuPrimitive.Item, itemCss)

const StyledMenuRadioItem = styled(MenuPrimitive.RadioItem, itemCss)

type MenuRadioItemPrimitiveProps = React.ComponentProps<
  typeof MenuPrimitive.RadioItem
>
type MenuRadioItemProps = MenuRadioItemPrimitiveProps & { css?: CSS }

const MenuRadioItem = React.forwardRef<
  React.ElementRef<typeof StyledMenuRadioItem>,
  MenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledMenuRadioItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <MenuPrimitive.ItemIndicator>
        <Flex
          css={{
            width: '$3',
            height: '$3',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            css={{
              width: '$1',
              height: '$1',
              backgroundColor: 'currentColor',
              borderRadius: '$round',
            }}
          ></Box>
        </Flex>
      </MenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledMenuRadioItem>
))

const StyledMenuCheckboxItem = styled(MenuPrimitive.CheckboxItem, itemCss)

type MenuCheckboxItemPrimitiveProps = React.ComponentProps<
  typeof MenuPrimitive.CheckboxItem
>
type MenuCheckboxItemProps = MenuCheckboxItemPrimitiveProps & { css?: CSS }

const MenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof StyledMenuCheckboxItem>,
  MenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledMenuCheckboxItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <MenuPrimitive.ItemIndicator>
        <Icon.Check />
      </MenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledMenuCheckboxItem>
))

const MenuLabel = styled(MenuPrimitive.Label, labelCss)
const MenuRadioGroup = styled(MenuPrimitive.RadioGroup, {})
const MenuGroup = styled(MenuPrimitive.Group, {})

export {
  Menu,
  MenuContent,
  MenuSeparator,
  MenuItem,
  MenuRadioItem,
  MenuCheckboxItem,
  MenuLabel,
  MenuRadioGroup,
  MenuGroup,
}
