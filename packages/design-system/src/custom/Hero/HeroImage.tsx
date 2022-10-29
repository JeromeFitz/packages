/**
 * @todo This should _not_ be here, this would be an implementation _of_
 *       not an implementation _from_.
 */

// @todo(next) upgrade to new image
import NextImage from 'next/legacy/image'

import { Box } from '../../components/Box'
import { styled } from '../../lib/stitches.config'

/**
 * @niceRec
 */
const IMAGE__PLACEHOLDER = {
  meta: {
    base64:
      'data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAEAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAABBAIDAQAAAAAAAAAAAAABAAMEBQIGEyIxYf/EABUBAQEAAAAAAAAAAAAAAAAAAAEF/8QAGREBAQEBAQEAAAAAAAAAAAAAAQIDABGR/9oADAMBAAIRAxEAPwCfGlwqbX9eZZoaWSXq1mQ47LjczmWeYJPYnz4iIquet1ItPDlA+Enzv//Z',
    img: {
      src: 'https://i.scdn.co/image/ab67616d0000b273a33ac83de4bc24bbf75c8b60',
      width: 640,
      height: 640,
      type: 'jpg',
    },
    slug: 'httpsiscdncoimageab67616d0000b273a33ac83de4bc24bbf75c8b60',
    url: 'https://i.scdn.co/image/ab67616d0000b273a33ac83de4bc24bbf75c8b60',
  },
}

const EmptyContent = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: '80%',
  // bc: '$loContrast',
  // bc: 'transparent',
  // br: '$4',
  // py: 10,
  // px: 10,
  // marginTop: -15,
  // boxShadow: '0px 5px 30px -5px rgba(0, 0, 0, 0.1)',
  width: '100%',
  height: '100%',

  '& ::selection': {
    backgroundColor: '$blueA5',
  },
})

function HeroImage({ alt = '', meta = IMAGE__PLACEHOLDER.meta }) {
  const { base64, img } = meta
  return (
    <EmptyContent>
      <Box css={{ height: '100%', my: '0' }}>
        <NextImage
          alt={alt}
          blurDataURL={base64}
          // layout="intrinsic"
          layout="responsive"
          loading="lazy"
          // key={slug}
          placeholder="blur"
          priority={false}
          quality={100}
          sizes={'(min-width: 1280) 80vh, 60vh'}
          {...img}
        />
      </Box>
    </EmptyContent>
  )
}

export { HeroImage }
