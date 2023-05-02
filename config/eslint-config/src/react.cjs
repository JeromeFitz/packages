const config = require('./typescript.cjs')

const reactConfig = {
  ...config,
  plugins: [...config.plugins, 'jsx-a11y', 'react-hooks'],
  rules: {
    ...config.rules,
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}

module.exports = reactConfig
