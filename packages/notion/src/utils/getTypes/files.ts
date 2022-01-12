import Slugger from 'github-slugger'
import _size from 'lodash/size'
// import { getPlaiceholder } from 'plaiceholder'

import stringToUUID from '../../utils/stringToUUID'

const notionImageHosted = `https://www.notion.so/image/{{FILENAME}}?table=block&id={{PAGE_ID}}&cache=v2&w1dth=600`

const getNotionHostedUrl = (url: string | number | boolean, pageId: string) =>
  notionImageHosted
    .replace('{{FILENAME}}', encodeURIComponent(url))
    .replace('{{PAGE_ID}}', stringToUUID(pageId))

const files = (data: any, pageId: string) => {
  const slugger = new Slugger()
  const _files = {}

  if (_size(data.files) <= 0) return _files
  data.files.map(
    (file: { type: string; file: { url: string }; external: { url: string } }) => {
      if (file?.type === 'file') {
        const internalUrl = file?.file?.url.split('?')[0]
        const internalSlug = slugger.slug(internalUrl)
        // const { base64: internalBase64, img: internalImg } = await getPlaiceholder(
        //   internalUrl
        // )
        _files[internalSlug] = {
          type: file?.type,
          url: getNotionHostedUrl(internalUrl, pageId),
          // base64: internalBase64,
          // img: internalImg,
        }
      }
      if (file?.type === 'external') {
        const externalUrl = file?.external?.url.split('?')[0]
        const externalSlug = slugger.slug(externalUrl)
        // const { base64: externalBase64, img: externalImg } = await getPlaiceholder(
        //   externalUrl
        // )
        _files[externalSlug] = {
          type: file?.type,
          url: externalUrl,
          // base64: externalBase64,
          // img: externalImg,
        }
      }
      // if (file?.type === 'image') {
      //   const externalUrl = file?.external?.url.split('?')[0]
      //   const externalSlug = slugger.slug(externalUrl)
      //   _files[externalSlug] = { type: file?.type, url: externalUrl }
      // }

      // return
    }
  )

  return _files
}

export default files
