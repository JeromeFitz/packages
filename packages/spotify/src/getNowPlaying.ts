import { OMIT_FIELDS } from './constants'
import _omit from './utils/omit'

// @todo(types)
const getNowPlaying = async (self: any, data: any, withImages = false) => {
  const { item } = data
  const { album: _album, artists } = item
  const track = _omit(item, OMIT_FIELDS)
  const album = _omit(_album, OMIT_FIELDS)
  const artist = artists.map(({ name }) => name).join(', ')
  const genres = await self.getArtistsGenres({
    ids: data?.item?.artists.map(({ id }) => id).join('%2C'),
  })

  let _data = {
    ...data,
    item: {
      ...track,
      album,
      artist,
      genres,
    },
  }

  if (withImages) {
    const url = item?.album?.images[0].url
    const { getImage } = await import('./getImage')
    const image = await getImage(url)

    _data = {
      ..._data,
      item: {
        ...track,
        album: {
          ...album,
          image,
        },
        artist,
        genres,
      },
    }
  }

  return _data
}

export default getNowPlaying
