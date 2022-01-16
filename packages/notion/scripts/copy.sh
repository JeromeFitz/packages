#!/bin/bash

###
# @note(build): Publish to NPM from the `.dist` folder
#
# Copy: [package.json, release.config.cjs, README.md]
#
###

cp package.json ./dist/
cp release.config.cjs ./dist/
cp README.md ./dist/


