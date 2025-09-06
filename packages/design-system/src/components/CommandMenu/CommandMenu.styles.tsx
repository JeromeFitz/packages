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
  '@bp1': {
    width: '100%',
  },
  '&:after': {
    animation: `${shineKeyframe} 2s ease forwards 0.1s`,
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
    backgroundSize: '200% auto',
    borderRadius: '$3',
    content: '""',
    height: 'calc(100% + 2px)',
    left: '-1px',
    padding: '-$3',
    position: 'absolute',
    top: '-1px',
    width: 'calc(100% + 2px)',
    zIndex: '-1',
  },
  '&:before': {
    animation: `${borderKeyframe} 1s linear forwards 0.5s`,
    borderRadius: '$3',
    boxShadow: '0 0 0 1px transparent',
    content: '""',
    height: 'calc(100% + 1px)',
    left: '0px',
    padding: '-$3',
    position: 'absolute',
    top: '-1px',
    width: 'calc(100% + 1px)',
    zIndex: '-1',
  },
  background: '$gray1',
  border: '0',
  borderRadius: '$3',
  boxShadow: 'var(--cmdk-shadow)',
  display: 'flex',
  flexDirection: 'column',
  fontFamily: '$sans',
  height: '100%',
  justifyContent: 'flex-start',
  padding: '$4 $2',

  position: 'relative',

  top: 0,

  transition: 'transform 100ms ease',
})
const StyledCommandInput = styled(Command.Input, {
  '@bp1': {
    fontSize: '$4',
  },
  '&::placeholder': {
    color: '$gray9',
  },
  background: 'transparent',
  border: 'none',
  borderRadius: '$0',
  color: '$gray12',
  fontFamily: '$sans',
  // ref: https://twitter.com/joshwcomeau/status/1379782931116351490?s=12
  fontSize: '16px',
  fontWeight: '$7',
  outline: 'none',
  padding: '$4 $4 $2',
})
const StyledCommandTopShine = styled(Box, {
  animation: `${showTopShineKeyframe} 0.1s ease forwards 0.2s`,
  background: `
    linear-gradient(
      90deg,
      rgba(56, 189, 248, 0),
      $colors$gray5 20%,
      $colors$gray11 67.19%,
      rgba(236, 72, 153, 0)
    )`,
  height: '1px',
  opacity: '0',
  position: 'absolute',
  top: '-1px',
  width: '100%',
  zIndex: '-1',
})
const StyledCommandBadge = styled(Box, {
  alignItems: 'center',
  background: '$grayA3',
  borderRadius: '$3',
  color: '$grayA11',
  display: 'inline-flex',
  fontSize: '$2',
  fontWeight: '$6',
  height: '20px',
  margin: '4px 0 4px 4px',
  padding: '0 8px',
  textTransform: 'capitalize',
  userSelect: 'none',
})
const StyledCommandLoader = styled('hr', {
  '--loader-color': '$colors$gray12',
  '&:after': {
    animationDelay: '0.9s',
    animationDuration: '1.25s',
    animationName: `${loadingKeyframe}`,
    animationTimingFunction: 'ease',
    background: `
    linear-gradient(
      90deg,
      transparent 0%,
      var(--loader-color) 50%,
      transparent 100%
    )`,
    content: '""',
    height: '1px',
    opacity: '0',
    position: 'absolute',
    top: '0px',
    width: '50%',
  },
  background: '$gray6',
  border: '0',
  display: 'block',
  height: '1px',
  left: '0',
  marginBottom: '12px',
  marginTop: '12px',
  overflow: 'visible',
  position: 'relative',

  width: '100%',
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
  background: '$gray5',
  height: '1px',
  margin: '4px 0',
  width: '100%',
})
const StyledCommandGroup = styled(Command.Group, {
  // },
  '[cmdk-group-heading]': {
    color: '$gray11',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '$2',
    fontWeight: '$7',
    justifyItems: 'flex-end',
    marginBottom: '8px',
    padding: '2px 8px',
    userSelect: 'none',
    width: '100%',
  },
  // '*:not([hidden]) + [cmdk-group]': {
  marginTop: '1px',
})
const StyledCommandEmpty = styled(Command.Empty, {
  alignItems: 'center',
  color: '$gray11',
  display: 'flex',
  fontSize: '$4',
  fontWeight: '$5',
  height: '$7',
  justifyContent: 'center',
  whiteSpace: 'pre-wrap',
})

const StyledCommandItem = styled(Command.Item, {
  '& + [cmdk-item]': {
    marginTop: '4px',
  },

  '&:active': {
    background: '$gray4',
    transitionProperty: 'background',
  },
  '&[aria-disabled="true"]': {
    color: '$gray8',
    cursor: 'not-allowed',
  },
  '&[aria-selected="true"]': {
    background: '$grayA3',
    color: '$gray12',
  },
  alignItems: 'center',
  borderRadius: '$2',
  color: '$gray11',
  contentVisibility: 'auto',
  cursor: 'pointer',
  display: 'flex',
  fontSize: '$3',
  gap: '$2',
  height: '$7',
  padding: '0 16px',

  svg: {
    height: '18px',
    width: '18px',
  },

  transition: 'all 150ms ease',

  transitionProperty: 'none',

  userSelect: 'none',

  willChange: 'background, color',
})
const StyledCommandShortCuts = styled(Box, {
  display: 'flex',
  gap: '8px',
  kbd: {
    alignItems: 'center',
    background: '$gray4',
    borderRadius: '4px',
    color: '$gray11',
    display: 'inline-flex',
    fontFamily: '$sans',
    fontSize: '12px',
    height: '20px',
    justifyContent: 'center',
    minWidth: '20px',
    padding: '4px',
    textTransform: 'uppercase',
  },

  marginLeft: 'auto',
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
  CommandBadge,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandLoader,
  CommandSeparator,
  CommandShortCuts,
  CommandTopShine,
}
