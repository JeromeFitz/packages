import { styled } from '../../stitches.config'

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

  transition: 'background-color 0.25s ease-in-out',
  '@media (prefers-reduced-motion)': {
    transition: 'none',
  },

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
      gray: {
        backgroundColor: '$slate3',
        '&:hover': { backgroundColor: '$slate4' },
      },
      blue: {
        backgroundColor: '$blue3',
        '&:hover': { backgroundColor: '$blue4' },
      },
      green: {
        backgroundColor: '$green3',
        '&:hover': { backgroundColor: '$green4' },
      },
      red: {
        backgroundColor: '$red3',
        '&:hover': { backgroundColor: '$red4' },
      },
      violet: {
        backgroundColor: '$violet3',
        '&:hover': { backgroundColor: '$violet4' },
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
      variant: 'gray',
      css: {
        borderColor: '$slate6',
      },
    },
    {
      border: 'true',
      variant: 'blue',
      css: {
        borderColor: '$blue11',
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
    variant: 'gray',
  },
})

export { Banner }
