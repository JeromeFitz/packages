import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { motion } from 'framer-motion'

import { keyframes, styled } from '../../lib/stitches.config'
import { Icon } from '../Icon'

const enterFromRight = keyframes({
  from: { opacity: 0, transform: 'translateX(200px)' },
  to: { opacity: 1, transform: 'translateX(0)' },
})

const enterFromLeft = keyframes({
  from: { opacity: 0, transform: 'translateX(-200px)' },
  to: { opacity: 1, transform: 'translateX(0)' },
})

const exitToRight = keyframes({
  from: { opacity: 1, transform: 'translateX(0)' },
  to: { opacity: 0, transform: 'translateX(200px)' },
})

const exitToLeft = keyframes({
  from: { opacity: 1, transform: 'translateX(0)' },
  to: { opacity: 0, transform: 'translateX(-200px)' },
})

const scaleIn = keyframes({
  from: { opacity: 0, transform: 'translateY(5px) rotateX(-20deg) scale(0.97)' },
  to: { opacity: 1, transform: 'translateY(0px) rotateX(0deg) scale(1)' },
})

const scaleOut = keyframes({
  from: { opacity: 1, transform: 'translateY(0px) rotateX(0deg) ' },
  to: { opacity: 0, transform: 'translateY(5px) rotateX(-10deg)' },
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
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  width: '100%',
  zIndex: '$1',
})

const StyledList = styled(NavigationMenuPrimitive.List, {
  all: 'unset',
  backgroundColor: 'inherit',
  borderRadius: '$1',
  // boxShadow: `0 2px 10px $colors$shadow`,
  display: 'flex',
  justifyContent: 'center',
  listStyle: 'none',
  padding: '$3',
})

const itemStyles = {
  borderRadius: '$0',
  color: '$colors$primary',
  fontSize: '$2',
  fontVariationSettings: '"wght" $fontWeights$5',
  fontWeight: '$5',
  lineHeight: 1,
  outline: 'none',
  padding: '$4 $3',
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
  '&:hover': { cursor: 'pointer' },
  '&[data-state="closed"]': {
    '&:focus': {
      boxShadow: `0 0 0 1px $colors$focus`,
      position: 'relative',
    },
    '&:hover': { backgroundColor: '$colors$focusBackground' },
  },
  // @note(hoverState)
  '&[data-state="open"]': { backgroundColor: '$colors$focusBackground' },
  alignItems: 'center',
  display: 'flex',
  gap: '$2',
  justifyContent: 'space-between',
})

const StyledCaret = styled(Icon.CaretDown, {
  '[data-state=open] &': { transform: 'rotate(-180deg)' },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'transform 250ms ease',
  },
  color: '$colors$primary',
  position: 'relative',
  top: 1,
})

const StyledLink = styled(NavigationMenuPrimitive.Link, {
  ...itemStyles,
  // @note(hoverState)
  '&:focus': {
    boxShadow: `0 0 0 1px $colors$focus`,
    position: 'relative',
  },
  '&:hover': { backgroundColor: '$colors$hoverBackground', cursor: 'pointer' },
  display: 'block',
  fontSize: '$2',
  lineHeight: 1,
  textDecoration: 'none',
  variants: {
    focus: {
      true: {
        cursor: 'pointer',
        height: '90%',
        listStyle: 'none',
        margin: '$1',
        outline: 'none',
        padding: '$1',
        position: 'relative',
        span: {
          bottom: 0,
          fontSize: '$3',
          left: '$2',
          position: 'relative',
          right: 0,
          top: '$3',
          userSelect: 'none',
          zIndex: '$1',
          // color: 'yellow',
          // // @todo(design-system) turn this into variant "truncate"
          // maxHeight: '26px',
          // overflow: 'hidden',
          // textOverflow: 'ellipsis',
          // whiteSpace: 'break-spaces',
        },

        width: '90%',
      },
    },
    type: {
      callout: {
        background: `linear-gradient(135deg, $colors$emphasis 0%, $colors$foreground 100%)`,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'flex-end',
        m: 0,
        mb: '$1',
        p: 0,
        pb: '$3',
        width: '100%',
      },
    },
  },
})

const StyledContent = styled(NavigationMenuPrimitive.Content, {
  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-motion="from-end"]': { animationName: enterFromRight },
    '&[data-motion="from-start"]': { animationName: enterFromLeft },
    '&[data-motion="to-end"]': { animationName: exitToRight },
    '&[data-motion="to-start"]': { animationName: exitToLeft },
    animationDuration: '250ms',
    animationTimingFunction: 'ease',
  },
  '@media only screen and (min-width: 600px)': { width: 'auto' },
  backgroundColor: '$colors$panel',
  left: 0,
  position: 'absolute',
  top: 0,
  width: '95%',
})

const StyledIndicator = styled(NavigationMenuPrimitive.Indicator, {
  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="hidden"]': { animation: `${fadeOut} 200ms ease` },
    '&[data-state="visible"]': { animation: `${fadeIn} 200ms ease` },
    transition: 'width, transform 250ms ease',
  },
  alignItems: 'flex-end',
  display: 'flex',
  height: '$4',
  justifyContent: 'center',
  overflow: 'hidden',
  top: '100%',

  zIndex: '$1',
})

const StyledArrow = styled('div', {
  backgroundColor: '$colors$panel',
  borderTopLeftRadius: '$0',
  boxShadow: `0 2px 10px $colors$shadow`,
  height: 10,
  position: 'relative',
  top: '70%',
  transform: 'rotate(45deg)',
  width: 10,
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
  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="closed"]': { animation: `${scaleOut} 200ms ease` },
    '&[data-state="open"]': { animation: `${scaleIn} 200ms ease` },
    transition: 'width, height, 300ms ease',
  },
  '@media only screen and (min-width: 600px)': {
    width: 'var(--radix-navigation-menu-viewport-width)',
  },
  backgroundColor: 'inherit',
  borderRadius: '$1',
  boxShadow: `0 2px 10px $colors$shadow`,
  height: 'var(--radix-navigation-menu-viewport-height)',
  marginTop: '$4',
  /**
   * @note(radix-ui) driving force behind animation
   * of NavigationMenuPrimitive.Content
   * If Container of this Element is constrained, this will be.
   */
  overflow: 'hidden',
  position: 'relative',

  transformOrigin: 'top center',
  width: '100%',
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
  '@bp1': {
    p: '$4 $4 $5',
  },
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'all 250ms ease',
  },
  columnGap: 10,
  display: 'grid',
  listStyle: 'none',
  margin: 0,
  p: '$3 $3 $4',

  variants: {
    layout: {
      one: {
        '@media only screen and (min-width: 600px)': {
          gridTemplateColumns: '.75fr 1fr',
          width: 500,
        },
      },
      three: {
        '@media only screen and (min-width: 600px)': {
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(4, 1fr)',
          width: 600,
        },
      },
      two: {
        '@media only screen and (min-width: 600px)': {
          gridAutoFlow: 'column',
          gridTemplateRows: 'repeat(3, 1fr)',
          width: 600,
        },
      },
    },
  },
})

const NavigationMenuListItem = styled('li', {
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'all 250ms ease',
  },
  borderRadius: '$2',
  m: '0',
  padding: '$2 0',
})

const NavigationMenuListItemLink = styled(NavigationMenuPrimitive.Link, {
  ...itemStyles,
  // @note(hoverState)
  '&:focus': {
    boxShadow: `0 0 0 1px transparent`,
    position: 'relative',
  },
  '&:hover': { backgroundColor: 'transparent' },
  display: 'block',
  fontSize: '$2',
  lineHeight: 1,
  textDecoration: 'none',
  variants: {
    focus: {
      true: {
        cursor: 'pointer',
        height: '90%',
        listStyle: 'none',
        margin: '$1',
        outline: 'none',
        padding: '$1',
        position: 'relative',
        span: {
          bottom: 0,
          fontSize: '1rem',
          left: '$2',
          position: 'relative',
          right: 0,
          top: '$3',
          userSelect: 'none',
          zIndex: '$1',
          // color: 'yellow',
          // // @todo(design-system) turn this into variant "truncate"
          // maxHeight: '26px',
          // overflow: 'hidden',
          // textOverflow: 'ellipsis',
          // whiteSpace: 'break-spaces',
        },

        width: '90%',
      },
    },
    type: {
      callout: {
        background: `linear-gradient(135deg, $colors$emphasis 0%, $colors$foreground 100%)`,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'flex-end',
        m: 0,
        mb: '$1',
        p: 0,
        pb: '$3',
        width: '100%',
      },
    },
  },
})

const NavigationMenuLinkTitle = styled('p', {
  color: '$colors$primary',
  fontVariationSettings: '"wght" $fontWeights$6',
  fontWeight: '$6',
  lineHeight: 1.2,
  marginBottom: '$2',
})

const NavigationMenuLinkText = styled('p', {
  all: 'unset',
  color: '$colors$secondary',
  fontVariationSettings: '"wght" $fontWeights$4',
  fontWeight: '$4',
  lineHeight: 1.25,
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
  // @note(hoverState)
  background: '$colors$hoverBackground',
  borderRadius: '$2',
  height: '110%',
  // bottom: '-2px',
  left: '-3px',
  position: 'absolute',

  top: '12px',
  variants: {
    color: {
      primary: {
        // background: '$colors$focusBackground',
      },
    },
    type: {
      callout: {
        left: '-9px',
        top: '-9px',
        // bottom: '-7px',
      },
    },
  },
  // right: 0,
  width: '110%',
  zIndex: '$0',
})

const NavigationMenuListItemSelect = styled(motion.div, {
  background: 'transparent',
  border: '2px solid $colors$tertiary',
  borderRadius: '$2',
  // bottom: '-2px',
  // left: '-10px',
  height: '110%',
  left: '-3px',
  position: 'absolute',
  top: '12px',
  // right: 0,
  width: '110%',
  zIndex: '$1',
})

export {
  // @core
  NavigationMenu,
  NavigationMenuArrow,
  NavigationMenuCaret,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuLinkText,
  NavigationMenuLinkTitle,
  NavigationMenuList,
  // @custom
  NavigationMenuListContent,
  NavigationMenuListItem,
  NavigationMenuListItemFocus,
  NavigationMenuListItemLink,
  NavigationMenuListItemSelect,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  NavigationMenuViewportPosition,
}
