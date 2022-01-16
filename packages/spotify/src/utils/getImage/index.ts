import Slugger from 'github-slugger'
import { getPlaiceholder } from 'plaiceholder'

const getImage = async (url: string) => {
  const slugger = new Slugger()
  const slug = slugger.slug(url)
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
