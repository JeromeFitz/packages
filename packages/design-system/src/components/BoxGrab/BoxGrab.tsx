import { styled } from '../../lib/stitches.config'

const BoxGrab = styled('div', {
  cursor: 'grab',
  '&:active': { cursor: 'grabbing' },

  // Fill in spaces between slides
  mr: '-$$gap',
  pr: '$$gap',
})

export { BoxGrab }
