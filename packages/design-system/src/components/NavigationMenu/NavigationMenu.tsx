import { CaretDownIcon } from '@radix-ui/react-icons'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import * as React from 'react'

import { styled, keyframes, CSS } from '../../stitches.config'

const enterFromRight = keyframes({
  from: { transform: 'translateX(200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
})

const enterFromLeft = keyframes({
  from: { transform: 'translateX(-200px)', opacity: 0 },
  to: { transform: 'translateX(0)', opacity: 1 },
})

const exitToRight = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(200px)', opacity: 0 },
})

const exitToLeft = keyframes({
  from: { transform: 'translateX(0)', opacity: 1 },
  to: { transform: 'translateX(-200px)', opacity: 0 },
})

const scaleIn = keyframes({
  from: { transform: 'translateY(5px) rotateX(-20deg) scale(0.97)', opacity: 0 },
  to: { transform: 'translateY(0px) rotateX(0deg) scale(1)', opacity: 1 },
})

const scaleOut = keyframes({
  from: { transform: 'translateY(0px) rotateX(0deg) ', opacity: 1 },
  to: { transform: 'translateY(5px) rotateX(-10deg)', opacity: 0 },
})

const StyledMenu = styled(NavigationMenuPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  zIndex: 1,
})

const StyledList = styled(NavigationMenuPrimitive.List, {
  all: 'unset',
  backgroundColor: '$colors$violet2',
  borderRadius: 6,
  boxShadow: `0 2px 10px $colors$shadowLight`,
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  padding: 6,
})

const itemStyles = {
  borderRadius: 4,
  color: '$colors$violet11',
  fontSize: 15,
  fontWeight: 500,
  lineHeight: 1,
  outline: 'none',
  padding: '8px 12px',
  userSelect: 'none',
  '&:focus': { boxShadow: `0 0 0 2px $colors$violet7` },
}

const StyledTrigger = styled(NavigationMenuPrimitive.Trigger, {
  all: 'unset',
  ...itemStyles,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
})

const StyledCaret = styled(CaretDownIcon, {
  position: 'relative',
  color: '$colors$violet10',
  top: 1,
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
})

type StyledTriggerWithCaretProps = React.ComponentProps<typeof StyledTrigger> & {
  children?: any
  css?: CSS
}

const StyledTriggerWithCaret = React.forwardRef<
  React.ElementRef<typeof StyledTrigger>,
  StyledTriggerWithCaretProps
>(({ children, css, ...props }, forwardedRef) => (
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  <StyledTrigger {...props} ref={forwardedRef}>
    {children}
    <StyledCaret aria-hidden css={css} />
  </StyledTrigger>
))

const StyledLink = styled(NavigationMenuPrimitive.Link, {
  ...itemStyles,
  display: 'block',
  textDecoration: 'none',
  fontSize: 15,
  lineHeight: 1,
})

const StyledContent = styled(NavigationMenuPrimitive.Content, {
  backgroundColor: '$colors$violet2',
  // boxShadow: `0 2px 10px $colors$shadowLight`,
  // [`.${darkTheme} &`]: {
  //   boxShadow: `0 2px 10px $colors$shadowDark`,
  // },
  position: 'absolute',
  top: 0,
  left: 0,
  width: '95%',
  '@media only screen and (min-width: 600px)': { width: 'auto' },
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '250ms',
    animationTimingFunction: 'ease',
    '&[data-motion="from-start"]': { animationName: enterFromLeft },
    '&[data-motion="from-end"]': { animationName: enterFromRight },
    '&[data-motion="to-start"]': { animationName: exitToLeft },
    '&[data-motion="to-end"]': { animationName: exitToRight },
  },
})

const StyledIndicator = styled(NavigationMenuPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  height: 2,
  bottom: 0,
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  backgroundColor: '$colors$violet8',

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, transform 250ms ease',
  },
})

const StyledViewport = styled(NavigationMenuPrimitive.Viewport, {
  backgroundColor: '$colors$3',
  borderRadius: 6,
  boxShadow: `0 2px 10px $colors$shadowLight`,
  height: 'var(--radix-navigation-menu-viewport-height)',
  marginTop: 14,
  /**
   * @note(radix-ui) driving force behind animation
   * of NavigationMenuPrimitive.Content
   * If Container of this Element is constrained, this will be.
   */
  overflow: 'hidden',
  position: 'relative',
  transformOrigin: 'top center',
  width: '100%',

  // [`.${darkTheme} &`]: {
  //   boxShadow: `0 2px 10px $colors$shadowDark`,
  // },

  '@media only screen and (min-width: 600px)': {
    width: 'var(--radix-navigation-menu-viewport-width)',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, height, 300ms ease',
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
  },
})

const NavigationMenu = StyledMenu
const NavigationMenuList = StyledList
const NavigationMenuItem = NavigationMenuPrimitive.Item
const NavigationMenuTrigger = StyledTriggerWithCaret
const NavigationMenuLink = StyledLink
const NavigationMenuContent = StyledContent
const NavigationMenuViewport = StyledViewport
const NavigationMenuIndicator = StyledIndicator

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuViewport,
  NavigationMenuIndicator,
}
