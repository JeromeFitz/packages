import { Command } from 'cmdk'

import { keyframes, styled } from '../../lib/stitches.config'
import { Box } from '../Box'

const loadingKeyframe = keyframes({
  '0%': { opacity: 0, transform: 'translateX(0)' },
  '50%': { opacity: 1, transform: 'translateX(100%)' },
  '100%': { opacity: 0, transform: 'translateX(0)' },
})
const shineKeyframe = keyframes({
  to: { backgroundPosition: '200% center', opacity: 0 },
})
const borderKeyframe = keyframes({
  to: { boxShadow: '0 0 0 1px $colors$gray6' },
})
const showTopShineKeyframe = keyframes({
  to: { opacity: 1 },
})

const StyledCommand = styled(Command, {
  '--cmdk-shadow': '0 16px 70px rgb(0 0 0 / 20%)',
  background: '$gray1',
  border: '0',
  borderRadius: '12px',
  boxShadow: 'var(--cmdk-shadow)',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: '$sans',
  justifyContent: 'flex-start',
  minWidth: '640px',
  padding: '$4',
  position: 'relative',
  transition: 'transform 100ms ease',
  width: '100%',

  '&:after': {
    content: '""',
    background: `
      linear-gradient(
        to right,
        $colors$gray6 20%,
        $colors$gray6 40%,
        $colors$gray10 50%,
        $colors$gray10 55%,
        $colors$gray6 70%,
        $colors$gray6 100%
      )`,
    zIndex: '-1',
    position: 'absolute',
    borderRadius: '12px',
    top: '-1px',
    left: '-1px',
    width: 'calc(100% + 2px)',
    height: 'calc(100% + 2px)',
    animation: `${shineKeyframe} 2s ease forwards 0.1s`,
    backgroundSize: '200% auto',
  },

  '&:before': {
    content: '""',
    zIndex: '-1',
    position: 'absolute',
    borderRadius: '12px',
    top: '-1px',
    left: '-1px',
    width: 'calc(100% + 2px)',
    height: 'calc(100% + 2px)',
    boxShadow: '0 0 0 1px transparent',
    animation: `${borderKeyframe} 1s linear forwards 0.5s`,
  },
})
const StyledCommandInput = styled(Command.Input, {
  background: 'transparent',
  border: 'none',
  borderRadius: '$0',
  color: '$gray12',
  fontFamily: '$sans',
  outline: 'none',
  padding: '$4',
  '&::placeholder': {
    color: '$gray9',
  },
  // ref: https://twitter.com/joshwcomeau/status/1379782931116351490?s=12
  fontSize: '16px',
  '@bp1': {
    fontSize: '$4',
  },
})
const StyledCommandTopShine = styled(Box, {
  background: `
    linear-gradient(
      90deg,
      rgba(56, 189, 248, 0),
      $colors$gray5 20%,
      $colors$gray9 67.19%,
      rgba(236, 72, 153, 0)
    )`,
  height: '1px',
  position: 'absolute',
  top: '-1px',
  width: '100%',
  zIndex: '-1',
  opacity: '0',
  animation: `${showTopShineKeyframe} 0.1s ease forwards 0.2s`,
})
const StyledCommandBadge = styled(Box, {
  alignItems: 'center',
  background: '$grayA3',
  borderRadius: '4px',
  color: '$grayA11',
  display: 'inline-flex',
  fontSize: '12px',
  fontWeight: '500',
  height: '20px',
  margin: '4px 0 4px 4px',
  padding: '0 8px',
  textTransform: 'capitalize',
  userSelect: 'none',
})
const StyledCommandLoader = styled('hr', {
  '--loader-color': '$gray9',
  border: '0',
  width: '100%',
  left: '0',
  height: '1px',
  background: '$gray6',
  position: 'relative',
  overflow: 'visible',
  display: 'block',
  marginTop: '12px',
  marginBottom: '12px',

  '&:after:': {
    content: '""',
    width: '50%',
    height: '1px',
    position: 'absolute',
    background: `
    linear-gradient(
      90deg,
      transparent 0%,
      var(--loader-color) 50%,
      transparent 100%
    )`,
    top: '-1px',
    opacity: '0',
    animationDuration: '1.5s',
    animationDelay: '1s',
    animationTimingFunction: 'ease',
    animationName: `${loadingKeyframe}`,
  },
})
const StyledCommandList = styled(Command.List, {
  height: 'min(330px, calc(var(--cmdk-list-height)))',
  maxHeight: '400px',
  overflow: 'auto',
  overscrollBehavior: 'contain',
  transition: '100ms ease',
  transitionProperty: 'height',
})
const StyledCommandSeparator = styled(Command.Separator, {
  height: '1px',
  width: '100%',
  background: '$gray5',
  margin: '4px 0',
})
const StyledCommandGroup = styled(Command.Group, {
  // '*:not([hidden]) + [cmdk-group]': {
  marginTop: '1px',
  // },
  '[cmdk-group-heading]': {
    userSelect: 'none',
    fontSize: '12px',
    color: '$gray11',
    padding: '0 8px',
    display: 'flex',
    marginBottom: '8px',
    flexDirection: 'column',
    justifyItems: 'flex-end',
    width: '100%',
  },
})
const StyledCommandEmpty = styled(Command.Empty, {
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '48px',
  whiteSpace: 'pre-wrap',
  color: '$gray11',
})

const StyledCommandItem = styled(Command.Item, {
  contentVisibility: 'auto',

  cursor: 'pointer',
  height: '48px',
  borderRadius: '8px',
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '0 16px',
  color: '$gray11',
  userSelect: 'none',
  willChange: 'background, color',
  transition: 'all 150ms ease',
  transitionProperty: 'none',

  '&[aria-selected="true"]': {
    background: '$grayA3',
    color: '$gray12',
  },

  '&[aria-disabled="true"]': {
    color: '$gray8',
    cursor: 'not-allowed',
  },

  '&:active': {
    transitionProperty: 'background',
    background: '$gray4',
  },

  '& + [cmdk-item]': {
    marginTop: '4px',
  },

  svg: {
    width: '18px',
    height: '18px',
  },
})
const StyledCommandShortCuts = styled(Box, {
  display: 'flex',
  marginLeft: 'auto',
  gap: '8px',

  kbd: {
    fontFamily: '$sans',
    fontSize: '12px',
    minWidth: '20px',
    padding: '4px',
    height: '20px',
    borderRadius: '4px',
    color: '$gray11',
    background: '$gray4',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
  },
})

// @note(cmdk) this goes away when radix is upgraded in cmdk
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const _Command: any = StyledCommand
const CommandInput = StyledCommandInput
const CommandTopShine = StyledCommandTopShine
const CommandBadge = StyledCommandBadge
const CommandLoader = StyledCommandLoader
const CommandList = StyledCommandList
const CommandSeparator = StyledCommandSeparator
const CommandGroup = StyledCommandGroup
const CommandEmpty = StyledCommandEmpty
const CommandShortCuts = StyledCommandShortCuts
const CommandItem = StyledCommandItem

export {
  _Command as Command,
  CommandInput,
  CommandTopShine,
  CommandBadge,
  CommandLoader,
  CommandList,
  CommandSeparator,
  CommandGroup,
  CommandEmpty,
  CommandShortCuts,
  CommandItem,
}
