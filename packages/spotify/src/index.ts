/* eslint-disable complexity */
import type { Agent } from 'http'
import { URL, URLSearchParams } from 'url'

import { asyncForEach, noop as _noop } from '@jeromefitz/utils'
import fetch from 'isomorphic-unfetch'
import _omit from 'lodash/omit'

import {
  ENDPOINTS,
  // LIMIT,
  // OFFSET,
  OMIT_FIELDS,
  PACKAGE_NAME,
  PACKAGE_VERSION,
} from './constants'

type TimeRangeProps = 'long_term' | 'medium_term' | 'short_term'

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

type GetProps = {
  nowPlaying({ withImages: boolean }): any
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

export interface ClientOptions {
  timeoutMs?: number
  baseUrl?: string
  spotifyVersion?: string
  fetch?: any // @todo(types)
  /** Silently ignored in the browser */
  agent?: Agent
  clientId: string
  clientSecret: string
  refreshToken: string
  accessToken: string
}

class Client {
  #prefixUrl: string
  #spotifyVersion: string
  #fetch: any // @todo(types)
  #agent: Agent | undefined
  #userAgent: string
  //
  #clientId: string
  #clientSecret: string
  #refreshToken: string
  #accessToken: string

  static readonly defaultSpotifyVersion = 'v1'

  public constructor(options: ClientOptions) {
    this.#prefixUrl =
      (options?.baseUrl ?? 'https://api.spotify.com') +
      `/${Client.defaultSpotifyVersion}/`
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

  /**
   * Sends a request.
   *
   * @param path
   * @param method
   * @param query
   * @param body
   * @returns
   */
  public async request({
    path,
    method,
    query,
    body,
    accessToken,
  }: // @todo(types)
  any): Promise<any> {
    // @todo(logging) INFO => request start
    const bodyAsJsonString =
      !body || Object.entries(body).length === 0 ? undefined : JSON.stringify(body)

    const url = new URL(`${this.#prefixUrl}${path}`)
    if (query) {
      for (const [key, value] of Object.entries(query)) {
        if (value !== undefined) {
          url.searchParams.append(key, String(value))
        }
      }
    }

    // @todo(types)
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

      // @todo(types)
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

  public readonly get: GetProps = {
    nowPlaying: async (args: WithAccessToken<QueryProps>): Promise<any> => {
      // @todo(types)
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
    topArtists: async (args: WithAccessToken<QueryProps>): Promise<any> => {
      // @todo(types)
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
    topTracks: async (args: WithAccessToken<QueryProps>): Promise<any> => {
      // @todo(types)
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

  private async getArtistsGenres(args: WithAccessToken<QueryProps>) {
    const _genres: any = await this.request({
      path: ENDPOINTS.ARTISTS,
      method: 'GET',
      query: _omit(args, ['accessToken', 'withImages']),
      body: '',
      accessToken: args?.accessToken,
    })

    return _genres.artists.map(({ genres }) => genres).flat()
  }

  private async getNowPlaying({ data, withImages }) {
    if (!data) return { status: 404 }
    const { item } = data
    const { album: _album, artists } = item
    const track = _omit(item, OMIT_FIELDS)
    const album = _omit(_album, OMIT_FIELDS)
    const artist = artists.map(({ name }) => name).join(', ')
    const genres = await this.getArtistsGenres({
      ids: data?.item?.artists
        .map(({ id }) => id)
        .join('%2C')
        .replace(',', '%2C'),
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
      const { getImage } = await import('./utils')
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

  private async getTopArtists({ data, withImages }) {
    let _data = data

    if (withImages) {
      // @refactor(spotify) if this moves out of `index.ts`
      // const { asyncForEach } = await import('@jeromefitz/utils')
      const _artists: string[] = []
      // @todo(types)
      await asyncForEach(data.items, async (artist: any) => {
        const url = artist?.images[0].url
        const { getImage } = await import('./utils')
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

  private async getTopTracks({ data, withImages }) {
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
      const genres = await this.getArtistsGenres({
        ids: artists
          .map(({ id }) => id)
          .join('%2C')
          .replace(',', '%2C'),
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
        const { getImage } = await import('./utils')
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

  private async getAccessToken() {
    const basic = Buffer.from(`${this.#clientId}:${this.#clientSecret}`).toString(
      'base64'
    )
    const res = await this.#fetch(ENDPOINTS.TOKEN, {
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
