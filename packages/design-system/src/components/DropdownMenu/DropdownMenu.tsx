/**
 * https://www.radix-ui.com/primitives/docs/components/dropdown-menu
 */
import type { ComponentProps, ElementRef } from 'react'

import type { CSS } from '../../lib/stitches.config'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'

import { styled } from '../../lib/stitches.config'
import { Box, Flex, Icon } from '../index'
import { itemCss, labelCss, menuCss, separatorCss } from '../Menu/Menu.styles'
import { panelStyles } from '../Panel/Panel.styles'

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuContent = styled(
  DropdownMenuPrimitive.Content,
  menuCss,
  panelStyles,
)
const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, separatorCss)
const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, itemCss)

const StyledDropdownMenuRadioItem = styled(DropdownMenuPrimitive.RadioItem, itemCss)

type DialogMenuRadioItemPrimitiveProps = ComponentProps<
  typeof DropdownMenuPrimitive.RadioItem
>
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
type DialogMenuRadioItemProps = DialogMenuRadioItemPrimitiveProps & { css?: CSS }

const DropdownMenuRadioItem = forwardRef<
  ElementRef<typeof StyledDropdownMenuRadioItem>,
  DialogMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledDropdownMenuRadioItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ left: '$1', position: 'absolute' }}>
      <DropdownMenuPrimitive.ItemIndicator>
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
          />
        </Flex>
      </DropdownMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledDropdownMenuRadioItem>
))

const StyledDropdownMenuCheckboxItem = styled(
  DropdownMenuPrimitive.CheckboxItem,
  itemCss,
)

type DialogMenuCheckboxItemPrimitiveProps = ComponentProps<
  typeof DropdownMenuPrimitive.CheckboxItem
>
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
type DialogMenuCheckboxItemProps = DialogMenuCheckboxItemPrimitiveProps & {
  css?: CSS
}

const DropdownMenuCheckboxItem = forwardRef<
  ElementRef<typeof StyledDropdownMenuCheckboxItem>,
  DialogMenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledDropdownMenuCheckboxItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ left: '$1', position: 'absolute' }}>
      <DropdownMenuPrimitive.ItemIndicator>
        <Icon.Check />
      </DropdownMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledDropdownMenuCheckboxItem>
))

const DropdownMenuItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  alignItems: 'center',
  display: 'inline-flex',
  justifyContent: 'center',
  left: 0,
  position: 'absolute',
  width: 25,
})

const DropdownMenuSub = styled(DropdownMenuPrimitive.Sub, {})
const DropdownMenuSubContent = styled(DropdownMenuPrimitive.SubContent, {})
const DropdownMenuSubTrigger = styled(DropdownMenuPrimitive.SubTrigger, {
  '&:focus': {
    backgroundColor: '$colors$focusBackground',
    color: '$colors$focusColor',
  },
  '&[data-disabled]': {
    backgroundColor: '$colors$disabledBackground',
    color: '$colores$disabled',
    pointerEvents: 'none',
  },
  '&[data-state="open"]': {
    backgroundColor: '$colors$openBackground',
    color: '$colors$open',
  },
  alignItems: 'center',
  all: 'unset',
  borderRadius: 3,
  color: '$colors$primary',
  display: 'flex',
  fontSize: 13,
  height: 25,
  lineHeight: 1,
  padding: '0 5px',

  paddingLeft: 25,

  position: 'relative',

  userSelect: 'none',
})

const DropdownMenuArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: '$panel',
  mx: '$3',
})

const DropdownMenuLabel = styled(DropdownMenuPrimitive.Label, labelCss)
const DropdownMenuRadioGroup = styled(DropdownMenuPrimitive.RadioGroup, {})
const DropdownMenuGroup = styled(DropdownMenuPrimitive.Group, {})

export {
  DropdownMenu,
  DropdownMenuArrow,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuItemIndicator,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
}
