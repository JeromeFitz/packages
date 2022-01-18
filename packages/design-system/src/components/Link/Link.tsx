// import { Text } from '../../components'
import { styled } from '../../stitches.config'

const Link = styled('a', {
  alignItems: 'center',
  gap: '$1',
  flexShrink: 0,
  border: 'none',
  outline: 'none',
  textDecorationLine: 'none',
  textUnderlineOffset: '3px',
  textDecorationColor: '$slate4',
  transition: 'color 0.25s, text-decoration-color 0.25s ease-in-out',
  '@media (prefers-reduced-motion)': {
    transition: 'none',
  },
  '& > strong': {
    transition: 'all 0.25s ease-in-out',
    '@media (prefers-reduced-motion)': {
      transition: 'none',
    },
  },
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  lineHeight: 'inherit',
  '@hover': {
    '&:hover': {
      textDecorationLine: 'underline',
    },
  },
  '&:focus': {
    textDecorationLine: 'none',
    borderRadius: '$1',
    boxShadow: '0 0 0 2px $colors$gray1, 0 0 0 3px $colors$hiContrast',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
    textDecorationLine: 'underline',
  },
  // [`& ${Text}`]: {
  //   color: 'inherit',
  // },
  variants: {
    variant: {
      blue: {
        color: '$blue11',
        textDecorationColor: '$blue4',
        '&:focus': {
          outlineColor: '$blue8',
          boxShadow: '0 0 0 2px $colors$gray1, 0 0 0 3px $colors$blue4',
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
        textDecorationColor: '$slate7',
        '@hover': {
          '&:hover': {
            textDecorationColor: '$slate8',
          },
        },
        '&:focus': {
          outlineColor: '$slate8',
        },
      },
      spotify: {
        color: '$spotify-black',
        textDecoration: 'underline',
        textDecorationColor: '$spotify-black',
        '.dark-theme &': {
          color: '$spotify-white',
          textDecorationColor: '$spotify-white',
        },
        '@hover': {
          '&:hover': {
            '& > strong': { color: '$spotify-green' },
            color: '$slate12',
            textDecorationColor: '$spotify-green',
          },
        },
        '&:focus': {
          outlineColor: '$spotify-green',
          boxShadow: '0 0 0 2px $colors$gray1, 0 0 0 3px $colors$spotify-green',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'contrast',
  },
})

export default Link
