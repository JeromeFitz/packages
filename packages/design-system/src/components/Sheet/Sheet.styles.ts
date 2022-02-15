import * as DialogPrimitive from '@radix-ui/react-dialog'

import { styled, keyframes } from '../../stitches.config'
// import { overlayStyles } from '../Overlay/Overlay.styles'

// const fadeIn = keyframes({
//   from: { opacity: '0' },
//   to: { opacity: '1' },
// })

// const fadeOut = keyframes({
//   from: { opacity: '1' },
//   to: { opacity: '0' },
// })

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const slideIn = keyframes({
  from: { transform: '$$transformValue' },
  to: { transform: 'translate3d(0,0,0)' },
})

const slideOut = keyframes({
  from: { transform: 'translate3d(0,0,0)' },
  to: { transform: '$$transformValue' },
})

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: '$colors$blackA9',
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
})

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: '$panel',
  boxShadow: '$colors$shadowLight 0 0 38px -10px, $colors$shadowDark 0 0 35px -15px',
  position: 'fixed',
  top: 0,
  bottom: 0,
  width: 250,

  // Among other things, prevents text alignment inconsistencies when dialog can't be centered in the viewport evenly.
  // Affects animated and non-animated dialogs alike.
  willChange: 'transform',

  // '&:focus': {
  //   outline: 'none',
  // },

  '&[data-state="open"]': {
    animation: `${slideIn} 250ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 250ms cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  variants: {
    side: {
      top: {
        $$transformValue: 'translate3d(0,-100%,0)',
        width: '100%',
        height: 300,
        bottom: 'auto',
      },
      right: {
        $$transformValue: 'translate3d(100%,0,0)',
        right: 0,
      },
      bottom: {
        $$transformValue: 'translate3d(0,100%,0)',
        width: '100%',
        height: 300,
        bottom: 0,
        top: 'auto',
      },
      left: {
        $$transformValue: 'translate3d(-100%,0,0)',
        left: 0,
      },
    },
  },

  defaultVariants: {
    side: 'right',
  },
})

const StyledCloseButton = styled(DialogPrimitive.Close, {
  position: 'absolute',
  top: '$2',
  right: '$2',
})

export { StyledOverlay, StyledContent, StyledCloseButton }
