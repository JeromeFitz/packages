/**
 * https://www.radix-ui.com/primitives/docs/components/dropdown-menu
 */
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { forwardRef } from 'react'
import type { ComponentProps, ElementRef } from 'react'

import { styled } from '../../lib/stitches.config'
import type { CSS } from '../../lib/stitches.config'
import { Box, Icon, Flex } from '../index'
import { menuCss, separatorCss, itemCss, labelCss } from '../Menu/Menu.styles'
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
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <DropdownMenuPrimitive.ItemIndicator>
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
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <DropdownMenuPrimitive.ItemIndicator>
        <Icon.Check />
      </DropdownMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledDropdownMenuCheckboxItem>
))

const DropdownMenuItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const DropdownMenuSub = styled(DropdownMenuPrimitive.Sub, {})
const DropdownMenuSubContent = styled(DropdownMenuPrimitive.SubContent, {})
const DropdownMenuSubTrigger = styled(DropdownMenuPrimitive.SubTrigger, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: '$colors$primary',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 5px',
  position: 'relative',
  paddingLeft: 25,
  userSelect: 'none',

  '&[data-disabled]': {
    backgroundColor: '$colors$disabledBackground',
    color: '$colores$disabled',
    pointerEvents: 'none',
  },

  '&:focus': {
    backgroundColor: '$colors$focusBackground',
    color: '$colors$focusColor',
  },

  '&[data-state="open"]': {
    backgroundColor: '$colors$openBackground',
    color: '$colors$open',
  },
})

const DropdownMenuArrow = styled(DropdownMenuPrimitive.Arrow, {
  mx: '$3',
  fill: '$panel',
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
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
}
