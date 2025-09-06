import { styled } from '../../lib/stitches.config'

const TabLink = styled('a', {
  '@hover': {
    '&:hover': {
      color: '$hiContrast',
    },
  },
  '&:focus': {
    boxShadow: 'inset 0 0 0 1px $colors$slate8, 0 0 0 1px $colors$slate8',
  },
  alignItems: 'center',
  color: '$slate11',
  display: 'inline-flex',
  flexShrink: 0,
  fontSize: '$1',
  height: '$6',
  justifyContent: 'center',
  lineHeight: 1,
  outline: 'none',
  position: 'relative',
  px: '$3',
  textDecoration: 'none',
  userSelect: 'none',

  variants: {
    active: {
      true: {
        '&::after': {
          backgroundColor: '$blue9',
          bottom: 0,
          content: '""',
          height: 2,
          left: 0,
          position: 'absolute',
          width: '100%',
        },
        color: '$hiContrast',
        cursor: 'default',
      },
    },
  },
})

export { TabLink }
