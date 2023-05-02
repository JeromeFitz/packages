const config = require('./react.cjs')

// @note(eslint) react contains typescript overrides
const overrides = [
  {
    ...config.overrides[0],
    plugins: [...overrides.plugins, 'testing-library', 'jest'],
    project: ['./tsconfig.json', './tsconfig.jest.json'],
  },
]

const _extends = [
  ...config.extends,
  'plugin:testing-library/react',
  'plugin:jest-dom/recommended',
]

const plugins = [...config.plugins, 'jest']

module.exports = {
  ...config,
  extends: _extends,
  overrides,
  plugins,
}
