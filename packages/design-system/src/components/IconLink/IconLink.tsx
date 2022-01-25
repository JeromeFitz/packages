import { styled } from '../../stitches.config'

const IconLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  textDecorationLine: 'none',
  textUnderlineOffset: '3px',
  textDecorationColor: '$slate4',
  color: 'inherit',
  transition: 'color 0.25s, text-decoration-color 0.25s ease-in-out',
  '@media (prefers-reduced-motion)': {
    transition: 'none',
  },
  borderRadius: '$1',
  outline: 0,
  padding: '0 $1',
  margin: '0 -$1',
  '& + &': {
    marginTop: '$2',
  },
  '@hover': {
    '&:hover': {
      textDecorationLine: 'underline',
    },
  },
  '&:focus': {
    boxShadow: '0 0 0 1px',
    textDecoration: 'none',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
    textDecorationLine: 'underline',
  },
  variants: {
    variant: {
      blue: {
        color: '$blue11',
        textDecorationColor: '$blue4',
        '&:focus': {
          outlineColor: '$blue8',
        },
      },
      subtle: {
        color: '$slate11',
        textDecorationColor: '$slate4',
        '&:focus': {
          outlineColor: '$slate8',
        },
      },
      contrast: {
        color: '$hiContrast',
        textDecoration: 'underline',
        textDecorationColor: '$slate4',
        '@hover': {
          '&:hover': {
            textDecorationColor: '$slate7',
          },
        },
        '&:focus': {
          outlineColor: '$slate8',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'contrast',
  },
})

export { IconLink }
