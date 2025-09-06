import * as DialogPrimitive from '@radix-ui/react-dialog'

import { keyframes, styled } from '../../lib/stitches.config'

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
  '&[data-state="closed"]': {
    animation: `${fadeOut} ${delayOut} cubic-bezier(0.22, 1, 0.36, 1)`,
  },
  '&[data-state="open"]': {
    animation: `${fadeIn} ${delayIn} cubic-bezier(0.22, 1, 0.36, 1)`,
  },
  // backgroundColor: '$shadow',
  backgroundColor: '$blackA9',
  inset: 0,

  position: 'fixed',
})

// const StyleContentHack = styled('div', {
//   background: '$panel',
//   position: 'fixed',
//   bottom: 0,
//   height: '250px',
// })

const StyledContent = styled(DialogPrimitive.Content, {
  '&[data-state="closed"]': {
    animation: `${slideOut} ${delayOut} cubic-bezier(0.22, 1, 0.36, 1), ${fadeOut} ${delayOut} cubic-bezier(0.22, 1, 0.36, 1)`,
    opacity: 0,
  },
  '&[data-state="open"]': {
    animation: `${slideIn} ${delayIn} cubic-bezier(0.22, 1, 0.36, 1), ${fadeIn} ${delayIn} cubic-bezier(0.22, 1, 0.36, 1)`,
    opacity: 1,
  },
  bottom: 0,
  defaultVariants: {
    side: 'bottom',
  },
  // },
  opacity: 0,

  // background: '$panel',
  // borderColor: '$panel',
  // borderWidth: '$2',
  // borderStyle: 'solid',

  // Among other things, prevents text alignment inconsistencies when dialog can't be centered in the viewport evenly.
  // background: '$panel',
  position: 'fixed',

  // '&:focus': {
  //   outline: 'none',
  top: 0,
  variants: {
    side: {
      bottom: {
        $$transformValue: 'translate3d(0,100%,0)',
        borderTopLeftRadius: '$3',
        borderTopRightRadius: '$3',
        bottom: 0,
        top: 'auto',
      },
      left: {
        $$transformValue: 'translate3d(-100%,0,0)',
        borderBottomRightRadius: '$3',
        borderTopRightRadius: '$3',
        left: 0,
      },
      right: {
        $$transformValue: 'translate3d(100%,0,0)',
        borderBottomLeftRadius: '$3',
        borderTopLeftRadius: '$3',
        right: 0,
      },
      top: {
        $$transformValue: 'translate3d(0,-100%,0)',
        borderBottomLeftRadius: '$3',
        borderBottomRightRadius: '$3',
        bottom: 'auto',
      },
    },
  },

  width: '100%',

  // Affects animated and non-animated dialogs alike.
  willChange: 'transform',

  zIndex: '$toast',
})

const StyledCloseButton = styled(DialogPrimitive.Close, {
  position: 'absolute',
  right: '$2',
  top: '$2',
})

export { StyledCloseButton, StyledContent, StyledOverlay }
