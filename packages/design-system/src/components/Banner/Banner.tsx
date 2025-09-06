import { styled } from '../../lib/stitches.config'

const Banner = styled('div', {
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'background-color 0.25s ease-in-out',
  },
  '&::after': {
    boxSizing: 'border-box',
  },
  '&::before': {
    boxSizing: 'border-box',
  },
  '&:hover': { backgroundColor: '$colors$brand4' },
  alignItems: 'center',
  backgroundColor: '$colors$brand3',
  // @reset
  boxSizing: 'border-box',

  compoundVariants: [
    {
      border: 'true',
      css: {
        borderColor: '$colors$brand11',
      },
      variant: 'brand',
    },
    {
      border: 'true',
      css: {
        borderColor: '$slate6',
      },
      variant: 'loContrast',
    },
  ],

  defaultVariants: {
    size: '1',
  },
  display: 'flex',

  gap: '$3',
  justifyContent: 'center',
  variants: {
    border: {
      true: {
        borderRadius: '$pill',
      },
    },
    rounded: {
      true: {
        borderRadius: '$pill',
      },
    },
    size: {
      '1': {
        px: '$4',
        py: '$1',
      },
    },
    variant: {
      loContrast: {
        backgroundColor: '$loContrast',
        // @todo(design) make a choice here
        // '&:hover': { backgroundColor: '$loContrast' },
      },
    },
  },
})

export { Banner }
