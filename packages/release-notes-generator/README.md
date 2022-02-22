# @jeromefitz/release-notes-generator

⏏️ Eject from `@jeromefitz/release-notes`

This **_only_** adds Contributors to the end of the Release Notes.

There **_could_** be more here, but for now this is all it does.

Add the following to `release.config` **_after_** `@semantic-release/release-notes-generator`:

```sh
[
  '@jeromefitz/release-notes-generator',
  {
    config: '@jeromefitz/conventional-gitmoji',
    parserOpts,
    writerOpts,
  },
]
```

For now, you must pass the `parserOpts|writerOpts` (from `@jeromefitz/conventional-gitmoji` 🥴️) to this plugin.

The `release-notes` fork has all the additional logic to grab things, but it is way too much at the moment.
