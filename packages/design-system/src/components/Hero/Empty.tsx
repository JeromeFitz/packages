import { styled } from '../../stitches.config'
import { Box, Text } from '../index'

const EmptyContent = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bc: '$loContrast',
  // bc: 'transparent',
  br: '$4',
  py: 10,
  px: 10,
  marginTop: -15,
  boxShadow: '0px 5px 30px -5px rgba(0, 0, 0, 0.1)',

  '& ::selection': {
    backgroundColor: '$blueA5',
  },
})

const str = `Lorem ipsum dolor sit.`

export function Empty() {
  return (
    <EmptyContent>
      <Box css={{ height: '100%', my: '0' }}>
        <Text size="2" css={{ lineHeight: '1.5', mb: '$2' }}>
          {str}
        </Text>
      </Box>
    </EmptyContent>
  )
}
