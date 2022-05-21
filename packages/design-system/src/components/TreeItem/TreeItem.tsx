import { styled } from '../../lib/stitches.config'

const TreeItem = styled('div', {
  // @reset
  alignItems: 'center',
  boxSizing: 'border-box',
  display: 'flex',
  lineHeight: '1',
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  '&:disabled': {
    pointerEvents: 'none',
  },
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // @custom
  height: '29px',
  px: '$2',
  fontSize: '$1',
  color: '$hiContrast',

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
