/**
 * @hack(!cache)
 *
 * If two images (tracks) are the same (album)
 *  => We _do_ want the same slug, so call within function
 *
 */
import { slug as _slug } from 'github-slugger'
// eslint-disable-next-line import-x/default
import fetch from 'isomorphic-unfetch'
import { getPlaiceholder } from 'plaiceholder'

const _getImage = async (src: string) => {
  /**
   * @todo(types)
   */
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const buffer = await fetch(src).then(async (res: any) =>
    Buffer.from(await res.arrayBuffer()),
  )

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 })

  return {
    ...plaiceholder,
    img: { height, src, width },
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
