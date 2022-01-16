const LIMIT = 10 // @note() 20 is default
const OFFSET = 0

const OMIT_FIELDS = ['album', 'artists', 'available_markets']

// @todo(package.json) dynamic please
const PACKAGE_NAME = '@jeromefitz/spotify'
const PACKAGE_VERSION = '2.1.0'

const ENDPOINTS = {
  ARTISTS: `artists`,
  NOW_PLAYING: `me/player/currently-playing`,
  TOKEN: `https://accounts.spotify.com/api/token`,
  TOP_ARTISTS: `me/top/artists`,
  TOP_TRACKS: `me/top/tracks`,
}

export { ENDPOINTS, LIMIT, OFFSET, OMIT_FIELDS, PACKAGE_NAME, PACKAGE_VERSION }
