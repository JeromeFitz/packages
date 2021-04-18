# @jeromefitz/semantic

## Overview

- ✨️ Conventional Commit CLI ([`@jeromefitz/git-cz`](https://github.com/JeromeFitz/git-cz))
- 🎋️ Branch Name Generator ([`@jeromefitz/git-cz`](https://github.com/JeromeFitz/git-cz))
- 🤖️ Semantic Versioning ([`semantic-release`](https://github.com/semantic-release/semantic-release))

## Installation

```bash
yarn add @jeromefitz/semantic --dev
```

This extends [`@jeromefitz/git-cz`](https://github.com/JeromeFitz/git-cz) please be sure to add to your `package.json`:

```json
  "config": {
    "commitizen": {
      "path": "git-cz"
    }
  }
```

## Overrides

### Conventional Commit

This extends [`@jeromefitz/git-cz`](https://github.com/JeromeFitz/git-cz) so you can follow through the `README` there.

Quickly though you can look at `./changelog.config.js` in this repo to see how to override.

### Semantic Release

`./release.config.js`

```js
const release = require('@jeromefitz/semantic/release.config.js')
module.exports = {
  ...release,
}
```

#### Example

```js
const release = require('@jeromefitz/semantic/release.config.js')

const _extends = ['semantic-release-commit-filter']
const plugins = release.plugins

const pluginsOverride = [
  [
    '@semantic-release/npm',
    {
      npmPublish: false,
    },
  ],
  [
    '@semantic-release/github',
    { labels: false, releasedLabels: false, successComment: false },
  ],
]

/**
 * @refactor This mutates plugins which is not ideal
 */
plugins.map((plugin, pluginIndex) => {
  const pluginName = plugin[0]
  pluginsOverride.map((pluginOverride) => {
    pluginName === pluginOverride[0] ? (plugins[pluginIndex] = pluginOverride) : null
  })
})

module.exports = {
  ...release,
  extends: _extends,
  plugins,
}
```

## Scripts

### Branch Names

Add a script in `package.json`:

```json
  "scripts": {
    "branch": "git-cz --branch --allow-empty"
  }
```

Running `yarn branch` will then trigger the CLI to create branch for you based on

### CI/CD

Add a script in `package.json` as this extends [`semantic-release`](https://github.com/semantic-release/semantic-release):

```json
  "scripts": {
    "semantic-release": "semantic-release"
  }
```

Be sure to allow for Git + GitHub access so [`semantic-release`](https://github.com/semantic-release/semantic-release) can create commits and more actions on your repo.

Configured in this repo via `./github/workflows/semantic-release.yml`.
