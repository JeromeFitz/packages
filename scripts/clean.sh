#!/usr/bin/env bash

if [[ -d ./node_modules ]]; then rm -rf ./node_modules; fi
if [[ -d ./packages/codestyle/node_modules ]]; then rm -rf ./packages/codestyle/node_modules; fi
if [[ -d ./packages/conventional-gitmoji/node_modules ]]; then rm -rf ./packages/conventional-gitmoji/node_modules; fi
if [[ -d ./packages/design-system/node_modules ]]; then rm -rf ./packages/design-system/node_modules; fi
if [[ -d ./packages/git-cz/node_modules ]]; then rm -rf ./packages/git-cz/node_modules; fi
if [[ -d ./packages/notion/node_modules ]]; then rm -rf ./packages/notion/node_modules; fi
if [[ -d ./packages/release-notes/node_modules ]]; then rm -rf ./packages/release-notes/node_modules; fi
if [[ -d ./packages/scripts/node_modules ]]; then rm -rf ./packages/scripts/node_modules; fi
if [[ -d ./packages/semantic/node_modules ]]; then rm -rf ./packages/semantic/node_modules; fi
if [[ -d ./packages/spotify/node_modules ]]; then rm -rf ./packages/spotify/node_modules; fi
if [[ -d ./packages/utils/node_modules ]]; then rm -rf ./packages/utils/node_modules; fi
if [[ -d ./yarn.lock ]]; then rm  ./yarn.lock; fi
