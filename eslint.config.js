// const config = require('@jeromefitz/eslint-config/src/react.js')
import configReact from '@jeromefitz/eslint-config/src/react.js'

// const overrides = [
//   {
//     ...configReact.overrides[0],
//     parserOptions: {
//       ...configReact.overrides[0].parserOptions,
//       tsconfigRootDir: __dirname,
//       project: [
//         './tsconfig.eslint.json',
//         './config/*/tsconfig.json',
//         './packages/*/tsconfig.json',
//       ],
//     },
//   },
// ]

// const eslint = {
//   extends: '@jeromefitz/eslint-config/src/react.js',
//   root: true,
//   overrides,
// }

console.dir(configReact)

export default configReact
