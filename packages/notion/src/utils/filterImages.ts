/**
 * @plaiceholder
 */
import _filter from 'lodash/filter'
import _map from 'lodash/map'

const filterImages = (data, type) => {
  // console.dir(`data`)
  // console.dir(data)
  // console.dir(`type`)
  // console.dir(type)
  switch (type) {
    case 'info':
      // return !!data && [data?.seoImage]
      const infoImages: any[] = []
      _map(data.seoImage, (item) => {
        // @hack(notion) plaiceholder cannot handle images w/ query strings ('file')
        return !!item?.url && item?.type === 'external' && infoImages.push(item?.url)
      })
      return infoImages
    case 'content':
      return !!data && _filter(data, { object: 'block', type: 'image' })
    case 'items':
      const itemsImages: any[] = []
      _map(data, (item) => {
        _map(item?.properties?.seoImage, (item) => {
          // @hack(notion) plaiceholder cannot handle images w/ query strings ('file')
          return (
            !!item?.url && item?.type === 'external' && itemsImages.push(item?.url)
          )
        })
      })
      return itemsImages
    default:
      return []
  }
}

export default filterImages
