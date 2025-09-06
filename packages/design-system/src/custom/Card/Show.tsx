import { Box } from '../../components/Box'
import { Flex } from '../../components/Flex'
import { styled } from '../../lib/stitches.config'

const css_card = {
  '@hover': {
    '&:hover': {
      backgroundColor: '$colors$gray5',
      transform: 'scale(0.99)',
    },
  },
  '&:focus': {
    backgroundColor: '$colors$gray5',
    transform: 'scale(0.99)',
  },
  backgroundColor: '$colors$gray4',
  border: '1px solid $colors$brand7',
  borderRadius: '$3',
  cursor: 'pointer',
  height: '100%',
  overflow: 'hidden',
  padding: '$5',
  position: 'relative',

  width: '100%',
}

const Card = styled(Flex, css_card)

const CardLink = styled('a', {
  '&:focus': {
    [`* ${Card}`]: {
      backgroundColor: '$colors$gray5',
      transform: 'scale(0.99)',
    },
  },
  bottom: '0',
  color: 'inherit',
  left: '0',
  position: 'absolute',
  right: '0',
  textDecoration: 'none',
  top: '0',
  zIndex: '$1',
})

const CardImageContainer = styled(Box, {
  border: 'none',
  borderRadius: '$3 ',
  height: '200px ',
  maxHeight: 'none ',
  minHeight: 'unset ',
  position: 'relative ',
})

const CardImage = styled(Box, {
  border: 'none',
  borderRadius: '$3 ',
  height: '200px ',
  maxHeight: 'none ',
  mb: '0.5rem',
  minHeight: 'unset ',
  // border: '1px solid $colors$brand10',
  overflow: 'hidden',
  position: 'relative ',
})

const CardTitle = styled(Flex, {})

const CardContent = styled(Box, { mb: '1.5rem', pb: '1rem' })

const CardMeta = styled(Flex, {
  bottom: 0,
  mb: '1rem',
  position: 'absolute',
})

export {
  Card,
  CardContent,
  CardImage,
  CardImageContainer,
  CardLink,
  CardMeta,
  CardTitle,
  css_card,
}
