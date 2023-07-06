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
# @custom(build) jest-presets
###

mkdir -p ./dist/jest/node
cp ./src/jest/node/* ./dist/jest/node

if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i "" "s|src/index|index|g" dist/package.json
else
  sed -i -e "s|src/index|index|g" dist/package.json
fi

if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i "" "s|src/jest|jest|g" dist/package.json
else
  sed -i -e "s|src/jest|jest|g" dist/package.json
fi
