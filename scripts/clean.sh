#!/usr/bin/env bash

if [[ -d ./node_modules ]]; then rm -rf ./node_modules; fi
if [[ -d ./packages/codestyle/node_modules ]]; then rm -rf ./packages/codestyle/node_modules; fi
if [[ -d ./packages/semantic/node_modules ]]; then rm -rf ./packages/semantic/node_modules; fi
if [[ -d ./yarn.lock ]]; then rm  ./yarn.lock; fi
