import { styled } from '../../lib/stitches.config'

const Section = styled('section', {
  '&::after': {
    boxSizing: 'border-box',
    content: '""',
  },
  '&::before': {
    boxSizing: 'border-box',
    content: '""',
  },
  // @reset
  boxSizing: 'border-box',
  defaultVariants: {
    size: '3',
  },

  flexShrink: 0,
  variants: {
    size: {
      '1': {
        py: '$3',
      },
      '2': {
        py: '$5',
      },
      '3': {
        py: '$9',
      },
    },
  },
})

export { Section }
