import { styled } from '../../lib/stitches.config'

const ButtonDemoIcon = styled('button', {
  boxSizing: 'border-box',
  position: 'absolute',
  display: 'inline-flex',
  jc: 'center',
  ai: 'center',
  width: 25,
  height: 25,
  top: 0,
  right: 0,
  background: 'none',
  padding: 0,
  margin: 0,
  outline: 0,
  borderRadius: '$2',
  color: '$hiContrast',

  // Make it larger than it looks
  border: '2px solid transparent',
  backgroundClip: 'padding-box',

  '@hover': {
    '&:hover': {
      bc: '$grayA4',
    },
  },
  '&:active': {
    bc: '$grayA5',
  },

  '&:focus': {
    borderColor: '$slate8',
  },
  '&:focus:not(:focus-visible)': {
    borderColor: 'transparent',
  },
})

export { ButtonDemoIcon }
