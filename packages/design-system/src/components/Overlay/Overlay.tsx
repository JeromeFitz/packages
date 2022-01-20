import { styled, css } from '../../stitches.config'

const overlayStyles = css({
  backgroundColor: 'rgba(0, 0, 0, .15)',
})

const Overlay = styled('div', overlayStyles)

export { Overlay, overlayStyles }
