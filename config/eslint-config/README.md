# @jeromefitz/eslint-config

Custom `eslint-config` setup that can be extended and incorporates:

- `@babel/eslint-parser`
- `@typescript-eslint/eslint-plugin`
- `@typescript-eslint/parser`
- `eslint`
- `eslint-config-next`
- `eslint-config-prettier`
- `eslint-plugin-import`
- `eslint-plugin-jest`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`
- `prettier`

## Breakdown

All currently `cjs` format:

- `./index` (base)
- `./typescript`
  - `./react` (+ typescript)
    - `./jest` (+ react)
    - `./next` (+ react)

```sh
yarn add @jeromefitz/eslint-config --dev
```

### Base

```js
{
    "extends": "@jeromefitz/eslint-config"
}
```

### Jest

```js
{
    "extends": "@jeromefitz/eslint-config/jest"
}
```

### Next

```js
{
    "extends": "@jeromefitz/eslint-config/next"
}
```

### React

```js
{
    "extends": "@jeromefitz/eslint-config/react"
}
```

### TypeScript

```js
{
    "extends": "@jeromefitz/eslint-config/typescript"
}
```
