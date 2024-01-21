#!/usr/bin/env bash

if [[ -d ./node_modules ]]; then rm -rf ./node_modules; fi

if [[ -d ./config/eslint-config/node_modules ]]; then rm -rf ./config/eslint-config/node_modules; fi
if [[ -d ./config/tsconfig/node_modules ]]; then rm -rf ./config/tsconfig/node_modules; fi
if [[ -d ./config/lint-staged/node_modules ]]; then rm -rf ./config/lint-staged/node_modules; fi

# if [[ -d ./packages/codestyle/node_modules ]]; then rm -rf ./packages/codestyle/node_modules; fi
if [[ -d ./packages/ccommit/node_modules ]]; then rm -rf ./packages/ccommit/node_modules; fi
if [[ -d ./packages/conventional-gitmoji/node_modules ]]; then rm -rf ./packages/conventional-gitmoji/node_modules; fi
if [[ -d ./packages/design-system/node_modules ]]; then rm -rf ./packages/design-system/node_modules; fi
if [[ -d ./packages/notion/node_modules ]]; then rm -rf ./packages/notion/node_modules; fi
if [[ -d ./packages/release-notes-generator/node_modules ]]; then rm -rf ./packages/release-notes-generator/node_modules; fi
if [[ -d ./packages/scripts/node_modules ]]; then rm -rf ./packages/scripts/node_modules; fi
if [[ -d ./packages/semantic/node_modules ]]; then rm -rf ./packages/semantic/node_modules; fi
if [[ -d ./packages/spotify/node_modules ]]; then rm -rf ./packages/spotify/node_modules; fi
if [[ -d ./packages/utils/node_modules ]]; then rm -rf ./packages/utils/node_modules; fi
if [[ -d ./pnpm-lock.yaml ]]; then rm  ./pnpm-lock.yaml; fi
if [[ -d ./yarn.lock ]]; then rm  ./yarn.lock; fi
