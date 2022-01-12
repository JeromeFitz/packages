import Slugger from 'github-slugger'
import _map from 'lodash/map'
import { getPlaiceholder } from 'plaiceholder'

import filterImages from '../utils/filterImages'
/**
 * @plaiceholder/next
 */
// @todo(complexity) 16
// eslint-disable-next-line complexity
const getImages = async ({ data, pathVariables }) => {
  const slugger = new Slugger()
  const mergeImages = {}

  // console.dir(`data`)
  // console.dir(data)
  // console.dir(`pathVariables`)
  // console.dir(pathVariables)

  /**
   * @info
   */
  const infoImagesFilter =
    data.info?.object === 'page'
      ? filterImages(data.info?.properties, 'info')
      : !!data.info?.results &&
        filterImages(data.info?.results[0]?.properties, 'info')
  const infoImagesAwait =
    !!infoImagesFilter &&
    infoImagesFilter.map(async (imageResult) => {
      if (!imageResult) {
        return null
      }

      // console.dir(`>> imageResult: infoImagesFilter`)
      // console.dir(imageResult)

      const url =
        !!imageResult && !!imageResult?.url ? imageResult?.url : imageResult

      if (!url) {
        return null
      }

      // console.dir(url)

      const { base64, img } = await getPlaiceholder(url)
      const id = slugger.slug(url)

      return { base64, id, img, url }
    })
  const infoImages = !!infoImagesAwait ? await Promise.all(infoImagesAwait) : []

  /**
   * @content
   */
  const contentImagesFilter =
    !pathVariables.isIndex && filterImages(data?.content, 'content')

  const contentImagesAwait =
    !!contentImagesFilter &&
    contentImagesFilter.map(async (imageResult) => {
      if (!imageResult) {
        return null
      }

      // console.dir(`>> imageResult: contentImagesAwait`)
      // console.dir(imageResult)

      const { type } = imageResult
      const image = imageResult[type]

      // @todo(notion) rework content after refactor: getTypes[image]
      const url =
        !!imageResult && !!image?.external?.url ? image?.external?.url : null

      if (!url) {
        return null
      }

      // console.dir(url)

      const { base64, img } = await getPlaiceholder(url)
      const id = slugger.slug(url)
      return { base64, id, img, url }
    })
  const contentImages = !!contentImagesAwait
    ? await Promise.all(contentImagesAwait)
    : []

  /**
   * @items
   */
  if (!!data.items) {
    const itemsImagesFilter =
      data.items.object === 'page'
        ? filterImages(data.items?.data, 'items')
        : filterImages(data.items?.results, 'items')
    const itemsImagesAwait: any =
      !!itemsImagesFilter &&
      itemsImagesFilter.map(async (imageResult) => {
        if (!imageResult) {
          return null
        }

        // console.dir(`>> imageResult: itemsImagesAwait`)
        // console.dir(imageResult)

        const url =
          !!imageResult && !!imageResult?.url ? imageResult?.url : imageResult

        if (!url) {
          return null
        }

        // console.dir(url)

        const { base64, img } = await getPlaiceholder(url)
        const id = slugger.slug(url)

        return { base64, id, img, url }
      })
    const itemsImages = await Promise.all(itemsImagesAwait)
    !!itemsImages &&
      itemsImages[0] &&
      _map(itemsImages, (image: any) => (mergeImages[image.id] = image))
  }

  !!infoImages &&
    infoImages[0] &&
    _map(infoImages, (image: any) => (mergeImages[image.id] = image))
  !!contentImages &&
    contentImages[0] &&
    _map(contentImages, (image: any) => (mergeImages[image.id] = image))

  // console.dir(`mergeImages`)
  // console.dir(mergeImages)

  return mergeImages
}

export default getImages
