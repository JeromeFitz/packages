import { darkTheme, styled } from '@ds/stitches.config'

const Toast = styled('div', {
  alignItems: 'center',
  display: 'flex',
  fontSize: '0.875rem',
  justifyContent: 'space-between',
  maxWidth: '100%',
  transition: 'all 0.4s ease',
  // width: '420px',
})

const Message = styled('div', {
  height: '100%',
  marginTop: '-1px',
  opacity: '1',
  transition: 'opacity 0.4s ease',
  width: '100%',
  wordBreak: 'break-word',
  variants: {
    action: {
      true: { width: '70%' },
    },
    cancel: {
      true: { marginRight: '$2' },
    },
  },
})

const ToastContainer = styled('div', {
  background: '$loContrast',
  borderRadius: '$2',
  bottom: '0',

  color: '$hiContrast',
  opacity: '0',
  padding: '$4',
  position: 'absolute',
  right: '0',
  transform: 'translate3d(0, 100%, 150px) scale(1)',
  transition: 'all 0.4s ease',
  zIndex: '5000',

  width: '90vw',
  '@bp1': {
    maxWidth: '500px',
  },

  boxShadow: `0 5px 10px $colors$blackA8`,
  [`.${darkTheme} &`]: {
    boxShadow: `0 5px 10px $colors$whiteA4`,
  },

  variants: {
    type: {
      default: {
        border: '1px solid $colors$gray1',
        backgroundColor: '$gray3',
        color: '$gray12',
        '&:hover': {
          backgroundColor: '$gray4',
          borderColor: '$gray2',
        },
      },
      error: {
        border: '1px solid $colors$red7',
        backgroundColor: '$red9',
        color: '$red1',
        '&:hover': {
          backgroundColor: '$red10',
          borderColor: '$red8',
        },
      },
      info: {
        border: '1px solid $colors$blue7',
        backgroundColor: '$blue9',
        color: '$blue1',
        '&:hover': {
          backgroundColor: '$blue10',
          borderColor: '$blue8',
        },
      },
      success: {
        border: '1px solid $colors$green7',
        backgroundColor: '$green9',
        color: '$green1',
        '&:hover': {
          backgroundColor: '$green10',
          borderColor: '$green8',
        },
      },
      warning: {
        border: '1px solid $colors$orange7',
        backgroundColor: '$orange9',
        color: '$orange1',
        '&:hover': {
          backgroundColor: '$orange10',
          borderColor: '$orange8',
        },
      },
      /**
       * @note note sure what to do with these
       */
      generic: {
        border: '1px solid $colors$gray1',
        backgroundColor: '$gray3',
        color: '$gray12',
        '&:hover': {
          backgroundColor: '$gray4',
          borderColor: '$gray2',
        },
      },
      loading: {
        border: '1px solid $colors$gray1',
        backgroundColor: '$gray3',
        color: '$gray12',
        '&:hover': {
          backgroundColor: '$gray4',
          borderColor: '$gray2',
        },
      },
    },

    visible: {
      true: { opacity: '1', transform: 'none' },
    },
  },
  defaultVariants: {
    type: 'default',
  },
})

const Toaster = styled('div', {
  '$$offset-bottom': '0px',
  bottom: 'calc($space$4 + $$offset-bottom)',
  position: 'fixed',
  right: '$space$4',
  transition: 'transform 0.4s ease, bottom 0.4s ease',
  zIndex: '5000',

  width: '90vh',
  maxWidth: '325px',
  '@bp1': {
    minWidth: '420px',
    width: '100%',
  },

  [`${ToastContainer}:not(:last-child) ${Toast} ${Message}`]: {
    opacity: 0,
  },

  [`${ToastContainer}:nth-last-child(n + 4)`]: {
    opacity: 0,
    pointerEvents: 'none',
  },

  '@hover': {
    [`&:hover ${ToastContainer} ${Toast} ${Message}`]: { opacity: 1 },
    [`&:hover ${ToastContainer}::after`]: {
      background: 'transparent',
      content: `''`,
      height: '20px',
      left: '0',
      position: 'absolute',
      right: '0',
      top: 'calc(100% + 1px)',
      width: '100%',
    },
  },

  variants: {
    align: {
      center: {
        right: 'calc(50% - 210px)',
      },
    },
    multiple: {
      true: {
        '@hover': {
          '&:hover': {
            transform: 'translate3d(0, -10px, 0)',
          },
        },
      },
    },
  },
})

export { Message, Toast, Toaster, ToastContainer }
