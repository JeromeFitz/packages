import { styled } from '../../lib/stitches.config'

const ButtonDemoIcon = styled('button', {
  '&:active': {
    bc: '$grayA5',
  },
  '&:focus': {
    borderColor: '$slate8',
  },
  '&:focus:not(:focus-visible)': {
    borderColor: 'transparent',
  },
  '@hover': {
    '&:hover': {
      bc: '$grayA4',
    },
  },
  ai: 'center',
  background: 'none',
  backgroundClip: 'padding-box',
  // Make it larger than it looks
  border: '2px solid transparent',
  borderRadius: '$2',
  boxSizing: 'border-box',
  color: '$hiContrast',
  display: 'inline-flex',
  height: 25,
  jc: 'center',
  margin: 0,

  outline: 0,
  padding: 0,

  position: 'absolute',
  right: 0,

  top: 0,
  width: 25,
})

export { ButtonDemoIcon }
