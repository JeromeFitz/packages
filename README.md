# `@jeromefitz/packages`

Monorepo (via [📦 pnpm](https://github.com/pnpm/pnpm) and [🔺 turbo](https://github.com/vercel/turborepo)) for tools I use frequently in various projects, people, and companies I work with.

- [📦️ Packages](#%EF%B8%8F-packages)
- [👷️ CI/CD Overview](#%EF%B8%8F-cicd-overview)
- [:octocat: CI/CD Workflows](#octocat-cicd-workflows)

## 📦️ Packages

### 🔧 Configuration

Originally was all-in-one as `@jeromefitz/codestyle`, these have been broken out for separate maintainability and ala-carte implementation.

**Spoiler:** They are opinionated, but can be overriden, extended, or ignored. 🙈

- [`@jeromefitz/lint-staged`](https://github.com/JeromeFitz/packages/tree/main/config/lint-staged)
- [`@jeromefitz/prettier-config`](https://github.com/JeromeFitz/packages/tree/main/config/prettier-config)
- [`@jeromefitz/tsconfig`](https://github.com/JeromeFitz/packages/tree/main/config/tsconfig)

### ⚡ Release Management Tools

- [`ccommit`](https://github.com/JeromeFitz/packages/tree/main/packages/ccommit)
  - conventional commit generator that interprets commit types from `gitmoji` through `conventional-commits`
- [`@jeromefitz/conventional-gitmoji`](https://github.com/JeromeFitz/packages/tree/main/packages/conventional-gitmoji)
  - Map [`gitmoji`](https://gitmoji.dev) to [`conventional-commits`](https://www.conventionalcommits.org)
    - `feat => ✨️`
    - `fix => 🐛️`
    - `ci => 👷️`
    - `fix-ci => 💚️`
    - `...`
  - Allows you to keep `semver` consistent by expanding both
  - You _most likely_ do not need to use this, unless you are using this for your separate tooling. This is more of a configuration stop-gap for ...
- [`@jeromefitz/semantic`](https://github.com/JeromeFitz/packages/tree/main/packages/semantic)
  - Automatic Semantic Versioning through [`semantic-release`](https://github.com/semantic-release/semantic-release) with support for `gitmoji`.
- [`@jeromefitz/release-notes-generator`](https://github.com/JeromeFitz/packages/tree/main/packages/release-notes-generator)
  - You guessed it, a custom release-notes-generator.
  - 📝 See the latest output at [the releases page](https://github.com/JeromeFitz/packages/releases).

### 🎲 Misc

- [`@jeromefitz/notion`](https://github.com/JeromeFitz/packages/tree/main/packages/notion)
  - 🗃️ API (hyper-customized `@notionhq/client`) for [`Notion`](https://www.notion.so)
  - 🚀️ Live Example: [`jeromefitzgerald.com`](https://jeromefitzgerald.com)
- :octocat: [`@jeromefitz/scripts`](https://github.com/JeromeFitz/packages/tree/main/packages/scripts)
  - :octocat: scripts that are used to set up repos and for CI/CD
- 🧰️ [`@jeromefitz/utils`](https://github.com/JeromeFitz/packages/tree/main/packages/utils)
  - Scripts that are generically re-used throughout

### 🔜 Coming Soon(ish)

- `next-notion`
  - Next.js implementation for `@jeromefitz/notion`

### 🎁 Bonus

- [`@jeromefitz/dotfiles`](https://github.com/JeromeFitz/dotfiles): Separate from this repository
  - zsh + homebrew computer setup

### 🪦 Deprecated

- `@jeromefitz/eslint-config`
- `@jeromefitz/jest-config`
- `@jeromefitz/jest-presets`
- `@jeromefitz/lighthouse-config`
- `@jeromefitz/git-cz`
- `@jeromefitz/design-system`
- `@jeromefitz/spotify`

## 👷️ CI/CD Overview

- 📦 [`pnpm workspaces`](https://pnpm.io/pnpm-workspace_yaml)
- :octocat: [`GitHub Actions`](https://github.com/features/actions) for CI/CD
  - Plus release management through npm
- 🔺️ [`turbo`](https://github.com/vercel/turborepo) for monorepo management
  - [x] cache: local / remote & team development
  - [x] cache: github actions
- 👷️ [`tsdown`](https://github.com/rolldown/tsdown) for typescript builds (w/ _some_ config)
- 🤖️ [`Renovate`](https://github.com/renovatebot/renovate) for Patch + Minor Package Management
- 🤖️ [`Kodiak`](https://kodiakhq.com) to “Automate (our) GitHub Pull Requests’
- 🤖️ Automatic [`Semantic Versioning`](https://semver.org) w/ [`Conventional Commits`](https://www.conventionalcommits.org)
  - 😜️ Commits & Versioning (Release Notes) made more fun by a few of the packages in this repo

## :octocat: CI/CD Workflows

- ⚗️ `**pull**`:
  - Branch(es):
    - `main|canary|develop`
  - Script(s):
    - `lint|test|build`
- 🔀️ `**push**`:
  - Branch(es):
    - `main|canary|develop`
    - `(ci|feature|fix|refactor|release)/**`
  - Script(s):
    - `lint|test|build|semantic-release`
  - Note(s):
    - `[b]` necessary for `semantic-release`
      - Pre-relase branches (aka `!main`):
        - Handled in root `release.config`
        - Can be overriden in any package
    - `[b]` necessary for `build` when not on `main`
- 🌃️ `**weekly**`:
  - Branch(es):
    - `main`
  - Script(s):
    - `lint|test|build|semantic-release`
  - Note(s):
    - `[b]` not necessary for `semantic-release`

## 🥳 Contributing

If you would like to opt-out of the `git hooks` please look at `.env.example`.

Normally, these would be opt-in and may change to that in the future.
