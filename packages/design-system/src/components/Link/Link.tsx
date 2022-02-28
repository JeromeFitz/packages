import { styled } from '../../stitches.config'
import { Text } from '../Text'

const Link = styled('a', {
  alignItems: 'center',
  textDecorationColor: '$slate4',
  textDecorationLine: 'none',
  textUnderlineOffset: '3px',
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'color 0.25s, text-decoration-color 0.25s ease-in-out',
  },
  [`& ${Text}`]: {
    color: 'inherit',
  },
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
      subtle: {
        color: '$slate11',
        textDecorationColor: '$slate4',
        '&:focus': {
          outlineColor: '$slate8',
        },
      },
    },
    type: {
      text: {
        border: 'none',
        flexShrink: 0,
        gap: '$1',
        lineHeight: 'inherit',
        '@hover': {
          '&:hover': {
            textDecorationLine: 'underline',
          },
        },
        outline: 'none',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
        '& > strong': {
          '@media (prefers-reduced-motion: no-preference)': {
            transition: 'all 0.25s ease-in-out',
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
      },
      icon: {
        borderRadius: '$1',
        color: 'inherit',
        display: 'flex',
        outline: 0,
        margin: '0 -$1',
        '& + &': {
          marginTop: '$2',
        },
        padding: '0 $1',
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
      },
    },
  },
  defaultVariants: {
    variant: 'contrast',
    type: 'text',
  },
})

export { Link }
