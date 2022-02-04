# @jeromefitz/codestyle

## Overview

- 🚨️ `eslint` + `@typescript-eslint`
- 🎭️ `lint-staged`
- 📐️ `prettier` + `pretty-quick`
- 🆎️ TypeScript Config

## Installation

```bash
yarn add @jeromefitz/codestyle --dev
```

### Husky

I tend to use this with [`husky`](https://github.com/typicode/husky) (w/ [`is-ci`](https://github.com/watson/is-ci) [`pinst`](https://github.com/typicode/pinst)), feel free to look at how this monorepo has it set up to follow / alter how you would like to implement.

- `./husky`

## Overrides

### ESLint + TypeScript

`./.eslintrc.cjs`

```js
const config = require('@jeromefitz/codestyle/.eslintrc.next.cjs')

module.exports = {
  ...config,
  parser: '@babel/eslint-parser',
}
```

📝️ **Note:** Depending on if you are lifting packages in your repo, you may need to explicitly pass the `parser`.

### lint-staged

`./lint-staged.config.mjs`

```js
import config from '@jeromefitz/codestyle/lint-staged.config.js'

export default config
```

### Prettier

`./.prettierrc.cjs`

```js
const config = require('@jeromefitz/codestyle/.prettierrc.cjs')

module.exports = {
  ...config,
}
```

### TypeScript

`./tsconfig.json`

```json
{
  "extends": "@jeromefitz/codestyle/tsconfig.node.json"
}
```

Currently there are the following to extend:

- `tsconfig.jest.json`
- `tsconfig.node.json`
- `tsconfig.react-native.json`
- `tsconfig.react.json`

## Scripts

Some packages have you call directly like `yarn codestyle` to run everything, however, I tend to prefer the opt-in / override approach.

If you want to add the following to your `package.json` scripts, these are the current recommendations:

```json
{
  "scripts": {
    "lint:eslint": "eslint ./src --ext cjs,js,jsx,mjs,ts,tsx --max-warnings=0",
    "lint:prettier": "prettier \"./src/**/*.{cjs,js,jsx,mjs,ts,tsx,json,md,mdx,css,html,yml,yaml,scss}\" --ignore-unknown --loglevel warn",
    "lint:typescript": "tsc --noEmit --declaration",
    "lint": "yarn lint:prettier --check && yarn lint:eslint && yarn lint:typescript",
    "lint:fix": "yarn lint:eslint --fix && yarn lint:prettier --write"
  }
}
```

Then with `lint-staged` you can just run `yarn lint` or pass `yarn lint --fix` (I believe `yarn lint:fix` may be not needed).
