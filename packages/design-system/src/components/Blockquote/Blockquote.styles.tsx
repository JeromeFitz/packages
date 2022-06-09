import { styled } from '../../lib/stitches.config'
import { Box } from '../Box'

const BlockquoteContent = styled(Box, {
  color: '$colors$primary',
  margin: '0 auto',
  maxWidth: '1020px',
  padding: '0 var(--space-2)',
  textAlign: 'center',
  width: '100%',

  p: {
    fontSize: '$fontSizes$6 !important',
    fontStyle: 'italic',
    fontWeight: '$fontWeights$5 !important',
    lineHeight: '1.6818 !important',
    marginBottom: 0,
  },
})

const BlockquoteWrapper = styled('blockquote', {
  left: '50%',
  margin: '0 -50vw 2.25rem -50vw',
  position: 'relative',
  right: '50%',
  width: '100vw',

  paddingTop: '$space$7',
  paddingBottom: '$space$7',

  background: '$colors$emphasis',
  backdropFilter: 'blur(6px)',
})

export { BlockquoteContent, BlockquoteWrapper }
