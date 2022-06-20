/**
 * https://www.radix-ui.com/docs/primitives/components/toast
 */
import * as ToastPrimitive from '@radix-ui/react-toast'

import { styled, keyframes } from '../../lib/stitches.config'

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

const StyledToast = styled(ToastPrimitive.Root, {
  alignItems: 'center',
  borderRadius: '$2',
  columnGap: '$2',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  padding: '$4',

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'background-color 250ms ease',
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
      '@media (prefers-reduced-motion: no-preference)': {
        transition: 'transform 200ms ease-out',
      },
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out forwards`,
    },
  },

  boxShadow: '$shadows$toast',
  backgroundColor: '$colors$body',
  border: '1px solid $colors$gray11',
  color: '$colors$hiContrast',
  '&:hover': {
    backgroundColor: '$colors$body',
    borderColor: '$colors$gray12',
    // color: '$colors$hiContrast',
  },

  variants: {
    variant: {
      error: {
        backgroundColor: '$colors$errorBackground',
        borderColor: '$colors$errorEmphasis',
        color: '$colors$errorText',
        '&:hover': {
          backgroundColor: '$colors$errorBackgroundHover',
          borderColor: '$colors$errorEmphasisHover',
          color: '$colors$errorTextHover',
        },
      },
      info: {
        backgroundColor: '$colors$infoBackground',
        color: '$colors$infoText',
        '&:hover': {
          backgroundColor: '$colors$infoBackgroundHover',
          borderColor: '$colors$infoEmphasisHover',
          color: '$colors$infoTextHover',
        },
      },
      success: {
        backgroundColor: '$colors$successBackground',
        borderColor: '$colors$successEmphasis',
        color: '$colors$successText',
        '&:hover': {
          backgroundColor: '$colors$successBackgroundHover',
          borderColor: '$colors$successEmphasisHover',
          color: '$colors$successTextHover',
        },
      },
      warning: {
        backgroundColor: '$colors$warningBackground',
        borderColor: '$colors$warningEmphasis',
        color: '$colors$warningText',
        '&:hover': {
          backgroundColor: '$colors$warningBackgroundHover',
          borderColor: '$colors$warningEmphasisHover',
          color: '$colors$warningTextHover',
        },
      },
    },
  },
})

const StyledTitle = styled(ToastPrimitive.Title, {
  color: '$colors$primary',
  fontSize: '0.9375rem',
  fontWeight: 500,
  gridArea: 'title',
  marginBottom: '$1',
})

const StyledDescription = styled(ToastPrimitive.Description, {
  color: '$colors$secondary',
  fontSize: '0.8125rem',
  gridArea: 'description',
  lineHeight: 1.3,
  margin: 0,
})

const StyledAction = styled(ToastPrimitive.Action, {
  gridArea: 'action',
})

const StyledClose = styled(ToastPrimitive.Close, {
  gridArea: 'action',
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
  // [`${StyledToast}:nth-last-child(n + 4)`]: {
  //   opacity: 0,
  //   pointerEvents: 'none',
  // },
})

const ToastProvider = ToastPrimitive.Provider
const ToastViewport = StyledViewport
const Toast = StyledToast
const ToastTitle = StyledTitle
const ToastDescription = StyledDescription
const ToastAction = StyledAction
const ToastClose = StyledClose

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
}
