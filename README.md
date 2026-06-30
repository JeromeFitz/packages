# `@jeromefitz/packages`

Monorepo (via [📦 `pnpm`](https://github.com/pnpm/pnpm) and [🔺 `turbo`](https://github.com/vercel/turborepo)) for tools I use frequently in various projects, people, and companies I work with.

- [📦️ Packages](#%EF%B8%8F-packages)
- [👷️ CI/CD Overview](#%EF%B8%8F-cicd-overview)
- [🐙 CI/CD Workflows](#%F0%9F%90%99-cicd-workflows)

## 📦️ Packages

### 🔧 Configuration

- [`@jeromefitz/tsconfig`](https://github.com/JeromeFitz/packages/tree/main/config/tsconfig)
- [`@jeromefitz/oxlint-config`](https://github.com/JeromeFitz/packages/tree/main/config/oxlint-config) _(local only, not published)_

### ⚡ Release Management Tools

- [`ccommit`](https://github.com/JeromeFitz/packages/tree/main/packages/ccommit): conventional commit generator that interprets commit types from `gitmoji` through `conventional-commits`
- [`@jeromefitz/conventional-gitmoji`](https://github.com/JeromeFitz/packages/tree/main/packages/conventional-gitmoji): Maps [`gitmoji`](https://gitmoji.dev) to [`conventional-commits`](https://www.conventionalcommits.org) w/ semver recognition:
  - `feat => ✨️`
  - `fix => 🐛️`
  - `ci => 👷️`
  - `fix-ci => 💚️`
  - `...`
- [`@jeromefitz/semantic`](https://github.com/JeromeFitz/packages/tree/main/packages/semantic): Automatic Semantic Versioning through [`semantic-release`](https://github.com/semantic-release/semantic-release) with support for `gitmoji`.
- [`@jeromefitz/release-notes-generator`](https://github.com/JeromeFitz/packages/tree/main/packages/release-notes-generator): You guessed it, a custom release-notes-generator
  - This does not use `handlebars` basically.
  - 📝 See the latest output at [the releases page](https://github.com/JeromeFitz/packages/releases).

### 🎲 Misc

- [`@jeromefitz/notion`](https://github.com/JeromeFitz/packages/tree/main/packages/notion)
  - 🗃️ API (hyper-customized `@notionhq/client`) for [`Notion`](https://www.notion.so)
  - 🚀️ Live Example: [`jeromefitzgerald.com`](https://jeromefitzgerald.com)
  - 🔜 `next-notion`
- 🐙 [`@jeromefitz/scripts`](https://github.com/JeromeFitz/packages/tree/main/packages/scripts)
  - 🐙 scripts that are used to set up repos and for CI/CD
- 🧰️ [`@jeromefitz/utils`](https://github.com/JeromeFitz/packages/tree/main/packages/utils)
  - Scripts that are generically re-used throughout

### 🎁 Bonus

- [`@jeromefitz/dotfiles`](https://github.com/JeromeFitz/dotfiles): Separate from this repository
  - zsh + homebrew computer setup

### 🪦 Deprecated

- `@jeromefitz/codestyle`
- `@jeromefitz/design-system`
- `@jeromefitz/eslint-config`
- `@jeromefitz/git-cz`
- `@jeromefitz/jest-config`
- `@jeromefitz/jest-presets`
- `@jeromefitz/lighthouse-config`
- `@jeromefitz/lint-staged`
- `@jeromefitz/prettier-config`
- `@jeromefitz/spotify`

## 👷️ CI/CD Overview

- 📦 [`pnpm workspaces`](https://pnpm.io/pnpm-workspace_yaml)
- 🐙 [`GitHub Actions`](https://github.com/features/actions) for CI/CD
  - Plus release management through npm
- 🔺️ [`turbo`](https://github.com/vercel/turborepo) for monorepo management
  - [x] cache: local / remote & team development
  - [x] cache: github actions
- 👷️ [`tsdown`](https://github.com/rolldown/tsdown) for typescript builds (w/ _some_ config)
- 🤖️ [`Renovate`](https://github.com/renovatebot/renovate) for Patch + Minor Package Management
- 🤖️ [`Kodiak`](https://kodiakhq.com) to “Automate (our) GitHub Pull Requests’
- 🤖️ Automatic [`Semantic Versioning`](https://semver.org) w/ [`Conventional Commits`](https://www.conventionalcommits.org)
  - 😜️ Commits & Versioning (Release Notes) made more fun by a few of the packages in this repo

## 🐙 CI/CD Workflows

- `pull`: PRs into `main`
- `push`: `main` + Ability for `x.y.z-canary.#` builds via: `./release.config.js`
- `weekly`: If `main` did not trigger a build (**Renovate**/`[skip ci]`) check to see if it should

## 🥳 Contributing

If you would like to opt-out of the `git hooks` please look at `.env.example`.

Normally, these would be opt-in and may change to that in the future.
