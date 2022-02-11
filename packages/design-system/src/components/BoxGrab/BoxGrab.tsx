// import * as React from 'react'

import { styled } from '../../stitches.config'

const BoxGrab = styled('div', {
  cursor: 'grab',
  '&:active': { cursor: 'grabbing' },

  // Fill in spaces between slides
  mr: '-$$gap',
  pr: '$$gap',
})

export { BoxGrab }
