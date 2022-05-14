# @jeromefitz/tsconfig

Custom `tsconfig` setup that can be extended.

## Breakdown

All currently `cjs` format:

- `./base`
  - `./jest`
  - `./next`
  - `./node14`
  - `./react`
  - `./react-library`
  - `./react-native`

```sh
yarn add @jeromefitz/tsconfig --dev
```

### Example

```json
{
  // ...
  "extends": "@jeromefitz/tsconfig/node14.json"
  // ...
}
```
