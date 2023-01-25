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
if [[ "$OSTYPE" == "darwin"* ]]; then
  if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i "" "s|dist/index|index|g" dist/package.json
else
  sed -i -e "s|dist/index|index|g" dist/package.json
fi
else
  sed -i -e "s|dist/index|index|g" dist/package.json
fi

###
# @custom(build)
###

cp ./src/*.json ./dist

if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i "" "s|dist/tsconfig|tsconfig|g" dist/package.json
else
  sed -i -e "s|dist/tsconfig|tsconfig|g" dist/package.json
fi
