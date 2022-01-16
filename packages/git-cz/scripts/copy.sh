#!/bin/bash

###
# @note(build): NPM Publishes from `./dist`
###

cp package.json ./dist/
cp README.md ./dist/
cp ../../LICENSE ./dist/

###
# @note(build): Replace `dist/index` w/ `index`
###

sed -i "" "s|dist/index|index|g" dist/package.json

###
# @custom(build)
###

sed -i "" "s|dist/cli|cli|g" dist/package.json
