import Slugger from 'github-slugger'
import { getPlaiceholder } from 'plaiceholder'

/**
 * @hack(!cache)
 *
 * - if two images (tracks)
 * - are the same (album),
 * - we _do_ want same slug
 *
 */
// const slugger = new Slugger()

const getImage = async (url: string) => {
  // const slug = slugger.slug(url)
  const slug = Slugger.slug(url)
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
