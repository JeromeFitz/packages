import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { styled } from '../../stitches.config'

const StyledAvatar = styled(AvatarPrimitive.Root, {
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  boxSizing: 'border-box',
  display: 'flex',
  flexShrink: 0,
  position: 'relative',
  border: 'none',
  fontFamily: 'inherit',
  lineHeight: '1',
  margin: '0',
  outline: 'none',
  padding: '0',
  fontWeight: '700' as any,
  color: '$hiContrast',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
    boxShadow: 'inset 0px 0px 1px rgba(0, 0, 0, 0.12)',
  },

  variants: {
    border: {
      none: { border: 'none' },
      solid: { border: '1px solid' },
    },
    size: {
      '1': {
        width: '$3',
        height: '$3',
      },
      '2': {
        width: '$5',
        height: '$5',
      },
      '3': {
        width: '$6',
        height: '$6',
      },
      '4': {
        width: '$7',
        height: '$7',
      },
      '5': {
        width: '$8',
        height: '$8',
      },
      '6': {
        width: '$9',
        height: '$9',
      },
    },
    variant: {
      hiContrast: {
        backgroundColor: '$hiContrast',
        color: '$loContrast',
      },
      // amber: { backgroundColor: '$amber5' },
      blue: { backgroundColor: '$blue5' },
      // bronze: { backgroundColor: '$bronze5' },
      // brown: { backgroundColor: '$brown5' },
      // crimson: { backgroundColor: '$crimson5' },
      // cyan: { backgroundColor: '$cyan5' },
      // gold: { backgroundColor: '$gold5' },
      // grass: { backgroundColor: '$grass5' },
      gray: { backgroundColor: '$slate5' },
      green: { backgroundColor: '$green5' },
      // indigo: { backgroundColor: '$indigo5' },
      // lime: { backgroundColor: '$lime5' },
      // mint: { backgroundColor: '$mint5' },
      orange: { backgroundColor: '$orange5' },
      // pink: { backgroundColor: '$pink5' },
      // plum: { backgroundColor: '$plum5' },
      // purple: { backgroundColor: '$purple5' },
      red: { backgroundColor: '$red5' },
      // sky: { backgroundColor: '$sky5' },
      // teal: { backgroundColor: '$teal5' },
      // tomato: { backgroundColor: '$tomato5' },
      violet: { backgroundColor: '$violet5' },
      // yellow: { backgroundColor: '$yellow5' },
    },
    shape: {
      square: {
        borderRadius: '$2',
      },
      circle: {
        borderRadius: '50%',
      },
    },
    inactive: {
      true: {
        opacity: '.3',
      },
    },
    interactive: {
      true: {
        '&::after': {
          content: '""',
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          backgroundColor: 'rgba(0,0,0,.08)',
          opacity: '0',
          pointerEvents: 'none',
          '@media (prefers-reduced-motion: no-preference)': {
            transition: 'opacity 25ms linear',
          },
        },
        '@hover': {
          '&:hover': {
            '&::after': {
              opacity: '1',
            },
          },
        },
        '&[data-state="open"]': {
          '&::after': {
            backgroundColor: 'rgba(0,0,0,.12)',
            opacity: '1',
          },
        },
      },
    },
  },
  defaultVariants: {
    border: 'none',
    size: '2',
    variant: 'gray',
    shape: 'circle',
  },
})

const StyledAvatarImage = styled(AvatarPrimitive.Image, {
  display: 'flex',
  objectFit: 'cover',
  boxSizing: 'border-box',
  height: '100%',
  verticalAlign: 'middle',
  width: '100%',
})

const StyledAvatarFallback = styled(AvatarPrimitive.Fallback, {
  textTransform: 'uppercase',

  variants: {
    size: {
      '1': {
        fontSize: '10px',
        lineHeight: '15px',
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
  defaultVariants: {
    size: '2',
  },
})

const AvatarNestedItem = styled('div', {
  boxShadow: '0 0 0 2px $colors$loContrast',
  borderRadius: '50%',
})

const AvatarGroup = styled('div', {
  display: 'flex',
  flexDirection: 'row-reverse',
  [`& ${AvatarNestedItem}:nth-child(n+2)`]: {
    marginRight: '-$1',
  },
})

export {
  AvatarGroup,
  AvatarNestedItem,
  StyledAvatar,
  StyledAvatarFallback,
  StyledAvatarImage,
}
