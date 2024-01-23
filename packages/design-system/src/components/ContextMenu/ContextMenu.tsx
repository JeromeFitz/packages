/**
 * https://www.radix-ui.com/primitives/docs/components/context-menu
 */
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { forwardRef } from 'react'
import type { ComponentProps, ElementRef } from 'react'

import { styled } from '../../lib/stitches.config'
import type { CSS } from '../../lib/stitches.config'
import { Box, Flex, Icon } from '../index'
import { menuCss, separatorCss, itemCss, labelCss } from '../Menu/Menu.styles'
import { panelStyles } from '../Panel/Panel.styles'

const ContextMenu = ContextMenuPrimitive.Root
const ContextMenuTrigger = ContextMenuPrimitive.Trigger

const ContextMenuContent = styled(ContextMenuPrimitive.Content, menuCss, panelStyles)

const ContextMenuSeparator = styled(ContextMenuPrimitive.Separator, separatorCss)

const ContextMenuItem = styled(ContextMenuPrimitive.Item, itemCss)

const StyledContextMenuRadioItem = styled(ContextMenuPrimitive.RadioItem, itemCss)

type ContextMenuRadioItemPrimitiveProps = ComponentProps<
  typeof ContextMenuPrimitive.RadioItem
>
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
type ContextMenuRadioItemProps = ContextMenuRadioItemPrimitiveProps & { css?: CSS }

const ContextMenuRadioItem = forwardRef<
  ElementRef<typeof StyledContextMenuRadioItem>,
  ContextMenuRadioItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledContextMenuRadioItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <ContextMenuPrimitive.ItemIndicator>
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
      </ContextMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledContextMenuRadioItem>
))

const StyledContextMenuCheckboxItem = styled(
  ContextMenuPrimitive.CheckboxItem,
  itemCss,
)

type ContextMenuCheckboxItemPrimitiveProps = ComponentProps<
  typeof ContextMenuPrimitive.CheckboxItem
>
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
type ContextMenuCheckboxItemProps = ContextMenuCheckboxItemPrimitiveProps & {
  css?: CSS
}

const ContextMenuCheckboxItem = forwardRef<
  ElementRef<typeof StyledContextMenuCheckboxItem>,
  ContextMenuCheckboxItemProps
>(({ children, ...props }, forwardedRef) => (
  <StyledContextMenuCheckboxItem {...props} ref={forwardedRef}>
    <Box as="span" css={{ position: 'absolute', left: '$1' }}>
      <ContextMenuPrimitive.ItemIndicator>
        <Icon.Check />
      </ContextMenuPrimitive.ItemIndicator>
    </Box>
    {children}
  </StyledContextMenuCheckboxItem>
))

const ContextMenuLabel = styled(ContextMenuPrimitive.Label, labelCss)
const ContextMenuRadioGroup = styled(ContextMenuPrimitive.RadioGroup, {})
const ContextMenuGroup = styled(ContextMenuPrimitive.Group, {})

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuSeparator,
  ContextMenuItem,
  ContextMenuRadioItem,
  ContextMenuCheckboxItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuGroup,
}
