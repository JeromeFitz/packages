import { styled } from '../../lib/stitches.config'

const BoxLink = styled('a', {
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray12',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },
  br: '$1',
  color: '$hiContrast',
  display: 'block',
  m: '-$2',
  outline: 0,
  p: '$1',
  textDecoration: 'none',
})

export { BoxLink }
