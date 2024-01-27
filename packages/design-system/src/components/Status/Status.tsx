import { styled } from '../../lib/stitches.config'

const Status = styled('div', {
  borderRadius: '50%',
  defaultVariants: {
    size: '2',
    variant: 'gray',
  },

  flexShrink: 0,
  variants: {
    size: {
      '1': {
        height: 5,
        width: 5,
      },
      '2': {
        height: 9,
        width: 9,
      },
    },
    variant: {
      blue: {
        backgroundColor: '$blue9',
      },
      gray: {
        backgroundColor: '$slate7',
      },
      green: {
        backgroundColor: '$green9',
      },
      red: {
        backgroundColor: '$red9',
      },
      yellow: {
        backgroundColor: '$yellow9',
      },
    },
  },
})

export { Status }
