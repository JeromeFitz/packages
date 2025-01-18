# `@jeromefitz/spotify`

Custom API for [`jeromefitzgerald.com/music`](https://jeromefitzgerald.com/music).

- `nowPlaying`: Current Track
- `recentlyPlayed`: Recently Played
- `topArtists`: Top Artists
- `topTracks`: Top Tracks

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

const spotify: ClientProps = new Client({ ...credentials })
```

This will get the Authorization Token for the Bearer and consistently apply for API calls on your behalf.

📝️ **Note:** Need to verify w. `2.0.1` release what happens if the token expires 😅️ (before we were getting the token on every request)

Following functions are exposed via `spotify.get.*`:

- `nowPlaying`: Current Track
- `recentlyPlayed`: Recently Played
- `topArtists`: Top Artists
- `topTracks`: Top Tracks

**Example:**

```tsx
spotify.get.topArtists({
  limit,
  offset,
  time_range,
  withImages: true,
})
```

## ✨️ Customizations

### 🧑‍🎤️ `artist`

For a `track` we create an `artist` key that maps across all available `artists[artist.name]`.

### 🖼️ `withImages`

If this is passed we dynamically use `plaiceholder` to add an `image` key to:

- `nowPlaying`: `album`
- `recentlyPlayed`: `album`
- `topArtists`: `artist`
- `topTracks`: `album`

Only call this via an `API` call.
