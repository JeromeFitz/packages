# `@jeromefitz/packages`

## 🛠️ Overview

- 😺️ [`yarn workspaces`](https://classic.yarnpkg.com/en/docs/cli/workspaces) (v1)
- :octocat: [`GitHub Actions`](https://github.com/features/actions) for CI/CD
  - Plus release management through npm
- 🔺️ [`turbo`](https://github.com/vercel/turborepo) for monorepo management
  - [x] cache: local / remote & team development
  - [x] cache: github actions
- 👷️ [`tsup`](https://github.com/egoist/tsup) for typescript builds (w/ _some_ config)
- 🤖️ [`Dependabot`](https://github.com/dependabot) for Patch + Minor Package Management
- 🤖️ [`Kodiak`](https://kodiakhq.com) to “Automate (our) GitHub Pull Requests’
- 🤖️ Automatic [`Semantic Versioning`](https://semver.org) w/ [`Conventional Commits`](https://www.conventionalcommits.org)
  - 😜️ Commits & Versioning (Release Notes) made more fun by a few of the packages in this repo

## 📦️ Packages

- 💅️ [`@jeromefitz/codestyle`](https://github.com/JeromeFitz/packages/tree/main/packages/codestyle): Preferred code formatting
  - `eslint|prettier|tsconfig` + `lint-staged`
  - 📝️ Should be reworked a bit to be more extending than importing
- 😜️ [`@jeromefitz/conventional-gitmoji`](https://github.com/JeromeFitz/packages/tree/main/packages/conventional-gitmoji): Map `gitmoji` to `conventional-commits`
  - `feat => ✨️`, `fix => 🐛️`, `etc.`
  - Keeps `semver` consistent by expanding both
- 🖼️ [`@jeromefitz/design-system`](https://github.com/JeromeFitz/packages/tree/main/packages/design-system): Design System built off/ from [`radix-ui`](https://www.radix-ui.com)
  - Major props to the [`@radix-ui`](https://github.com/radix-ui) team as this is 🍽️ of sorts
  - Note must transpile for use with `next`
  - 🚀️ Live: [`jeromefitzgerald.com`](https://jeromefitzgerald.com)
- 🛠️ [`@jeromefitz/git-cz`](https://github.com/JeromeFitz/packages/tree/main/packages/git-cz): cli prompt for conventional commits
  - `gitmoji` theme (though can also turn off)
  - No one needs to remember all the different types
  - Plus formats your commit message for you 😅️
- 🗃️ [`@jeromefitz/notion`](https://github.com/JeromeFitz/packages/tree/main/packages/notion): API (hyper-customized `@notionhq/client`) for [`Notion`](https://www.notion.so)
  - 🚀️ Live: [`jeromefitzgerald.com`](https://jeromefitzgerald.com)
- :octocat: [`@jeromefitz/scripts`](https://github.com/JeromeFitz/packages/tree/main/packages/scripts): :octocat: scripts that are used to set up repos and for CI/CD
- 👷️ [`@jeromefitz/semantic`](https://github.com/JeromeFitz/packages/tree/main/packages/semantic): Automatic Semantic Versioning through [`semantic-release`](https://github.com/semantic-release/semantic-release)
  - 📝️ Should be reworked a bit to be more extending than importing
- 🔒️ [`@jeromefitz/semantic-config`](https://github.com/JeromeFitz/packages/tree/main/packages/semantic-config): Internal configuration for `turbo|tsup` for publishing to `npm` for all of thes packages
- 🧑‍🎤️ [`@jeromefitz/spotify`](https://github.com/JeromeFitz/packages/tree/main/packages/spotify): API for access to `now-playing|top-artists|top-tracks`.
  - Handles those w/ some customizations for imagery and more.
  - 🚀️ Live: [`jeromefitzgerald.com/music`](https://jeromefitzgerald.com/music)
- 🧰️ [`@jeromefitz/utils`](https://github.com/JeromeFitz/packages/tree/main/packages/utils): Scripts that are generically re-used throughout

There is also:

- 💽️ [`@jeromefitz/dotfiles`](https://github.com/JeromeFitz/dotfiles): Which is outside of this repo
  - zsh + homebrew computer setup

## 💚️ CI

- 🌃️ **Weekly**: Run `semantic-release` on `main` for any merges that took place
  - Does not need `[build]|[b]` flag
- ⚗️ **Pull Request**: Run `lint` on any PR
- 🔀️ **Push**: Extra check if commit has `[build]` within its message to trigger `semantic-release` manually (still must meet requirements to create a build and have `semver` conventional commits)
  - [ ] `[b]` as alternative
  - [x] pre-release management handled by `@jeromefitz/semantic-config`
