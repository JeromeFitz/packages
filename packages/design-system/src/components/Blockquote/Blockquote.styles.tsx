import { styled } from '../../lib/stitches.config'
import { Box } from '../Box'

const BlockquoteContent = styled(Box, {
  color: '$colors$primary',
  margin: '0 auto',
  maxWidth: '1020px',
  p: {
    fontSize: '$fontSizes$6 !important',
    fontStyle: 'italic',
    fontWeight: '$fontWeights$5 !important',
    lineHeight: '1.6818 !important',
    marginBottom: 0,
  },
  padding: '0 $3',
  textAlign: 'center',

  width: '100%',
})

const BlockquoteWrapper = styled('blockquote', {
  backdropFilter: 'blur(6px)',
  background: '$colors$emphasis',
  left: '50%',
  margin: '0 -50vw 2.25rem -50vw',
  paddingBottom: '$8',

  paddingTop: '$8',
  position: 'relative',

  right: '50%',
  width: '100vw',
})

export { BlockquoteContent, BlockquoteWrapper }
