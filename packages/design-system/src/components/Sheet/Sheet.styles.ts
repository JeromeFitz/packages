import * as DialogPrimitive from '@radix-ui/react-dialog'

import { styled, keyframes } from '../../lib/stitches.config'
// import { overlayStyles } from '../Overlay/Overlay.styles'

const delayIn = '575ms'
const delayOut = '500ms'

const fadeIn = keyframes({
  from: { opacity: '0' },
  to: { opacity: '1' },
})

const fadeOut = keyframes({
  from: { opacity: '1' },
  to: { opacity: '0' },
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
  backgroundColor: '$shadow',
  position: 'fixed',
  inset: 0,
  '&[data-state="open"]': {
    animation: `${fadeIn} ${delayIn} cubic-bezier(0.22, 1, 0.36, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${fadeOut} ${delayOut} cubic-bezier(0.22, 1, 0.36, 1)`,
  },
})

// const StyleContentHack = styled('div', {
//   background: '$panel',
//   position: 'fixed',
//   bottom: 0,
//   height: '250px',
// })

const StyledContent = styled(DialogPrimitive.Content, {
  // background: '$panel',
  position: 'fixed',
  top: 0,
  bottom: 0,

  // background: '$panel',
  // borderColor: '$panel',
  // borderWidth: '$2',
  // borderStyle: 'solid',

  // Among other things, prevents text alignment inconsistencies when dialog can't be centered in the viewport evenly.
  // Affects animated and non-animated dialogs alike.
  willChange: 'transform',

  // '&:focus': {
  //   outline: 'none',
  // },
  opacity: 0,
  '&[data-state="open"]': {
    animation: `${slideIn} ${delayIn} cubic-bezier(0.22, 1, 0.36, 1), ${fadeIn} ${delayIn} cubic-bezier(0.22, 1, 0.36, 1)`,
    opacity: 1,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} ${delayOut} cubic-bezier(0.22, 1, 0.36, 1), ${fadeOut} ${delayOut} cubic-bezier(0.22, 1, 0.36, 1)`,
    opacity: 0,
  },

  variants: {
    side: {
      top: {
        $$transformValue: 'translate3d(0,-100%,0)',
        bottom: 'auto',
        borderBottomLeftRadius: '$3',
        borderBottomRightRadius: '$3',
      },
      right: {
        $$transformValue: 'translate3d(100%,0,0)',
        right: 0,
        borderTopLeftRadius: '$3',
        borderBottomLeftRadius: '$3',
      },
      bottom: {
        $$transformValue: 'translate3d(0,100%,0)',
        bottom: 0,
        top: 'auto',
        borderTopLeftRadius: '$3',
        borderTopRightRadius: '$3',
      },
      left: {
        $$transformValue: 'translate3d(-100%,0,0)',
        left: 0,
        borderTopRightRadius: '$3',
        borderBottomRightRadius: '$3',
      },
    },
  },

  defaultVariants: {
    side: 'bottom',
  },
})

const StyledCloseButton = styled(DialogPrimitive.Close, {
  position: 'absolute',
  top: '$2',
  right: '$2',
})

export { StyledOverlay, StyledContent, StyledCloseButton }
