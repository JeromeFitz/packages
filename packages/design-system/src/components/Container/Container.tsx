import { styled } from '../../stitches.config'

const Container = styled('div', {
  // Reset
  boxSizing: 'border-box',
  flexShrink: 0,

  // Custom
  ml: 'auto',
  mr: 'auto',
  px: '$5',

  variants: {
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
  defaultVariants: {
    size: '5',
  },
})

export default Container
