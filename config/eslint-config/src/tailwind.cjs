const nextConfig = require('./next.cjs')
const reactConfig = require('./react.cjs')

const TAILWIND_CONFIG = {
  extends: ['plugin:tailwindcss/recommended'],
  rules: {
    'tailwindcss/classnames-order': 'off', // conflicts with prettier-plugin-tailwindcss
    'tailwindcss/enforces-negative-arbitrary-values': 'error',
    'tailwindcss/enforces-shorthand': 'error',
    'tailwindcss/migration-from-tailwind-2': 'error',
    'tailwindcss/no-custom-classname': 'error',
  },
}

module.exports.react = {
  ...reactConfig,
  extends: [...reactConfig.extends, ...TAILWIND_CONFIG.extends],
  rules: { ...reactConfig.rules, ...TAILWIND_CONFIG.rules },
}

const tailwindConfig = {
  ...nextConfig,
  extends: [...nextConfig.extends, ...TAILWIND_CONFIG.extends],
  rules: { ...nextConfig.rules, ...TAILWIND_CONFIG.rules },
}

module.exports.next = tailwindConfig
module.exports = tailwindConfig
