#!/bin/bash

###
# @note(build): NPM Publishes from `./dist`
###

cp package.json ./dist/
cp release.config.cjs ./dist/
cp README.md ./dist/
cp ../../LICENSE ./dist/

###
# @note(build): Replace `dist/index` w/ `index`
###

cd ./dist && sed -i '' 's,dist/index,index,g' package.json

###
# @custom(build)
###

cp ./.eslintrc.cjs ./dist
cp ./.eslintrc.next.cjs ./dist
cp ./.prettierrc.cjs ./dist
cp ./tsconfig.base.json ./dist
cp ./tsconfig.jest.json ./dist
cp ./tsconfig.next.json ./dist
cp ./tsconfig.node-14.json ./dist
cp ./tsconfig.node-16.json ./dist
cp ./tsconfig.react-native.json ./dist
cp ./tsconfig.react.json ./dist

