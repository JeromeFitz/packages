# `@jeromefitz/packages`

Monorepo (via [📦 pnpm](https://github.com/pnpm/pnpm) and [🔺 turbo](https://github.com/vercel/turborepo)) for tools I use frequently in various projects, people, and companies I work with.

- [📦️ Packages](#%EF%B8%8F-packages)
- [👷️ CI/CD Overview](#%EF%B8%8F-cicd-overview)
- [:octocat: CI/CD Workflows](#octocat-cicd-workflows)

## 📦️ Packages

### 🔧 Configuration

Originally was all-in-one as `@jeromefitz/codestyle`, these have been broken out for separate maintainability and ala-carte implementation.

**Spoiler:** They are opinionated, but can be overriden, extended, or ignored. 🙈

- [`@jeromefitz/eslint-config`](https://github.com/JeromeFitz/packages/tree/main/config/eslint-config)
- [`@jeromefitz/lint-staged`](https://github.com/JeromeFitz/packages/tree/main/config/lint-staged)
- [`@jeromefitz/prettier-config`](https://github.com/JeromeFitz/packages/tree/main/config/prettier-config)
- [`@jeromefitz/tsconfig`](https://github.com/JeromeFitz/packages/tree/main/config/tsconfig)

### 🖼️ Design System

Built with [`radix-ui`](https://www.radix-ui.com) and [`stitches`](https://stitches.dev). A tree-shakeable design system that you can use as much of, or as little of, as you would like.

- [`@jeromefitz/design-system`](https://github.com/JeromeFitz/packages/tree/main/packages/design-system)
  - 🏆 Major props to the [`@radix-ui`](https://github.com/radix-ui) team as this is 🍽️ of sorts.
  - 📘 [`Storybook`](https://storybook.js.org) is included but not all the way there. May
  - 🚀 Code Example: [`@jeromefitz/websites`](https://github.com/JeromeFitz/websites)
  - 🚀️ Live Example: [`jeromefitzgerald.com`](https://jeromefitzgerald.com)

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
- [`@jeromefitz/spotify`](https://github.com/JeromeFitz/packages/tree/main/packages/spotify)
  - 🧑‍🎤️ API to gather data on:
    - `now-playing|top-artists|top-tracks`
  - 🖼️ Plus imagery customizations via [plaiceholder](https://plaiceholder.co)
  - 🚀️ Live Example: [`jeromefitzgerald.com/music`](https://jeromefitzgerald.com/music)
- 🧰️ [`@jeromefitz/utils`](https://github.com/JeromeFitz/packages/tree/main/packages/utils)
  - Scripts that are generically re-used throughout

### 🔜 Coming Soon(ish)

- `next-notion`
  - Next.js implementation for `@jeromefitz/notion`

### 🎁 Bonus

- [`@jeromefitz/dotfiles`](https://github.com/JeromeFitz/dotfiles): Separate from this repository
  - zsh + homebrew computer setup

### 🪦 Deprecated

- [`@jeromefitz/git-cz`](https://github.com/JeromeFitz/packages/tree/main/packages/git-cz)
  - cli prompt for (expanded) [**conventional commits**](https://www.conventionalcommits.org) and **conventional branches** as no one needs to remember all the different types
    - 📝 Formats your commit message for you
    - 🖲️ Integrate with your Issue Tracking System
    - 🔢 Customize which commit types get which semver

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
