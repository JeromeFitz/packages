/* eslint-disable complexity */
import { URL as _URL, URLSearchParams } from 'url'

import { noop as _noop, asyncForEach } from '@jeromefitz/utils'

import type { Agent } from 'http'

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
} from './constants/index.js'

type TimeRangeProps = 'long_term' | 'medium_term' | 'short_term'

// type PlaiceholderImage = {
//   base64: string
//   img: { src: string; height: number; width: number; type?: string | undefined }
//   slug: string
//   url: string
// }

interface QueryProps {
  ids?: string
  limit?: number
  offset?: number
  time_range?: TimeRangeProps
  withImages?: boolean
}

interface CredentialProps {
  clientId: string
  clientSecret: string
  refreshToken: string
}

interface NowPlayingProps {
  withImages?: boolean
}

// @todo(NICE-129) eslint
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type GetProps = {
  nowPlaying({ withImages }: NowPlayingProps): any
  topArtists({ limit, offset, time_range, withImages }: QueryProps): any
  topTracks({ limit, offset, time_range, withImages }: QueryProps): any
}

// @todo(NICE-129) eslint
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type ClientProps = {
  get: GetProps
}

type Method = 'DELETE' | 'GET' | 'PATCH' | 'POST'
type QueryParams = Record<string, number | string> | URLSearchParams

type WithAccessToken<P> = { accessToken?: string } & P

export interface RequestParameters {
  accessToken?: string
  body?: Record<string, unknown>
  method: Method
  path: string
  query?: QueryParams
}

// @todo(types)
export interface ClientOptions {
  accessToken: string
  /** Silently ignored in the browser */
  agent?: Agent
  baseUrl?: string
  clientId: string
  clientSecret: string
  fetch?: any
  refreshToken: string
  spotifyVersion?: string
  timeoutMs?: number
}
// @todo(types)
class Client {
  static readonly defaultSpotifyVersion = API_VERSION
  #accessToken: string
  #agent: Agent | undefined
  //
  #clientId: string
  #clientSecret: string
  #fetch: any
  #prefixUrl: string
  #refreshToken: string
  // @todo(NICE-129) eslint
  // eslint-disable-next-line no-unused-private-class-members
  #spotifyVersion: string

  #userAgent: string

  // @todo(types)
  public readonly get: GetProps = {
    // @todo(types)
    nowPlaying: async (args: WithAccessToken<QueryProps>): Promise<any> => {
      const res: any = await this.request({
        accessToken: args?.accessToken,
        body: '',
        method: 'GET',
        path: ENDPOINTS.NOW_PLAYING,
        query: '',
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
        accessToken: args?.accessToken,
        body: '',
        method: 'GET',
        path: ENDPOINTS.TOP_ARTISTS,
        query: _omit(args, ['accessToken', 'withImages']),
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
        accessToken: args?.accessToken,
        body: '',
        method: 'GET',
        path: ENDPOINTS.TOP_TRACKS,
        query: _omit(args, ['accessToken', 'withImages']),
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
  private async accessTokenAsHeaders(accessToken?: string) {
    const headers: Record<string, string> = {}
    const accessTokenValue =
      (accessToken ?? this.#accessToken.length > 1)
        ? this.#accessToken
        : await this.getAccessToken()
    if (accessTokenValue !== undefined) {
      headers['authorization'] = `Bearer ${accessTokenValue}`
    }
    return headers
  }

  // @todo(types)
  private async getAccessToken() {
    const basic = Buffer.from(`${this.#clientId}:${this.#clientSecret}`).toString(
      'base64',
    )
    const res = await this.#fetch(URL.TOKEN, {
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: this.#refreshToken,
      }),
      cache: 'no-cache',
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
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
  private async getArtistsGenres(args: WithAccessToken<QueryProps>) {
    const res: any = await this.request({
      accessToken: args?.accessToken,
      body: '',
      method: 'GET',
      path: ENDPOINTS.ARTISTS,
      query: _omit(args, ['accessToken', 'withImages']),
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
      const { getImage } = await import('./utils/index.js')
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
      const { getImage } = await import('./utils/index.js')
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
        const { getImage } = await import('./utils/index.js')
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
  public async request({
    accessToken,
    body,
    method,
    path,
    query,
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

    // @todo(NICE-129) eslint
    // eslint-disable-next-line no-useless-catch
    try {
      // @todo(timeout)
      const response = await this.#fetch(url.toString(), {
        agent: this.#agent,
        body: bodyAsJsonString,
        headers,
        method,
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
}

export default Client
export type { ClientProps, CredentialProps }
