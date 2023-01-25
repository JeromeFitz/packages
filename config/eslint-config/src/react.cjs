const config = require('./typescript.cjs')

module.exports = {
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
