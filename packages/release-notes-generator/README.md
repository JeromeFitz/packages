# @jeromefitz/release-notes-generator

Heavily customized fork (_cannot_ stress that enough) of [`conventional-changelog`](https://github.com/conventional-changelog/conventional-changelog) and [`release-notes-generator`](https://github.com/semantic-release/release-notes-generator).

This moves away from Handlebars into TypeScript and is currently hyper-specific to GitHub only. 🐙

```sh
[
  '@jeromefitz/release-notes-generator',
  {
    config: '@jeromefitz/conventional-gitmoji',
  },
]
```

## Installation

```sh
pnpm add @jeromefitz/release-notes-generator @jeromefitz/conventional-gitmoji --save-dev
```
