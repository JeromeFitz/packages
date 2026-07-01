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

###
# @note(build): dist/ is the package root at publish time; these fields
# are either meaningless there or actively wrong (e.g. "files": ["dist"]
# would tell npm to look for a "dist" folder inside dist itself)
###
jq 'del(.publishConfig, .files, .scripts, .devDependencies)' dist/package.json > dist/package.json.tmp
mv dist/package.json.tmp dist/package.json
