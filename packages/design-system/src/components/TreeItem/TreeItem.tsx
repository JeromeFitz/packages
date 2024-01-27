import { styled } from '../../lib/stitches.config'

const TreeItem = styled('div', {
  '&::after': {
    boxSizing: 'border-box',
  },
  '&::before': {
    boxSizing: 'border-box',
  },
  '&:disabled': {
    pointerEvents: 'none',
  },
  WebkitTapHighlightColor: 'transparent',
  // @reset
  alignItems: 'center',
  boxSizing: 'border-box',
  color: '$hiContrast',
  display: 'flex',
  fontSize: '$1',

  // @custom
  height: '29px',
  lineHeight: '1',
  px: '$2',
  userSelect: 'none',

  variants: {
    variant: {
      // gray: {
      //   backgroundColor: '$slate3',
      //   '&:hover': {
      //     backgroundColor: '$slate4',
      //   },
      //   '&:active': {
      //     backgroundColor: '$slate5',
      //   },
      // },
    },
  },
})

export { TreeItem }
