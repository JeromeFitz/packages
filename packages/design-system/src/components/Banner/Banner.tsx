import { styled } from '../../lib/stitches.config'

const Banner = styled('div', {
  // @reset
  boxSizing: 'border-box',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  alignItems: 'center',
  display: 'flex',
  gap: '$3',
  justifyContent: 'center',

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'background-color 0.25s ease-in-out',
  },

  backgroundColor: '$colors$brand3',
  '&:hover': { backgroundColor: '$colors$brand4' },

  variants: {
    size: {
      '1': {
        py: '$1',
        px: '$4',
      },
    },
    variant: {
      loContrast: {
        backgroundColor: '$loContrast',
        // @todo(design) make a choice here
        // '&:hover': { backgroundColor: '$loContrast' },
      },
    },
    rounded: {
      true: {
        borderRadius: '$pill',
      },
    },
    border: {
      true: {
        borderRadius: '$pill',
      },
    },
  },
  compoundVariants: [
    {
      border: 'true',
      variant: 'brand',
      css: {
        borderColor: '$colors$brand11',
      },
    },
    {
      border: 'true',
      variant: 'loContrast',
      css: {
        borderColor: '$slate6',
      },
    },
  ],
  defaultVariants: {
    size: '1',
  },
})

export { Banner }
