/**
 * https://www.radix-ui.com/primitives/docs/components/toast
 */
import * as ToastPrimitive from '@radix-ui/react-toast'

import { keyframes, styled } from '../../lib/stitches.config'

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
  from: { transform: 'translateX(0),' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

const StyledToast = styled(ToastPrimitive.Root, {
  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="closed"]': {
      animation: `${hide} 150ms ease-in forwards`,
    },
    '&[data-state="open"]': {
      animation: `${slideIn} 250ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-swipe="cancel"]': {
      '@media (prefers-reduced-motion: no-preference)': {
        transition: 'transform 200ms ease-out',
      },
      transform: 'translateX(0)',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 200ms ease-out forwards`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    transition: 'background-color 250ms ease',
  },
  '&:hover': {
    backgroundColor: '$colors$body',
    borderColor: '$colors$gray12',
    // color: '$colors$hiContrast',
  },
  alignItems: 'center',
  backgroundColor: '$colors$body',
  border: '1px solid $colors$gray11',
  borderRadius: '$2',
  boxShadow: '$shadows$toast',

  color: '$colors$hiContrast',

  columnGap: '$3',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  padding: '$5',

  variants: {
    variant: {
      error: {
        '&:hover': {
          backgroundColor: '$colors$errorBackgroundHover',
          borderColor: '$colors$errorEmphasisHover',
          color: '$colors$errorTextHover',
        },
        backgroundColor: '$colors$errorBackground',
        borderColor: '$colors$errorEmphasis',
        color: '$colors$errorText',
      },
      info: {
        '&:hover': {
          backgroundColor: '$colors$infoBackgroundHover',
          borderColor: '$colors$infoEmphasisHover',
          color: '$colors$infoTextHover',
        },
        backgroundColor: '$colors$infoBackground',
        color: '$colors$infoText',
      },
      success: {
        '&:hover': {
          backgroundColor: '$colors$successBackgroundHover',
          borderColor: '$colors$successEmphasisHover',
          color: '$colors$successTextHover',
        },
        backgroundColor: '$colors$successBackground',
        borderColor: '$colors$successEmphasis',
        color: '$colors$successText',
      },
      warning: {
        '&:hover': {
          backgroundColor: '$colors$warningBackgroundHover',
          borderColor: '$colors$warningEmphasisHover',
          color: '$colors$warningTextHover',
        },
        backgroundColor: '$colors$warningBackground',
        borderColor: '$colors$warningEmphasis',
        color: '$colors$warningText',
      },
    },
  },
})

const StyledTitle = styled(ToastPrimitive.Title, {
  color: '$colors$primary',
  fontSize: '$3',
  fontWeight: 500,
  gridArea: 'title',
  marginBottom: '$2',
})

const StyledDescription = styled(ToastPrimitive.Description, {
  color: '$colors$secondary',
  fontSize: '$2',
  gridArea: 'description',
  lineHeight: 1.2,
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
