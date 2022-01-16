# `@jeromefitz/packages`

## 🛠️ Overview

- 😺️ `yarn workspaces` (v1)
- :octocat: `actions` for release management through npm
- 🔺️ `turbo` for monorepo management
- 👷️ `tsup` for typescript builds
- 🤖️ Dependabot for Patch + Minor Package Management
- 🤖️ Kodiak for Automerge of PRs via labels
- 🤖️ Automatic Semantic Versioning w/ Conventional Commits

## 📦️ Packages

- 💅️ [`@jeromefitz/codestyle`](https://github.com/JeromeFitz/packages/tree/main/packages/codestyle): Preferred code formatting (`eslint|prettier|tsconfig`)
  - 📝️ Should be reworked a bit to be more extending than importing
- 😜️ [`@jeromefitz/conventional-gitmoji`](https://github.com/JeromeFitz/packages/tree/main/packages/conventional-gitmoji): Map `gitmoji` to `conventional-commits` for `@jeromefitz/git-cz`
  - Allows people to use either while maintaining `semver`
- 🛠️ [`@jeromefitz/git-cz`](https://github.com/JeromeFitz/packages/tree/main/packages/git-cz): cli prompt for conventional commits (w/ `gitmoji`)
- 🗃️ [`@jeromefitz/notion`](https://github.com/JeromeFitz/packages/tree/main/packages/notion): API (hyper-customized `@notionhq/client`) for:[`jeromefitzgerald.com`](https://jeromefitzgerald.com)
- :octocat: [`@jeromefitz/scripts`](https://github.com/JeromeFitz/packages/tree/main/packages/scripts): :octocat: scripts that are used to set up repos and for CI/CD (caution not maintained)
- 👷️ [`@jeromefitz/semantic`](https://github.com/JeromeFitz/packages/tree/main/packages/semantic): Semantic Versioning
  - 📝️ Should be reworked a bit to be more extending than importing
- 🏗️ [`@jeromefitz/semantic-config`](https://github.com/JeromeFitz/packages/tree/main/packages/semantic-config): Internal configuration for `turbo|tsup` for publishing to `npm`.
- 🧑‍🎤️ [`@jeromefitz/spotify`](https://github.com/JeromeFitz/packages/tree/main/packages/spotify): API for access to `now-playing|top-artists|top-tracks`: [`jeromefitzgerald.com/music`](https://jeromefitzgerald.com/music)
- 🧰️ [`@jeromefitz/utils`](https://github.com/JeromeFitz/packages/tree/main/packages/utils): Scripts that are generically re-used throughout

There is also:

- 💽️ [`@jeromefitz/dotfiles`](https://github.com/JeromeFitz/dotfiles): Which is outside of this repo

## 💚️ CI

- 🌃️ **Nightly**: Run `semantic-release` on `main` for any merges that took place
  - This moved to weekly I believe to limit the constant bumps
- ⚗️ **Pull Request**: Run `lint` on any PR
- 🔀️ **Push**: Extra check if commit has `[build]` within its message to trigger `semantic-release` manually (still must meet requirements to create a build and have `semver` conventional commits)
