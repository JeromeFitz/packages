/**
 * https://www.radix-ui.com/primitives/docs/components/navigation-menu
 */
import type { ComponentProps, ElementRef } from 'react'

import type { CSS } from '../../lib/stitches.config'

import { forwardRef } from 'react'

import {
  NavigationMenuArrow,
  NavigationMenuCaret,
  NavigationMenuIndicator,
  NavigationMenuListItemFocus,
  NavigationMenuListItemSelect,
  NavigationMenuTrigger,
} from './NavigationMenu.styles'

/**
 * @core
 */
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
type StyledTriggerWithCaretProps = ComponentProps<typeof NavigationMenuTrigger> & {
  children?: any
  css?: CSS
}

const StyledTriggerWithCaret = forwardRef<
  ElementRef<typeof NavigationMenuTrigger>,
  StyledTriggerWithCaretProps
>(({ children, css, ...props }, forwardedRef) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <NavigationMenuTrigger {...props} ref={forwardedRef}>
    {children}
    <NavigationMenuCaret aria-hidden css={css} />
  </NavigationMenuTrigger>
))

const StyledIndicatorWithArrow = forwardRef((props, forwardedRef) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <NavigationMenuIndicator {...props} ref={forwardedRef}>
    <NavigationMenuArrow />
  </NavigationMenuIndicator>
))

// @core
const NavigationMenuTriggerWithCaret = StyledTriggerWithCaret
const NavigationMenuIndicatorWithArrow = StyledIndicatorWithArrow

/**
 * @custom
 */
const Focused = forwardRef((props: any, forwardedRef) => (
  <NavigationMenuListItemFocus
    ref={forwardedRef}
    transition={{
      layout: {
        duration: 0.2,
        ease: 'easeOut',
      },
    }}
    {...props}
  />
))
const Selected = forwardRef((props: any, forwardedRef) => (
  <NavigationMenuListItemSelect ref={forwardedRef} {...props} />
))

export {
  Focused,
  NavigationMenuIndicatorWithArrow,
  NavigationMenuTriggerWithCaret,
  Selected,
}
