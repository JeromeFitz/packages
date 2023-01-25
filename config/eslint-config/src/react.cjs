const config = require('./typescript.cjs')

const plugins = [...config.plugins, 'jsx-a11y', 'react-hooks']

const rules = {
  ...config.rules,
  'react-hooks/exhaustive-deps': 'warn',
  'react-hooks/rules-of-hooks': 'error',
}

module.exports = {
  ...config,
  plugins,
  rules,
  settings: {
    react: {
      version: 'detect',
    },
  },
}
