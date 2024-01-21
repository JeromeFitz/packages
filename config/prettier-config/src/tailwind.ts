import config from './base.js'

export default {
  ...config,
  plugins: [...(config.plugins || ''), 'prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cx'],
}
