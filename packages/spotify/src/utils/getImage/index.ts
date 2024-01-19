/**
 * @hack(!cache)
 *
 * If two images (tracks) are the same (album)
 *  => We _do_ want the same slug, so call within function
 *
 */
import { slug as _slug } from 'github-slugger'
import fetch from 'isomorphic-unfetch'
import { getPlaiceholder } from 'plaiceholder'

const _getImage = async (src: string) => {
  const buffer = await fetch(src).then(async (res: any) =>
    Buffer.from(await res.arrayBuffer()),
  )

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 })

  return {
    ...plaiceholder,
    img: { src, height, width },
  }
}

const getImage = async (url: string) => {
  const slug = _slug(url)
  const { base64, img } = await _getImage(url)

  return {
    base64,
    img: { ...img },
    slug,
    url,
  }
}

export { getImage }
export default getImage
