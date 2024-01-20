import config from './base.js'

export default {
  ...config,
  plugins: [...config.plugins, await import('prettier-plugin-tailwindcss')],
  tailwindFunctions: ['cx'],
}
