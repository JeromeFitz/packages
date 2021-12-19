import _noop from 'lodash/noop'

// @todo(types)
const getTopArtists = async (_self: any, data: any, withImages = false) => {
  let _data = data

  if (withImages) {
    const { asyncForEach } = await import('./asyncForEach')
    const _artists: any[] = []
    await asyncForEach(data.items, async (artist: any) => {
      const url = artist?.images[0].url
      const { getImage } = await import('./getImage')
      const image = await getImage(url)

      _artists.push({
        ...artist,
        image,
      })
    }).catch(_noop)

    _data = {
      ...data,
      items: _artists,
    }
  }

  return _data
}

export default getTopArtists
