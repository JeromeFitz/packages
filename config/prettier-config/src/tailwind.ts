import config from './index.js'

export default {
  ...config,
  plugins: [...config.plugins, 'prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cx'],
}
