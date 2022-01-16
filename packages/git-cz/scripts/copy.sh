#!/bin/bash

###
# @note(build): NPM Publishes from `./dist`
###

cp package.json ./dist/
# cp release.config.cjs ./dist/
cp README.md ./dist/
cp ../../LICENSE ./dist/

###
# @note(build): Replace `dist/index` w/ `index`
###

cd ./dist && sed -i '' 's,dist/index,index,g' package.json && cd ..

###
# @custom(build)
###

cd ./dist && sed -i '' 's,dist/cli,cli,g' package.json && cd ..
