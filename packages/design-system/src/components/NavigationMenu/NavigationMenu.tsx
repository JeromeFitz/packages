import * as React from 'react'

import { CSS } from '../../stitches.config'

import {
  NavigationMenuTrigger,
  NavigationMenuCaret,
  NavigationMenuListItemFocus,
  NavigationMenuListItemSelect,
} from './NavigationMenu.styles'

/**
 * @core
 */
type StyledTriggerWithCaretProps = React.ComponentProps<
  typeof NavigationMenuTrigger
> & {
  children?: any
  css?: CSS
}

const StyledTriggerWithCaret = React.forwardRef<
  React.ElementRef<typeof NavigationMenuTrigger>,
  StyledTriggerWithCaretProps
>(({ children, css, ...props }, forwardedRef) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <NavigationMenuTrigger {...props} ref={forwardedRef}>
    {children}
    <NavigationMenuCaret aria-hidden css={css} />
  </NavigationMenuTrigger>
))

// @core
const NavigationMenuTriggerWithCaret = StyledTriggerWithCaret

/**
 * @custom
 */
const Focused = React.forwardRef((props: any, forwardedRef) => (
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
const Selected = React.forwardRef((props: any, forwardedRef) => (
  <NavigationMenuListItemSelect ref={forwardedRef} {...props} />
))

export { NavigationMenuTriggerWithCaret, Focused, Selected }
