import type { ComponentProps, ElementRef } from 'react'

import type { CSS } from '../../lib/stitches.config'

import * as MenuPrimitive from '@radix-ui/react-menu'
import { forwardRef } from 'react'

import { styled } from '../../lib/stitches.config'
import { Box, Flex, Icon } from '../index'
import { panelStyles } from '../Panel/Panel.styles'
import { itemCss, labelCss, menuCss, separatorCss } from './Menu.styles'

const Menu = styled(MenuPrimitive.Root, menuCss)
const MenuContent = styled(MenuPrimitive.Content, panelStyles)

const MenuSeparator = styled(MenuPrimitive.Separator, separatorCss)

const MenuItem = styled(MenuPrimitive.Item, itemCss)

const StyledMenuRadioItem = styled(MenuPrimitive.RadioItem, itemCss)

type MenuRadioItemPrimitiveProps = ComponentProps<typeof MenuPrimitive.RadioItem>
type MenuRadioItemProps = MenuRadioItemPrimitiveProps & { css?: CSS }

const MenuRadioItem = forwardRef<
  ElementRef<typeof StyledMenuRadioItem>,
  MenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledMenuRadioItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ left: '$1', position: 'absolute' }}>
      <MenuPrimitive.ItemIndicator>
        <Flex
          css={{
            alignItems: 'center',
            height: '$3',
            justifyContent: 'center',
            width: '$3',
          }}
        >
          <Box
            css={{
              backgroundColor: 'currentColor',
              borderRadius: '$round',
              height: '$1',
              width: '$1',
            }}
          ></Box>
        </Flex>
      </MenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledMenuRadioItem>
))

const StyledMenuCheckboxItem = styled(MenuPrimitive.CheckboxItem, itemCss)

type MenuCheckboxItemPrimitiveProps = ComponentProps<
  typeof MenuPrimitive.CheckboxItem
>
type MenuCheckboxItemProps = MenuCheckboxItemPrimitiveProps & { css?: CSS }

const MenuCheckboxItem = forwardRef<
  ElementRef<typeof StyledMenuCheckboxItem>,
  MenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledMenuCheckboxItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ left: '$1', position: 'absolute' }}>
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
  MenuCheckboxItem,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuLabel,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
}
