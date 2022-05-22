import { styled } from '../../lib/stitches.config'

const AppBar = styled('div', {
  boxSizing: 'border-box',
  zIndex: '1',
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'opacity 150ms cubic-bezier(0.65, 0, 0.35, 1)',
  },

  variants: {
    size: {
      1: {
        py: '$1',
      },
      2: {
        py: '$2',
      },
      3: {
        py: '$3',
      },
    },
    sticky: {
      true: {
        position: 'sticky',
        width: '100%',
        top: 0,
        left: 0,
      },
    },
    glass: {
      true: {
        backdropFilter: 'blur(12px) saturate(160%)',
      },
    },
    border: {
      true: {
        borderBottom: '1px solid',
      },
    },
    color: {
      loContrast: {
        backgroundColor: '$loContrast',
      },
      plain: {
        backgroundColor: '$gray2',
      },
      accent: {
        backgroundColor: '$colors$brand9',
      },
    },
  },
  compoundVariants: [
    {
      glass: 'true',
      color: 'plain',
      css: {
        opacity: '.9',
        '&:hover': {
          opacity: '1',
        },
      },
    },
    {
      glass: 'true',
      color: 'accent',
      css: {
        opacity: '.9',
        '&:hover': {
          opacity: '1',
        },
      },
    },
    {
      glass: 'true',
      color: 'loContrast',
      css: {
        opacity: '.9',
        '&:hover': {
          opacity: '1',
        },
      },
    },
    {
      border: 'true',
      color: 'plain',
      css: {
        borderColor: '$slate6',
      },
    },
    {
      border: 'true',
      color: 'accent',
      css: {
        borderColor: '$colors$brand11',
      },
    },
    {
      border: 'true',
      color: 'loContrast',
      css: {
        borderColor: '$slate6',
      },
    },
  ],
  defaultVariants: {
    size: '1',
    color: 'loContrast',
  },
})

export { AppBar }
