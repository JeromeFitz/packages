import { asyncForEach } from './asyncForEach'
import { OMIT_FIELDS } from './constants'
import _noop from './utils/noop'
import _omit from './utils/omit'

// @todo(types)
const getTopTracks = async (self: any, data: any, withImages) => {
  /**
   * @custom
   */
  const { items } = data
  let _items: any[] = []
  await asyncForEach(items, async (item: any) => {
    const { album: _album, artists } = item
    const track = _omit(item, OMIT_FIELDS)
    const album = _omit(_album, OMIT_FIELDS)
    const artist = artists.map(({ name }) => name).join(', ')
    const genres = await self.getArtistsGenres({
      ids: artists.map(({ id }) => id).join('%2C'),
    })
    _items.push({
      album,
      artist,
      artists,
      genres,
      ...track,
    })
  }).catch(_noop)

  let _data = {
    ...data,
    items: _items,
  }

  if (withImages) {
    // @note(reset)
    _items = []
    await asyncForEach(_data.items, async (item: any) => {
      const url = item?.album?.images[0].url
      const { getImage } = await import('./getImage')
      const image = await getImage(url)
      _items.push({
        ...item,
        album: {
          ...item.album,
          image,
        },
      })
    }).catch(_noop)
    _data = {
      ..._data,
      items: _items,
    }
  }

  return _data
}

export default getTopTracks
