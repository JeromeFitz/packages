import { Box } from '../../components/Box'
import { Text } from '../../components/Text'
import { styled } from '../../lib/stitches.config'

const EmptyContent = styled('div', {
  '& ::selection': {
    backgroundColor: '$blueA5',
  },
  bc: '$loContrast',
  boxShadow: '0px 5px 30px -5px rgba(0, 0, 0, 0.1)',
  // bc: 'transparent',
  br: '$4',
  left: '50%',
  marginTop: -15,
  position: 'absolute',
  px: 10,
  py: 10,
  top: '50%',
  transform: 'translate(-50%, -50%)',

  width: '80%',
})

const str = `Lorem ipsum dolor sit.`

function Empty() {
  return (
    <EmptyContent>
      <Box css={{ height: '100%', my: '0' }}>
        <Text css={{ lineHeight: '1.5', mb: '$2' }} size="2">
          {str}
        </Text>
      </Box>
    </EmptyContent>
  )
}

export { Empty }
