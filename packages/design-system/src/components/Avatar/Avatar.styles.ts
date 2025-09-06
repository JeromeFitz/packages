import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { styled } from '../../lib/stitches.config'

const StyledAvatar = styled(AvatarPrimitive.Root, {
  '&::before': {
    borderRadius: 'inherit',
    bottom: 0,
    boxShadow: 'inset 0px 0px 1px rgba(0, 0, 0, 0.12)',
    content: '""',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  alignItems: 'center',
  border: 'none',
  boxSizing: 'border-box',
  color: '$hiContrast',
  defaultVariants: {
    border: 'none',
    shape: 'circle',
    size: '2',
    variant: 'gray',
  },
  display: 'flex',
  flexShrink: 0,
  fontFamily: 'inherit',
  fontVariationSettings: '"wght" $fontWeights$7',
  fontWeight: '$fontWeights$7' as any,
  justifyContent: 'center',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  overflow: 'hidden',
  padding: '0',
  position: 'relative',

  userSelect: 'none',

  variants: {
    border: {
      none: { border: 'none' },
      solid: { border: '1px solid' },
    },
    inactive: {
      true: {
        opacity: '.3',
      },
    },
    interactive: {
      true: {
        '@hover': {
          '&:hover': {
            '&::after': {
              opacity: '1',
            },
          },
        },
        '&::after': {
          '@media (prefers-reduced-motion: no-preference)': {
            transition: 'opacity 25ms linear',
          },
          backgroundColor: 'rgba(0,0,0,.08)',
          bottom: '0',
          content: '""',
          left: '0',
          opacity: '0',
          pointerEvents: 'none',
          position: 'absolute',
          right: '0',
          top: '0',
        },
        '&[data-state="open"]': {
          '&::after': {
            backgroundColor: 'rgba(0,0,0,.12)',
            opacity: '1',
          },
        },
      },
    },
    shape: {
      circle: {
        borderRadius: '50%',
      },
      square: {
        borderRadius: '$2',
      },
    },
    size: {
      '1': {
        height: '$3',
        width: '$3',
      },
      '2': {
        height: '$5',
        width: '$5',
      },
      '3': {
        height: '$6',
        width: '$6',
      },
      '4': {
        height: '$7',
        width: '$7',
      },
      '5': {
        height: '$8',
        width: '$8',
      },
      '6': {
        height: '$9',
        width: '$9',
      },
    },
    variant: {
      gray: { backgroundColor: '$gray5' },
      hiContrast: {
        backgroundColor: '$hiContrast',
        color: '$loContrast',
      },
    },
  },
  verticalAlign: 'middle',
})

const StyledAvatarImage = styled(AvatarPrimitive.Image, {
  boxSizing: 'border-box',
  display: 'flex',
  height: '100%',
  objectFit: 'cover',
  verticalAlign: 'middle',
  width: '100%',
})

const StyledAvatarFallback = styled(AvatarPrimitive.Fallback, {
  defaultVariants: {
    size: '2',
  },

  textTransform: 'uppercase',
  variants: {
    size: {
      '1': {
        fontSize: '$1',
        lineHeight: '0.75rem',
      },
      '2': {
        fontSize: '$3',
      },
      '3': {
        fontSize: '$6',
      },
      '4': {
        fontSize: '$7',
      },
      '5': {
        fontSize: '$8',
      },
      '6': {
        fontSize: '$9',
      },
    },
  },
})

const AvatarNestedItem = styled('div', {
  borderRadius: '50%',
  boxShadow: '0 0 0 2px $colors$loContrast',
})

const AvatarGroup = styled('div', {
  [`& ${AvatarNestedItem}:nth-child(n+2)`]: {
    marginRight: '-$1',
  },
  display: 'flex',
  flexDirection: 'row-reverse',
})

export {
  AvatarGroup,
  AvatarNestedItem,
  StyledAvatar,
  StyledAvatarFallback,
  StyledAvatarImage,
}
