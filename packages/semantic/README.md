# @jeromefitz/semantic

## Overview

- 🤖️ Semantic Versioning ([`semantic-release`](https://github.com/semantic-release/semantic-release))

## Installation

```bash
pnpm add @jeromefitz/semantic --save-dev
```

### Semantic Release

`./release.config.js`

Custom values:

- `enableGit?: boolean`
- `enableGithub?: boolean`
- `enableNpm?: boolean`
- `enableReleaseNotes?: boolean`
- `enableReleaseNotesCustom?: boolean`

And then the rest of the traditional configuration values for `semantic-release` and `conventional-changelog`.

#### Example

You can look at this monorepo as it re-uses a lot of code throughout via `release.config`

```js
const { getConfig } = require("@jeromefitz/semantic");

const { name } = require("./package.json");

const configPassed = {
  tagFormat: `${name}@\${version}`,
};

const config = getConfig(configPassed);

module.exports = config;
```

## Scripts

### CI/CD

Add a script in `package.json` as this extends [`semantic-release`](https://github.com/semantic-release/semantic-release):

```json
  "scripts": {
    "semantic-release": "semantic-release"
  }
```

Be sure to allow for Git + GitHub access so [`semantic-release`](https://github.com/semantic-release/semantic-release) can create commits and more actions on your repo.
