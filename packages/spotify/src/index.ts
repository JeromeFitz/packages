/* eslint-disable complexity */
import type { Agent } from 'http'
import { URL as _URL, URLSearchParams } from 'url'

import { asyncForEach, noop as _noop } from '@jeromefitz/utils'
import fetch from 'isomorphic-unfetch'
import _omit from 'lodash/omit.js'

import {
  API_VERSION,
  ENDPOINTS,
  // LIMIT,
  // OFFSET,
  OMIT_FIELDS,
  PACKAGE_NAME,
  PACKAGE_VERSION,
  URL,
} from './constants'

type TimeRangeProps = 'long_term' | 'medium_term' | 'short_term'

// type PlaiceholderImage = {
//   base64: string
//   img: { src: string; height: number; width: number; type?: string | undefined }
//   slug: string
//   url: string
// }

interface QueryProps {
  limit?: number
  offset?: number
  time_range?: TimeRangeProps
  withImages?: boolean
  ids?: string
}

interface CredentialProps {
  clientId: string
  clientSecret: string
  refreshToken: string
}

interface NowPlayingProps {
  withImages?: boolean
}

type GetProps = {
  nowPlaying({ withImages }: NowPlayingProps): any
  topArtists({ limit, offset, time_range, withImages }: QueryProps): any
  topTracks({ limit, offset, time_range, withImages }: QueryProps): any
}

type ClientProps = {
  get: GetProps
}

type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE'
type QueryParams = Record<string, string | number> | URLSearchParams

type WithAccessToken<P> = P & { accessToken?: string }

export interface RequestParameters {
  path: string
  method: Method
  query?: QueryParams
  body?: Record<string, unknown>
  accessToken?: string
}

// @todo(types)
export interface ClientOptions {
  timeoutMs?: number
  baseUrl?: string
  spotifyVersion?: string
  fetch?: any
  /** Silently ignored in the browser */
  agent?: Agent
  clientId: string
  clientSecret: string
  refreshToken: string
  accessToken: string
}
// @todo(types)
class Client {
  #prefixUrl: string
  #spotifyVersion: string
  #fetch: any
  #agent: Agent | undefined
  #userAgent: string
  //
  #clientId: string
  #clientSecret: string
  #refreshToken: string
  #accessToken: string

  static readonly defaultSpotifyVersion = API_VERSION

  public constructor(options: ClientOptions) {
    this.#prefixUrl =
      (options?.baseUrl ?? URL.BASE) + `/${Client.defaultSpotifyVersion}/`
    this.#spotifyVersion = options?.spotifyVersion ?? Client.defaultSpotifyVersion
    this.#fetch = options?.fetch ?? fetch
    this.#agent = options?.agent
    this.#userAgent = `${PACKAGE_NAME}@${PACKAGE_VERSION}`
    // @todo(error-handling)
    this.#clientId = options?.clientId
    this.#clientSecret = options?.clientSecret
    this.#refreshToken = options?.refreshToken
    this.#accessToken = options?.accessToken ?? ''
  }

  // @todo(types)
  public async request({
    path,
    method,
    query,
    body,
    accessToken,
  }: any): Promise<any> {
    // @todo(logging) INFO => request start
    const bodyAsJsonString =
      !body || Object.entries(body).length === 0 ? undefined : JSON.stringify(body)

    const url = new _URL(`${this.#prefixUrl}${path}`)
    if (query) {
      for (const [key, value] of Object.entries(query)) {
        if (value !== undefined) {
          url.searchParams.append(key, String(value))
        }
      }
    }

    const accessTokenHeader = await this.accessTokenAsHeaders(accessToken)
    const headers: any = {
      ...accessTokenHeader,
      // 'Spotify-Version': this.#spotifyVersion,
      'user-agent': this.#userAgent,
    }

    if (bodyAsJsonString !== undefined) {
      headers['content-type'] = 'application/json'
    }

    try {
      // @todo(timeout)
      const response = await this.#fetch(url.toString(), {
        method,
        headers,
        body: bodyAsJsonString,
        agent: this.#agent,
      })

      /**
       * @todo(error-handling)
       * 204  = No Content
       * 400+ = Server Issue, Gracefull Fallback w/in Application
       */
      if (response?.status === 204 || response?.status > 400) {
        // @todo(logging) buildRequestError(response, responseText)
        return { status: response?.status }
      }

      // @todo(logging) INFO => request success
      return await response.json()
    } catch (error: unknown) {
      // if (!isSpotifyClientError(error)) {
      //   throw error
      // }

      // @todo(logging) WARN => request fail
      // if (isHTTPResponseError(error)) {
      //   // @todo(logging) DEBUG => response fail
      // }

      throw error
    }
  }

  // @todo(types)
  public readonly get: GetProps = {
    // @todo(types)
    nowPlaying: async (args: WithAccessToken<QueryProps>): Promise<any> => {
      const res: any = await this.request({
        path: ENDPOINTS.NOW_PLAYING,
        method: 'GET',
        query: '',
        body: '',
        accessToken: args?.accessToken,
      })
      // @hack(spotify) lol, error handling, wut
      if (res?.status === 204 || res?.status > 400) {
        return { status: res?.status }
      }

      return await this.getNowPlaying({
        data: res,
        withImages: args?.withImages ?? true,
      })
    },
    // @todo(types)
    topArtists: async (args: WithAccessToken<QueryProps>): Promise<any> => {
      const res: any = await this.request({
        path: ENDPOINTS.TOP_ARTISTS,
        method: 'GET',
        query: _omit(args, ['accessToken', 'withImages']),
        body: '',
        accessToken: args?.accessToken,
      })
      // @hack(spotify) lol, error handling, wut
      if (res?.status === 204 || res?.status > 400) {
        return { status: res?.status }
      }

      return await this.getTopArtists({
        data: res,
        withImages: args?.withImages ?? true,
      })
    },
    // @todo(types)
    topTracks: async (args: WithAccessToken<QueryProps>): Promise<any> => {
      const res: any = await this.request({
        path: ENDPOINTS.TOP_TRACKS,
        method: 'GET',
        query: _omit(args, ['accessToken', 'withImages']),
        body: '',
        accessToken: args?.accessToken,
      })
      // @hack(spotify) lol, error handling, wut
      if (res?.status === 204 || res?.status > 400) {
        return { status: res?.status }
      }

      return await this.getTopTracks({
        data: res,
        withImages: args?.withImages ?? true,
      })
    },
  }

  // @todo(types)
  private async getArtistsGenres(args: WithAccessToken<QueryProps>) {
    const res: any = await this.request({
      path: ENDPOINTS.ARTISTS,
      method: 'GET',
      query: _omit(args, ['accessToken', 'withImages']),
      body: '',
      accessToken: args?.accessToken,
    })
    // @hack(spotify) lol, error handling, wut
    if (res?.status === 204 || res?.status > 400) {
      return { status: res?.status }
    }

    return [...new Set(res?.artists.map(({ genres }) => genres).flat())]
  }

  // @todo(types)
  private async getNowPlaying({ data, withImages }) {
    if (!data) return { status: 404 }
    const { item } = data
    const { album: _album, artists } = item
    const track = _omit(item, OMIT_FIELDS)
    const album = _omit(_album, OMIT_FIELDS)
    const artist = artists.map(({ name }) => name).join(', ')
    const genres = await this.getArtistsGenres({
      ids: artists.map(({ id }) => id).join(','),
    })

    let image = {}
    if (withImages) {
      const url = item?.album?.images[0].url
      const { getImage } = await import('./utils')
      image = await getImage(url)
    }

    return {
      ...data,
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

  // @todo(types)
  private async getTopArtists({ data, withImages }) {
    if (!withImages) return data
    const items: any[] = []
    await asyncForEach(data.items, async (artist: any) => {
      const url = artist?.images[0].url
      const { getImage } = await import('./utils')
      const image = await getImage(url)
      items.push({
        ...artist,
        image,
      })
    }).catch(_noop)

    return {
      ...data,
      items,
    }
  }

  // @todo(types)
  private async getTopTracks({ data, withImages }) {
    const items: any[] = []
    await asyncForEach(data.items, async (item: any) => {
      const { album: _album, artists } = item
      const track: any = _omit(item, OMIT_FIELDS)
      const album: any = _omit(_album, OMIT_FIELDS)
      const artist: any = artists.map(({ name }) => name).join(', ')
      const genres: any = await this.getArtistsGenres({
        ids: artists.map(({ id }) => id).join(','),
      })
      items.push({
        ...item,
        album,
        artist,
        artists,
        genres,
        ...track,
      })
    }).catch(_noop)

    if (withImages) {
      await asyncForEach(items, async (item: any, itemIndex: number) => {
        const album: any = item?.album
        const url = album?.images[0].url
        const { getImage } = await import('./utils')
        const image = await getImage(url)
        items[itemIndex] = {
          ...item,
          album: {
            ...album,
            image,
          },
        }
      }).catch(_noop)
    }

    return {
      ...data,
      items,
    }
  }

  // @todo(types)
  private async getAccessToken() {
    const basic = Buffer.from(`${this.#clientId}:${this.#clientSecret}`).toString(
      'base64'
    )
    const res = await this.#fetch(URL.TOKEN, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: this.#refreshToken,
      }),
    })
    // @hack(spotify) lol, error handling, wut
    if (res?.status === 204 || res?.status > 400) {
      return { status: res?.status }
    }
    const { access_token } = await res.json()

    this.#accessToken = access_token
    return access_token
  }

  // @todo(types)
  private async accessTokenAsHeaders(accessToken?: string) {
    const headers: Record<string, string> = {}
    const accessTokenValue =
      accessToken ?? this.#accessToken.length > 1
        ? this.#accessToken
        : await this.getAccessToken()
    if (accessTokenValue !== undefined) {
      headers['authorization'] = `Bearer ${accessTokenValue}`
    }
    return headers
  }
}

export default Client
export type { ClientProps, CredentialProps }
