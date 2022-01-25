import { styled } from '../../stitches.config'

const Breakout = styled('div', {
  // @reset
  boxSizing: 'border-box',
  flexShrink: 0,

  // Custom
  position: 'relative',
  left: 'calc(-50vw + 50%)',
  width: '100vw',
})

export { Breakout }
