/**
 * @hack(!cache)
 *
 * If two images (tracks) are the same (album)
 *  => We _do_ want the same slug
 *
 */
import { slug as _slug } from 'github-slugger'
import { getPlaiceholder } from 'plaiceholder'

/**
 * @hack(!cache)
 *
 * Otherwise we would import the default, and
 *  provide new() outside of function
 */
// // eslint-disable-next-line @typescript-eslint/unbound-method
// const { slug: _slug } = new Slugger()

const getImage = async (url: string) => {
  const slug = _slug(url)
  const { base64, img } = await getPlaiceholder(url)

  return {
    base64,
    // @hack(ILoadImageImg)
    img: { ...img },
    slug,
    url,
  }
}

export default getImage
