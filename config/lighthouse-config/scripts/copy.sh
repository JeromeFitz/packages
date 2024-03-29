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
# @custom(build) prettier
###

cp ./src/*.cjs ./dist

if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i "" "s|src/lighthouse|lighthouse|g" dist/package.json
else
  sed -i -e "s|src/lighthouse|lighthouse|g" dist/package.json
fi
