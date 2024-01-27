/**
 * @note
 *
 * This is ... very custom and should not be here, haha.
 *
 * This is an implemention of components (and `next/image` lol)
 *
 * I would consider this a Component a Project would create within its repo.
 *
 * Not here, but hey.
 *
 * What is this entire repo @jeromefitz/packages if not just
 *  throwing a bunch of stuff to the wall and seeing what
 *  breaks through it like the Kool-Aid Man.
 */

// @todo(next) upgrade to new image
import NextImage from 'next/legacy/image'

import { Box } from '../../components/Box'
import { Flex } from '../../components/Flex'
import { styled } from '../../lib/stitches.config'

const CardContainer = styled('div', {
  display: 'flex',
  height: '100%',
})

const ImageContainer = styled('div', {
  borderRadius: '$4',
  height: '100%',
  position: 'relative',
})

const ImageBlur = styled('div', {
  borderRadius: '$4',
  filter: 'blur(0.25rem) saturate(160%)',
  height: '99.9%',
  left: 0,
  opacity: '.5',
  position: 'absolute',
  top: 0,
  transform: 'scale(1.01)',
  width: '99.9%',
})

const Image = styled(NextImage, {
  borderBottomLeftRadius: 0,
  borderRadius: '$4',
  borderTopLeftRadius: 0,
  position: 'relative',
})

const CardSpotify = ({
  base64,
  children,
  image,
  imageLabel = 'Spotify Description Coming Soon',
  slug,
}) => {
  return (
    <CardOuter>
      <Box as="div" css={{ borderRadius: '$4', position: 'relative' }}>
        <ImageBlur
          css={{
            backgroundImage: `url(${base64})`,
            backgroundSize: 'cover',
            borderRadius: '$4',
          }}
        />
        <Flex
          as="div"
          css={{
            '@bp1': { flexDirection: 'row' },
            borderRadius: '$4',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100%',
            overflow: 'hidden',
            position: 'relative',
            width: '100%',
          }}
        >
          <Flex
            as="div"
            css={{
              '@bp1': {
                borderBottomRightRadius: 0,
                borderTopRightRadius: 0,
                px: '$5',
                py: '$8',
                width: '40%',
              },
              bc: '$colors$gray3',
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderRadius: '$4',
              display: 'flex',
              flexDirection: 'column',
              px: '$3',
              py: '$5',
            }}
          >
            {children}
          </Flex>
          <Flex
            as="div"
            css={{
              '@bp1': { width: '60%' },
              // borderRadius: '0.75rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
            style={{
              backgroundImage: `url(${base64})`,
              backgroundSize: 'cover',
            }}
          >
            <Image
              alt={imageLabel}
              blurDataURL={base64}
              key={slug}
              placeholder="blur"
              priority={false}
              {...image}
            />
          </Flex>
        </Flex>
      </Box>
    </CardOuter>
  )
}

const CardOuter = ({ children }) => {
  return (
    <CardContainer>
      <ImageContainer>{children}</ImageContainer>
    </CardContainer>
  )
}

export { CardOuter, CardSpotify, ImageBlur }
