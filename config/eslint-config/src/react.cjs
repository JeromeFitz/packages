const config = require('./typescript.cjs')

// const OFF = 0
const WARN = 1
const ERROR = 2

const reactConfig = {
  ...config,
  plugins: [...config.plugins, 'jsx-a11y', 'react-hooks'],
  rules: {
    ...config.rules,
    'react-hooks/exhaustive-deps': WARN,
    'react-hooks/rules-of-hooks': ERROR,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}

module.exports = reactConfig
