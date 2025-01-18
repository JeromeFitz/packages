const API_VERSION = 'v1'

type Endpoint =
  | 'ARTISTS'
  | 'NOW_PLAYING'
  | 'RECENTLY_PLAYED'
  | 'TOP_ARTISTS'
  | 'TOP_TRACKS'
type EndPoints = Record<Endpoint, string>

const ENDPOINTS: EndPoints = {
  ARTISTS: `artists`,
  NOW_PLAYING: `me/player/currently-playing`,
  RECENTLY_PLAYED: 'me/player/recently-played',
  TOP_ARTISTS: `me/top/artists`,
  TOP_TRACKS: `me/top/tracks`,
}

type Url = 'BASE' | 'TOKEN'
type Urls = Record<Url, string>
const URL: Urls = {
  BASE: 'https://api.spotify.com',
  TOKEN: 'https://accounts.spotify.com/api/token',
}

const LIMIT = 10 // @note(spotify) 20 is default
const OFFSET = 0

const OMIT_FIELDS = ['album', 'artists', 'available_markets']

// @todo(package.json) dynamic please
const PACKAGE_NAME = '@jeromefitz/spotify'
const PACKAGE_VERSION = '4.2.0-canary.1'

export {
  API_VERSION,
  ENDPOINTS,
  LIMIT,
  OFFSET,
  OMIT_FIELDS,
  PACKAGE_NAME,
  PACKAGE_VERSION,
  URL,
}
