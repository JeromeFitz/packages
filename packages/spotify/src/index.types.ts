type CredentialKey = 'accessToken' | 'clientId' | 'clientSecret' | 'refreshToken'
type TimeRangeProps = 'long_term' | 'medium_term' | 'short_term'

interface QueryProps {
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

// @todo(types)
interface SpotifyApiProps {
  _credentials: any
  setCredentials({ clientId, clientSecret, refreshToken }: CredentialProps): any
  //
  getNowPlaying({ withImages: boolean }): any
  getTopArtists({ limit, offset, time_range, withImages }: QueryProps): any
  getTopTracks({ limit, offset, time_range, withImages }: QueryProps): any
}

export type {
  CredentialKey,
  CredentialProps,
  QueryProps,
  SpotifyApiProps,
  TimeRangeProps,
}
