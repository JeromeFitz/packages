/**
 * @ref https://github.com/radix-ui/primitives/pull/401
 */
import * as React from 'react'
import { useHoverDirty, useMeasure, useMethods } from 'react-use'

import { darkTheme, styled } from '../../stitches.config'

import { ARIA_LIVE_BY_TYPE, ROLES_BY_TYPE } from './Toast'

// const slideDown = keyframes({
//   from: { height: 0 },
//   to: { height: 'var(--radix-accordion-content-height)' },
// })

// const slideUp = keyframes({
//   from: { height: 'var(--radix-accordion-content-height)' },
//   to: { height: 0 },
// })

const ToastItemContainer = styled('div', {
  position: 'absolute',
  bottom: '0',
  right: '0',
  boxShadow: `0 5px 10px $colors$blackA7`,
  [`.${darkTheme} &`]: {
    boxShadow: `0 5px 10px $colors$whiteA5`,
  },
  borderRadius: '5px',
  // padding: '24px',
  // opacity: '0',
  // transform: 'translate3d(0,100%,150px) scale(1)',
  transition: 'all 0.4s ease',
  // zIndex: '5000',
  //
  // @todo(makedynamic)
  // maxHeight: '98px',
  // opacity: 1,
  // transform: 'none',
  //
  //
  '@hover': {
    '&::after': {
      content: '""',
      position: 'absolute',
      left: '0',
      right: '0',
      top: 'calc(100% + 1px)',
      width: '100%',
      height: '20px',
      background: 'transparent',
    },
  },

  variants: {
    type: {
      error: {
        border: '1px solid $colors$red7',
        backgroundColor: '$red9',
        color: '$red12',
        '&:hover': {
          backgroundColor: '$red10',
          borderColor: '$red8',
        },
      },
      info: {
        border: '1px solid $colors$blue7',
        backgroundColor: '$blue9',
        color: '$blue12',
        '&:hover': {
          backgroundColor: '$blue10',
          borderColor: '$blue8',
        },
      },
      success: {
        border: '1px solid $colors$green7',
        backgroundColor: '$green9',
        color: '$green12',
        '&:hover': {
          backgroundColor: '$green10',
          borderColor: '$green8',
        },
      },
      warning: {
        border: '1px solid $colors$orange7',
        backgroundColor: '$orange9',
        color: '$orange12',
        '&:hover': {
          backgroundColor: '$orange10',
          borderColor: '$orange8',
        },
      },
      // generic: {
      //   backgroundColor: '$slate9',
      //   color: '$slate12',
      //   '&:hover': {
      //     backgroundColor: '$slate10',
      //   },
      // },
      // loading: {
      //   backgroundColor: '$purple9',
      //   color: '$purple12',
      //   '&:hover': {
      //     backgroundColor: '$purple10',
      //   },
      // },
    },
  },
})

const ToastItemMessageContainer = styled('div', {
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '.875rem',
  display: 'flex',
  transition: 'all 0.4s ease',
  padding: '24px',
  width: '90vh',
  maxWidth: '325px',
  '@bp1': {
    minWidth: '420px',
    width: '420px',
  },
})

const ToastItemMessage = styled('div', {
  marginTop: '-1px',
  width: '100%',
  opacity: '1',
  height: '100%',
  transition: 'opacity .4s ease',
  wordBreak: 'break-word',
})

const ToastContainerDiv = styled('div', {
  position: 'fixed',
  '$$offset-bottom': '0px',
  bottom: 'calc($space$5 + $$offset-bottom)',
  right: '$space$5',
  // zIndex: 1,
  transition: 'transform 0.4s ease,bottom 0.4s ease',
  '&:hover': {
    transform: 'translate3d(0,-10px,0)',
  },
  width: '90vh',
  maxWidth: '325px',
  '@bp1': {
    minWidth: '420px',
    width: '420px',
  },
})

// @todo(complexity) 11
// eslint-disable-next-line complexity
const Toast = ({ count, idx, isHovered, methods, state, toast }) => {
  const reverseIndex = count - idx - 1
  const isActiveToast = idx === count - 1

  const [refMeasure, refProps] = useMeasure()

  const messageProps = {
    'aria-live': ARIA_LIVE_BY_TYPE[toast.type],
    role: ROLES_BY_TYPE[toast.type],
  }

  const baseScale = 100
  const scale = (baseScale - 5 * reverseIndex) / 100

  React.useEffect(() => {
    if (reverseIndex < 2) {
      methods[`set${reverseIndex}`](refProps.height)
    }
    return () => {
      if (reverseIndex < 2) {
        methods[`set${reverseIndex}`](0)
      }
    }
  }, [methods, reverseIndex, refProps.height, toast.id])

  const transformInit = `translate3d(0px, calc(-${48}px + 100% + -${
    isActiveToast ? refProps.height : parseInt(state[0]) + 24 * reverseIndex
  }px), -${reverseIndex}px) scale(${scale})`

  const transformHover = isActiveToast
    ? 'none'
    : `translate3d(0px, -${
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        parseInt(state[0]) + (reverseIndex === 1 ? 64 : state[1] + 64 * 2)
      }px, -${reverseIndex}px) scale(1)!important`

  /* eslint-disable @typescript-eslint/restrict-plus-operands */
  return (
    <ToastItemContainer
      data-toast=""
      css={{
        maxHeight:
          isActiveToast || isHovered
            ? `${refProps.height + 64}px!important`
            : `64px`,
        transform: isHovered ? transformHover : transformInit,
        opacity: reverseIndex < 3 ? `1!important` : `0!important`,
        display: reverseIndex < 3 ? `block` : `none!important`,
        pointerEvents: reverseIndex < 3 ? 'inherit' : 'none',
        // zIndex: 5000 + parseInt(idx),
        overflow: 'hidden',
      }}
      type={toast.type}
    >
      <ToastItemMessageContainer ref={isActiveToast ? refMeasure : null} css={{}}>
        <ToastItemMessage {...messageProps}>{toast.message}</ToastItemMessage>
      </ToastItemMessageContainer>
    </ToastItemContainer>
  )
}

const initialState = {
  0: 0,
  1: 0,
}
function createMethods(state) {
  return {
    reset() {
      return initialState
    },
    set0(h) {
      return { ...state, 0: h }
    },
    set1(h) {
      return { ...state, 1: h }
    },
  }
}

const ToastContainer = ({ toasts }) => {
  const count = toasts.length
  const refHover = React.useRef(null)
  const isHovered = useHoverDirty(refHover)
  const [state, methods] = useMethods(createMethods, initialState)

  // console.dir(`--`)
  // console.dir(`0: ${state[0]}`)
  // console.dir(`1: ${state[1]}`)

  return (
    <>
      <ToastContainerDiv ref={refHover}>
        {toasts.map((toast, toastIndex) => {
          return (
            <Toast
              count={count}
              key={`t-${toastIndex}-${toast.id}`}
              methods={methods}
              isHovered={isHovered}
              idx={toastIndex}
              state={state}
              toast={toast}
            />
          )
        })}
      </ToastContainerDiv>
    </>
  )
}

export default ToastContainer
