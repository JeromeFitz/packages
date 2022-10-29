import { styled } from '../../lib/stitches.config'

const BoxLink = styled('a', {
  display: 'block',
  color: '$hiContrast',
  textDecoration: 'none',
  outline: 0,
  p: '$1',
  m: '-$2',
  br: '$1',
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray12',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },
})

export { BoxLink }
