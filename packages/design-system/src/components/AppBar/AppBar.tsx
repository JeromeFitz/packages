import { styled } from '../../lib/stitches.config'

const AppBar = styled('div', {
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'opacity 150ms cubic-bezier(0.65, 0, 0.35, 1)',
  },
  boxSizing: 'border-box',
  compoundVariants: [
    {
      color: 'plain',
      css: {
        '&:hover': {
          opacity: '1',
        },
        opacity: '.9',
      },
      glass: 'true',
    },
    {
      color: 'accent',
      css: {
        '&:hover': {
          opacity: '1',
        },
        opacity: '.9',
      },
      glass: 'true',
    },
    {
      color: 'loContrast',
      css: {
        '&:hover': {
          opacity: '1',
        },
        opacity: '.9',
      },
      glass: 'true',
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
    color: 'loContrast',
    size: '1',
  },
  variants: {
    border: {
      true: {
        borderBottom: '1px solid',
      },
    },
    color: {
      accent: {
        backgroundColor: '$colors$brand9',
      },
      loContrast: {
        backgroundColor: '$loContrast',
      },
      plain: {
        backgroundColor: '$gray2',
      },
    },
    glass: {
      true: {
        backdropFilter: 'blur(12px) saturate(160%)',
      },
    },
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
        left: 0,
        position: 'sticky',
        top: 0,
        width: '100%',
      },
    },
  },
  zIndex: '1',
})

export { AppBar }
