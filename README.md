# Packages

This is a place for customized forks/ packages for `@jeromefitz`.

I would say use at your own risk, and if we ever need to promote one of these out for better OSS Coverage we will.

## Overview

- 😺️ `yarn workspaces` (v1)
- 🐉️ `lerna` (though not used currently)
- :octocat: `actions` for release management through npm
- 🤖️ Depandabot for Patch + Minor Package Management
- 🤖️ Kodiak for Automerge of PRs via Labels and Rebasing

## CI Testing

- 🌃️ Nightly: Run `semantic-release` on `main` for any merges that took place
- ⚗️ Pull Request: Run `lint` on any PR
- 🔀️ Push: Extra check if last line of subject of commit is `[build]` to trigger `semantic-release` manually
