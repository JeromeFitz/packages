const config = require('./.eslintrc.cjs')

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
