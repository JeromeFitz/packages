import { styled } from '../../lib/stitches.config'

const Container = styled('div', {
  // @reset
  boxSizing: 'border-box',
  defaultVariants: {
    size: '5',
  },

  flexShrink: 0,
  // @custom
  ml: 'auto',
  mr: 'auto',

  px: '$5',
  variants: {
    breakout: {
      true: {
        left: 'calc(-50vw + 50%)',
        position: 'relative',
        px: '0',
        width: '100vw',
      },
    },
    size: {
      '1': {
        maxWidth: '430px',
      },
      '2': {
        maxWidth: '715px',
      },
      '3': {
        maxWidth: '896px',
      },
      '4': {
        maxWidth: '1145px',
      },
      '5': {
        maxWidth: 'none',
      },
    },
  },
})

export { Container }
