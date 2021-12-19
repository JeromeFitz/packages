const ENDPOINTS = {
  ARTISTS: `https://api.spotify.com/v1/artists`,
  NOW_PLAYING: `https://api.spotify.com/v1/me/player/currently-playing`,
  TOKEN: `https://accounts.spotify.com/api/token`,
  TOP_ARTISTS: `https://api.spotify.com/v1/me/top/artists`,
  TOP_TRACKS: `https://api.spotify.com/v1/me/top/tracks`,
}

const LIMIT = 10 // @note() 20 is default
const OFFSET = 0

const OMIT_FIELDS = ['album', 'artists', 'available_markets']

export { ENDPOINTS, LIMIT, OFFSET, OMIT_FIELDS }
