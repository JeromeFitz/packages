/**
 * https://www.radix-ui.com/docs/primitives/components/toast
 */
import * as ToastPrimitive from '@radix-ui/react-toast'
import { styled, keyframes } from '@stitches/react'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

const StyledViewport = styled(ToastPrimitive.Viewport, {
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  listStyle: 'none',
  margin: 0,
  maxWidth: '100vw',
  padding: VIEWPORT_PADDING,
  position: 'fixed',
  right: 0,
  width: 390,
  zIndex: '$toast',
})

const StyledToast = styled(ToastPrimitive.Root, {
  alignItems: 'center',
  backgroundColor: '$colors$violet3',
  borderRadius: 6,
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  columnGap: 15,
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  padding: 15,

  // '&:hover': {
  //   backgroundColor: '$colors$violet4',
  // },

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in forwards`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out forwards`,
    },
  },

  variants: {
    type: {
      default: {
        border: '1px solid $colors$gray1',
        // backgroundColor: '$gray3',
        color: '$gray12',
        '&:hover': {
          // backgroundColor: '$gray4',
          borderColor: '$gray2',
        },
      },
      error: {
        border: '1px solid $colors$red7',
        // backgroundColor: '$red9',
        color: '$red1',
        '&:hover': {
          // backgroundColor: '$red10',
          borderColor: '$red8',
        },
      },
      info: {
        border: '1px solid $colors$blue7',
        // backgroundColor: '$blue9',
        color: '$blue1',
        '&:hover': {
          // backgroundColor: '$blue10',
          borderColor: '$blue8',
        },
      },
      success: {
        border: '1px solid $colors$green7',
        // backgroundColor: '$green9',
        color: '$green1',
        '&:hover': {
          // backgroundColor: '$green10',
          borderColor: '$green8',
        },
      },
      warning: {
        border: '1px solid $colors$orange7',
        // backgroundColor: '$orange9',
        color: '$orange1',
        '&:hover': {
          // backgroundColor: '$orange10',
          borderColor: '$orange8',
        },
      },
    },
  },
})

const StyledTitle = styled(ToastPrimitive.Title, {
  color: '$colors$violet12',
  fontSize: 15,
  fontWeight: 500,
  gridArea: 'title',
  marginBottom: 5,
})

const StyledDescription = styled(ToastPrimitive.Description, {
  color: '$colors$violet11',
  fontSize: 13,
  gridArea: 'description',
  lineHeight: 1.3,
  margin: 0,
})

const StyledAction = styled(ToastPrimitive.Action, {
  gridArea: 'action',
  variants: {
    type: {
      default: {},
      close: {
        position: 'relative',
        top: '-0.65rem',
      },
    },
  },
})

const ToastProvider = ToastPrimitive.Provider
const ToastViewport = StyledViewport
const Toast = StyledToast
const ToastTitle = StyledTitle
const ToastDescription = StyledDescription
const ToastAction = StyledAction
const ToastClose = ToastPrimitive.Close

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
}
