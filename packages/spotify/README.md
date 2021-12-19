# `@jeromefitz/spotify`

Wrapper stuff for [`jeromefitzgerald.com`](https://jeromefitzgerald.com).

## 🛠️ Usage

Must provide:

```ts
const {
  SPOTIFY_CLIENT_ID: clientId,
  SPOTIFY_CLIENT_SECRET: clientSecret,
  SPOTIFY_REFRESH_TOKEN: refreshToken,
} = process.env

const credentials = {
  clientId,
  clientSecret,
  refreshToken,
}

const SPOTIFY: SpotifyApiProps = new SpotifyApi()
SPOTIFY.setCredentials(credentials)
```

Before making any `SPOTIFY.*` calls.

Of which there are:

- `getNowPlaying`: Current Track
- `getTopArtists`: Top Artists
- `getTopTracks`: Top Tracks

## ✨️ Customizations

### 🧑‍🎨️ `artist`

For a `track` we create an `artist` key that maps across all available `artists[artist.name]`

### 🖼️ `withImages`

If this is passed we dynamically use `plaiceholder` to add an `image` key to:

- `getNowPlaying`: `album`
- `getTopArtists`: `artist`
- `getTopTracks`: `album`
