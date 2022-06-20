import { Box } from '../../components/Box'
import { Flex } from '../../components/Flex'
import { styled } from '../../lib/stitches.config'

const css_card = {
  backgroundColor: '$colors$gray4',
  border: '1px solid $colors$brand7',
  borderRadius: '$3',
  cursor: 'pointer',
  height: '100%',
  overflow: 'hidden',
  padding: '$5',
  position: 'relative',
  width: '100%',
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
}

const Card = styled(Flex, css_card)

const CardLink = styled('a', {
  bottom: '0',
  color: 'inherit',
  left: '0',
  position: 'absolute',
  right: '0',
  textDecoration: 'none',
  top: '0',
  zIndex: '$1',
  '&:focus': {
    [`* ${Card}`]: {
      backgroundColor: '$colors$gray5',
      transform: 'scale(0.99)',
    },
  },
})

const CardImageContainer = styled(Box, {
  borderRadius: '$3 ',
  position: 'relative ',
  minHeight: 'unset ',
  maxHeight: 'none ',
  height: '200px ',
  border: 'none',
})

const CardImage = styled(Box, {
  borderRadius: '$3 ',
  position: 'relative ',
  minHeight: 'unset ',
  maxHeight: 'none ',
  height: '200px ',
  border: 'none',
  // border: '1px solid $colors$brand10',
  overflow: 'hidden',
  mb: '0.5rem',
})

const CardTitle = styled(Flex, {})

const CardContent = styled(Box, { mb: '1.5rem', pb: '1rem' })

const CardMeta = styled(Flex, {
  position: 'absolute',
  bottom: 0,
  mb: '1rem',
})

export {
  css_card,
  Card,
  CardContent,
  CardImage,
  CardImageContainer,
  CardLink,
  CardMeta,
  CardTitle,
}
