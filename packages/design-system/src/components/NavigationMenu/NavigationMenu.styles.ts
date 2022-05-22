import { CaretDownIcon } from '@radix-ui/react-icons'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { motion } from 'framer-motion'

import { styled, keyframes } from '../../lib/stitches.config'

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

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

/**
 * @core
 */
const StyledMenu = styled(NavigationMenuPrimitive.Root, {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  zIndex: 1,
})

const StyledList = styled(NavigationMenuPrimitive.List, {
  all: 'unset',
  backgroundColor: 'inherit',
  borderRadius: 6,
  // boxShadow: `0 2px 10px $colors$shadow`,
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  padding: 6,
})

const itemStyles = {
  borderRadius: 4,
  color: '$colors$primary',
  fontSize: 15,
  fontWeight: 500,
  lineHeight: 1,
  outline: 'none',
  padding: '8px 12px',
  userSelect: 'none',
  /**
   * @note(hoverState)
   * itemStyles is inherited to NavigationMenuListItemFocus
   * Set these manually on the elements themselves
   *  to avoid redundant layering w/ transparency
   */
  // '&[data-state="closed"] &': {
  //   '&:focus': {
  //     position: 'relative',
  //     boxShadow: `0 0 0 1px $colors$focus`,
  //   },
  //   '&:hover': { backgroundColor: '$colors$hoverBackground' },
  // },
}

const StyledTrigger = styled(NavigationMenuPrimitive.Trigger, {
  all: 'unset',
  ...itemStyles,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 2,
  '&:hover': { cursor: 'pointer' },
  // @note(hoverState)
  '&[data-state="open"]': { backgroundColor: '$colors$focusBackground' },
  '&[data-state="closed"]': {
    '&:focus': {
      position: 'relative',
      boxShadow: `0 0 0 1px $colors$focus`,
    },
    '&:hover': { backgroundColor: '$colors$focusBackground' },
  },
})

const StyledCaret = styled(CaretDownIcon, {
  position: 'relative',
  color: '$colors$primary',
  top: 1,
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
})

const StyledLink = styled(NavigationMenuPrimitive.Link, {
  ...itemStyles,
  display: 'block',
  textDecoration: 'none',
  fontSize: 15,
  lineHeight: 1,
  // @note(hoverState)
  '&:focus': {
    position: 'relative',
    boxShadow: `0 0 0 1px $colors$focus`,
  },
  '&:hover': { backgroundColor: '$colors$hoverBackground', cursor: 'pointer' },
  variants: {
    focus: {
      true: {
        padding: '$1',
        position: 'relative',
        listStyle: 'none',
        cursor: 'pointer',
        width: '90%',
        height: '90%',
        margin: '$1',
        outline: 'none',

        span: {
          position: 'relative',
          left: '4px',
          right: 0,
          top: '6px',
          bottom: 0,
          zIndex: 1,
          userSelect: 'none',
          fontSize: '1rem',
          // color: 'yellow',
          // // @todo(design-system) turn this into variant "truncate"
          // maxHeight: '26px',
          // overflow: 'hidden',
          // textOverflow: 'ellipsis',
          // whiteSpace: 'break-spaces',
        },
      },
    },
    type: {
      callout: {
        background: `linear-gradient(135deg, $colors$emphasis 0%, $colors$foreground 100%)`,
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        p: 0,
        m: 0,
        mb: '$1',
        pb: '$3',
      },
    },
  },
})

const StyledContent = styled(NavigationMenuPrimitive.Content, {
  backgroundColor: '$colors$panel',
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
  height: 10,
  top: '100%',
  overflow: 'hidden',
  zIndex: 1,

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'width, transform 250ms ease',
    '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
    '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
  },
})

const StyledArrow = styled('div', {
  position: 'relative',
  top: '70%',
  backgroundColor: '$colors$panel',
  boxShadow: `0 2px 10px $colors$shadow`,
  width: 10,
  height: 10,
  transform: 'rotate(45deg)',
  borderTopLeftRadius: 2,
})

// const StyledIndicator = styled(NavigationMenuPrimitive.Indicator, {
//   display: 'flex',
//   alignItems: 'flex-end',
//   justifyContent: 'center',
//   height: 2,
//   bottom: 0,
//   borderTopLeftRadius: 10,
//   borderTopRightRadius: 10,
//   backgroundColor: '$colors$brand11',

//   '@media (prefers-reduced-motion: no-preference)': {
//     transition: 'width, transform 250ms ease',
//   },
// })

const StyledViewport = styled(NavigationMenuPrimitive.Viewport, {
  backgroundColor: 'inherit',
  borderRadius: 6,
  boxShadow: `0 2px 10px $colors$shadow`,
  height: 'var(--radix-navigation-menu-viewport-height)',
  marginTop: 10,
  /**
   * @note(radix-ui) driving force behind animation
   * of NavigationMenuPrimitive.Content
   * If Container of this Element is constrained, this will be.
   */
  overflow: 'hidden',
  position: 'relative',
  transformOrigin: 'top center',
  width: '100%',

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
const NavigationMenuTrigger = StyledTrigger
const NavigationMenuCaret = StyledCaret
const NavigationMenuLink = StyledLink
const NavigationMenuContent = StyledContent
const NavigationMenuViewport = StyledViewport
const NavigationMenuIndicator = StyledIndicator
const NavigationMenuArrow = StyledArrow

/**
 * @custom
 */
const NavigationMenuListContent = styled('ul', {
  columnGap: 10,
  display: 'grid',
  listStyle: 'none',
  margin: 0,
  p: '$2',
  '@bp1': {
    p: '$3',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'all 250ms ease',
  },

  variants: {
    layout: {
      one: {
        '@media only screen and (min-width: 600px)': {
          gridTemplateColumns: '.75fr 1fr',
          width: 500,
        },
      },
      two: {
        '@media only screen and (min-width: 600px)': {
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(3, 1fr)',
          width: 600,
        },
      },
      three: {
        '@media only screen and (min-width: 600px)': {
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(4, 1fr)',
          width: 600,
        },
      },
    },
  },
})

const NavigationMenuListItem = styled('li', {
  borderRadius: '$2',
  py: '$1',
  px: '0',
  m: '0',
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'all 250ms ease',
  },
})

const NavigationMenuListItemLink = styled(NavigationMenuPrimitive.Link, {
  ...itemStyles,
  display: 'block',
  textDecoration: 'none',
  fontSize: 15,
  lineHeight: 1,
  // @note(hoverState)
  '&:focus': {
    position: 'relative',
    boxShadow: `0 0 0 1px transparent`,
  },
  '&:hover': { backgroundColor: 'transparent' },
  variants: {
    focus: {
      true: {
        padding: '$1',
        position: 'relative',
        listStyle: 'none',
        cursor: 'pointer',
        width: '90%',
        height: '90%',
        margin: '$1',
        outline: 'none',

        span: {
          position: 'relative',
          left: '4px',
          right: 0,
          top: '6px',
          bottom: 0,
          zIndex: 1,
          userSelect: 'none',
          fontSize: '1rem',
          // color: 'yellow',
          // // @todo(design-system) turn this into variant "truncate"
          // maxHeight: '26px',
          // overflow: 'hidden',
          // textOverflow: 'ellipsis',
          // whiteSpace: 'break-spaces',
        },
      },
    },
    type: {
      callout: {
        background: `linear-gradient(135deg, $colors$emphasis 0%, $colors$foreground 100%)`,
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        p: 0,
        m: 0,
        mb: '$1',
        pb: '$3',
      },
    },
  },
})

const NavigationMenuLinkTitle = styled('div', {
  color: '$colors$primary',
  fontWeight: 500,
  lineHeight: 1.2,
  marginBottom: 5,
})

const NavigationMenuLinkText = styled('p', {
  all: 'unset',
  color: '$colors$secondary',
  fontWeight: 'initial',
  lineHeight: 1.4,
  //
  // maxHeight: '1rem',
  // overflow: 'hidden',
  // textOverflow: 'ellipsis',
  // whiteSpace: 'break-spaces',
})

const NavigationMenuViewportPosition = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  left: 0,
  perspective: '2000px',
  position: 'absolute',
  top: '100%',
  width: '100%',
})

const NavigationMenuListItemFocus = styled(motion.div, {
  position: 'absolute',
  top: '-3px',
  left: '-3px',
  // bottom: '-2px',
  // right: 0,
  width: '110%',
  height: '110%',

  borderRadius: '$2',
  zIndex: 0,
  // @note(hoverState)
  background: '$colors$hoverBackground',
  variants: {
    type: {
      callout: {
        top: '-9px',
        left: '-9px',
        // bottom: '-7px',
      },
    },
    color: {
      primary: {
        // background: '$colors$focusBackground',
      },
    },
  },
})

const NavigationMenuListItemSelect = styled(motion.div, {
  position: 'absolute',
  top: '-3px',
  left: '-3px',
  // bottom: '-2px',
  // left: '-10px',
  // right: 0,
  width: '110%',
  height: '110%',
  background: 'transparent',
  border: '2px solid $colors$tertiary',
  borderRadius: '8px',
  zIndex: 1,
})

export {
  // @core
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuCaret,
  NavigationMenuLink,
  NavigationMenuContent,
  NavigationMenuViewport,
  NavigationMenuIndicator,
  NavigationMenuArrow,
  // @custom
  NavigationMenuListContent,
  NavigationMenuListItem,
  NavigationMenuListItemLink,
  NavigationMenuLinkTitle,
  NavigationMenuLinkText,
  NavigationMenuViewportPosition,
  NavigationMenuListItemFocus,
  NavigationMenuListItemSelect,
}
