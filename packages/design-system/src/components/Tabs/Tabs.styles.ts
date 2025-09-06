import * as TabsPrimitive from '@radix-ui/react-tabs'

import { styled } from '../../lib/stitches.config'

const Tabs = styled(TabsPrimitive.Root, {
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
  },
  display: 'flex',
})

const TabsTrigger = styled(TabsPrimitive.Trigger, {
  '@hover': {
    '&:hover': {
      color: '$hiContrast',
    },
  },
  '&[data-orientation="vertical"]': {
    '&[data-state="active"]': {
      borderBottomColor: '$slate6',
      borderRightColor: 'transparent',
    },
    borderBottomColor: 'transparent',
    borderBottomLeftRadius: '$2',
    borderTopRightRadius: 0,

    justifyContent: 'flex-start',
  },
  '&[data-state="active"]': {
    borderBottomColor: 'transparent',
    borderColor: '$slate6',
    color: '$hiContrast',
  },
  alignItems: 'center',
  border: '1px solid transparent',
  borderTopLeftRadius: '$2',
  borderTopRightRadius: '$2',
  color: '$slate11',
  display: 'inline-flex',
  flexShrink: 0,
  fontSize: '$1',
  height: '$5',
  justifyContent: 'center',
  lineHeight: 1,
  outline: 'none',

  px: '$2',

  userSelect: 'none',

  zIndex: '10',
})

const TabsContent = styled(TabsPrimitive.Content, {
  '&:focus': {
    boxShadow: 'inset 0 0 0 1px $slate8, 0 0 0 1px $slate8',
    outline: 'none',
  },
  flexGrow: 1,
})

const StyledTabsList = styled(TabsPrimitive.List, {
  '&:focus': {
    boxShadow: 'inset 0 0 0 1px $slate8, 0 0 0 1px $slate8',
    outline: 'none',
  },
  '&[data-orientation="vertical"]': {
    boxShadow: 'inset -1px 0 0 $slate6',
    flexDirection: 'column',
  },
  display: 'flex',
  flexShrink: 0,
})

export { StyledTabsList, Tabs, TabsContent, TabsTrigger }
