import { URLSearchParams } from 'url'

import fetch from 'isomorphic-unfetch'

import { ENDPOINTS, LIMIT, OFFSET } from './constants'
import type {
  CredentialKey,
  QueryProps,
  SpotifyApiProps,
  TimeRangeProps,
} from './index.types'
import {
  getNowPlaying,
  getTopArtists,
  getTopTracks,
  getUrlWithParams,
} from './utils'

function SpotifyApi(this: SpotifyApiProps) {
  this._credentials = {}
}

SpotifyApi.prototype = {
  /**
   * @init
   */
  setCredentials: function (credentials: any) {
    for (const key in credentials) {
      if (credentials.hasOwnProperty(key)) {
        this._credentials[key] = credentials[key]
      }
    }
  },

  /**
   * @_ (get|reset|set)
   */
  _getCredential: function (credentialKey: CredentialKey) {
    if (!this._credentials) {
      return
    } else {
      return this._credentials[credentialKey]
    }
  },

  _resetCredential: function (credentialKey: CredentialKey) {
    if (!this._credentials) {
      return
    } else {
      this._credentials[credentialKey] = null
    }
  },

  _setCredential: function (credentialKey: CredentialKey, value) {
    this._credentials = this._credentials || {}
    this._credentials[credentialKey] = value
  },

  /**
   * @get
   */

  // getAccessToken: function () {
  //   return this._getCredential('accessToken')
  // },

  getAccessToken: async function () {
    const basic = await this.getBasic()

    return await fetch(ENDPOINTS.TOKEN, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: this.getRefreshToken(),
      }),
    })
  },

  getCredentials: function () {
    return this._credentials
  },

  getBasic: function () {
    return Buffer.from(`${this.getClientId()}:${this.getClientSecret()}`).toString(
      'base64'
    )
  },

  getClientId: function () {
    return this._getCredential('clientId')
  },

  getClientSecret: function () {
    return this._getCredential('clientSecret')
  },

  getRefreshToken: function () {
    return this._getCredential('refreshToken')
  },

  /**
   * @reset
   */

  resetAccessToken: function () {
    this._resetCredential('accessToken')
  },

  resetClientId: function () {
    this._resetCredential('clientId')
  },

  resetClientSecret: function () {
    this._resetCredential('clientSecret')
  },

  resetRefreshToken: function () {
    this._resetCredential('refreshToken')
  },

  /**
   * @set
   */

  setAccessToken: function (accessToken: string) {
    this._setCredential('accessToken', accessToken)
  },

  setClientId: function (clientId: string) {
    this._setCredential('clientId', clientId)
  },

  setClientSecret: function (clientSecret: string) {
    this._setCredential('clientSecret', clientSecret)
  },

  setRefreshToken: function (refreshToken: string) {
    this._setCredential('refreshToken', refreshToken)
  },

  /**
   * @functions
   */

  getArtistsGenres: async function ({ ids }) {
    const url = ENDPOINTS.ARTISTS + `?ids=${ids.replace(',', '%2C')}`
    const res = await this.getFetch({ url })
    const _genres = await res.json()

    return _genres.artists.map(({ genres }) => genres).flat()
  },

  getFetch: async function ({ url }) {
    const res = await this.getAccessToken()
    if (res?.status > 400) return { status: res?.status }
    const { access_token } = await res.json()

    return fetch(url, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    })
  },

  getNowPlaying: async function ({ withImages = false }) {
    const url = getUrlWithParams({
      url: ENDPOINTS.NOW_PLAYING,
    })
    const res = await this.getFetch({
      url,
    })
    // @hack(spotify) in case aws goes down
    if (res?.status === 204 || res?.status > 400) {
      return { status: res?.status }
    }
    const data = await res?.json()
    // @todo()
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this
    return getNowPlaying(self, data, withImages)
  },

  getTopArtists: async function ({
    limit = LIMIT,
    offset = OFFSET,
    time_range = 'medium_term',
    withImages = false,
  }: QueryProps) {
    const url = getUrlWithParams({
      limit,
      offset,
      time_range,
      url: ENDPOINTS.TOP_ARTISTS,
    })
    const res = await this.getFetch({
      url,
    })
    // @hack(spotify) in case aws goes down
    if (res.status === 204 || res.status > 400) {
      return { status: res?.status }
    }
    const data = await res?.json()
    // @todo()
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this
    return getTopArtists(self, data, withImages)
  },

  getTopTracks: async function ({
    limit = LIMIT,
    offset = OFFSET,
    time_range = 'medium_term',
    withImages = false,
  }: QueryProps) {
    const url = getUrlWithParams({
      limit,
      offset,
      time_range,
      url: ENDPOINTS.TOP_TRACKS,
    })
    const res = await this.getFetch({
      url,
    })
    // @hack(spotify) in case aws goes down
    if (res.status === 204 || res.status > 400) {
      return { status: res?.status }
    }
    const data = await res?.json()
    // @todo()
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this
    return getTopTracks(self, data, withImages)
  },
}

export default SpotifyApi
export type { QueryProps, SpotifyApiProps, TimeRangeProps }
