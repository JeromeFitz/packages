const config = require('./react.cjs')

// @note(eslint) react contains typescript overrides
const overrides = [
  {
    ...config.overrides[0],
    plugins: [...overrides.plugins, 'jest'],
    project: ['./tsconfig.json', './tsconfig.jest.json'],
  },
]

const plugins = [...config.plugins, 'jest']

module.exports = {
  ...config,
  overrides,
  plugins,
}
