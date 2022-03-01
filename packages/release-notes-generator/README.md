# @jeromefitz/release-notes-generator

Heavily customized fork (_cannot_ stress that enough) of [`conventional-changelog`](https://github.com/conventional-changelog/conventional-changelog) and [`release-notes-generator`](https://github.com/semantic-release/release-notes-generator).

This moves away from Handlebars into TypeScript and is currently hyper-specific to GitHub only. :octocat:

May move to `remark` once `semantic-release` is ESM.

```sh
[
  '@jeromefitz/release-notes-generator',
  {
    config: '@jeromefitz/conventional-gitmoji',
  },
]
```

## Installation

Also add the `changelog-config` customization:

```sh
yarn add @jeromefitz/release-notes-generator @jeromefitz/conventional-gitmoji
```
