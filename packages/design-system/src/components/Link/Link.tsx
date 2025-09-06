import { styled } from '../../lib/stitches.config'
import { Text } from '../Text'

const Link = styled('a', {
  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'color 0.25s, text-decoration-color 0.25s ease-in-out',
  },
  [`& ${Text}`]: {
    color: 'inherit',
  },
  alignItems: 'center',
  defaultVariants: {
    type: 'text',
    variant: 'contrast',
  },
  textDecorationColor: '$slate4',
  textDecorationLine: 'none',
  textUnderlineOffset: '3px',
  variants: {
    type: {
      icon: {
        '@hover': {
          '&:hover': {
            textDecorationLine: 'underline',
          },
        },
        '& + &': {
          marginTop: '$3',
        },
        '&:focus': {
          boxShadow: '0 0 0 1px',
          textDecoration: 'none',
        },
        '&:focus:not(:focus-visible)': {
          boxShadow: 'none',
          textDecorationLine: 'underline',
        },
        borderRadius: '$1',
        color: 'inherit',
        display: 'flex',
        margin: '0 -$2',
        outline: 0,
        padding: '0 $2',
      },
      text: {
        '@hover': {
          '&:hover': {
            textDecorationLine: 'underline',
          },
        },
        '& > strong': {
          '@media (prefers-reduced-motion: no-preference)': {
            transition: 'all 0.25s ease-in-out',
          },
        },
        '&:focus': {
          borderRadius: '$1',
          boxShadow: '0 0 0 2px $colors$gray1, 0 0 0 3px $colors$hiContrast',
          textDecorationLine: 'none',
        },
        '&:focus:not(:focus-visible)': {
          boxShadow: 'none',
          textDecorationLine: 'underline',
        },
        border: 'none',
        flexShrink: 0,
        gap: '$2',
        lineHeight: 'inherit',
        outline: 'none',
        WebkitTapHighlightColor: 'rgba(0,0,0,0)',
      },
    },
    variant: {
      blue: {
        '&:focus': {
          boxShadow: '0 0 0 2px $colors$gray1, 0 0 0 3px $colors$blue4',
          outlineColor: '$blue8',
        },
        color: '$blue11',
        textDecorationColor: '$blue4',
      },
      contrast: {
        '@hover': {
          '&:hover': {
            textDecorationColor: '$slate8',
          },
        },
        '&:focus': {
          outlineColor: '$slate8',
        },
        color: '$hiContrast',
        textDecoration: 'underline',
        textDecorationColor: '$slate7',
      },
      spotify: {
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
          boxShadow: '0 0 0 2px $colors$gray1, 0 0 0 3px $colors$spotify-green',
          outlineColor: '$spotify-green',
        },
        color: '$spotify-black',
        textDecoration: 'underline',
        textDecorationColor: '$spotify-black',
      },
      subtle: {
        '&:focus': {
          outlineColor: '$slate8',
        },
        color: '$slate11',
        textDecorationColor: '$slate4',
      },
    },
  },
})

export { Link }
