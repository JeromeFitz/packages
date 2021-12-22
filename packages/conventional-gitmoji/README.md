# @jeromefitz/conventional-gitmoji

🌉️ A bridge between `gitmoji` and `conventional-commits` configured for `semantic-release`.

## Usage

```sh
yarn install @jeromefitz/conventional-gitmoji
```

```ts
import { releaseRules, typeSpecs, types } from '@jeromefitz/conventional-gitmoji`
```

- `releaseRules`: informs `@semantic-release/commit-analyzer`
- `typeSpecs`: informs `@semantic-release/release-notes-generator` (via `writerOpts`)
  - `@hack`: This informs three different ways to ensure we catch the change from `gitmoji` to `conventional`
- `types`: informs `@jeromefitz/git-cz` for the `gitmoji` theme.

## Overview

### 😄️ gitmoji

This maps `gitmoji` to an equivalent `conventional-commit`.

**⚗️ Example(s):**

- ✨️ => `feat`
- 🐛️ => `fix`
- 🚑️ => `hotfix`

### 📝️ conventional-commits

This expands on the original `conventional-commits` nomenclature to account for the multitude coming from `gitmoji`

**⚗️ Example(s):**

- ⚗️ (gitmoji)
  - `alembic` (emoji code)
  - `experiement` (conventional)
- 🤡️ (gitmoji)
  - `clown-face` (emoji code)
  - `mock` (conventional)
- 🚨️ (gitmoji)
  - `rotating-light` (emoji code)
  - `lint` (conventional)

### 🚀️ semantic-release

Also adds `semver` and `releaseNotes` keys to each type to inform `@jeromefitz/semantic` how to handle each commit type (and if it is a convential branch type).

**⚗️ Example(s):**

```json
{
  "experiment": {
    "branch": false,
    "code": ":alembic:",
    "commit": "experiment",
    "description": "Perform experiments.",
    "emoji": "⚗️",
    "entity": "&#128248;",
    "name": "alembic",
    "releaseNotes": false,
    "section": "Perform experiments.",
    "semver": "patch"
  },
  "feat": {
    "branch": "feature",
    "code": ":sparkles:",
    "commit": "feat",
    "description": "Introduce new features.",
    "emoji": "✨",
    "entity": "&#x2728;",
    "name": "sparkles",
    "releaseNotes": true,
    "section": "Introduce new features.",
    "semver": "minor"
  },
  "log-add": {
    "branch": false,
    "code": ":loud_sound:",
    "commit": "log-add",
    "description": "Add or update logs.",
    "emoji": "🔊",
    "entity": "&#128266;",
    "name": "loud-sound",
    "releaseNotes": false,
    "section": "Add or update logs.",
    "semver": null
  }
}
```
