import { styled } from '../../lib/stitches.config'

const BoxGrab = styled('div', {
  '&:active': { cursor: 'grabbing' },
  cursor: 'grab',

  // Fill in spaces between slides
  mr: '-$$gap',
  pr: '$$gap',
})

export { BoxGrab }
