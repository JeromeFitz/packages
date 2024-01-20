import type { Options } from 'prettier'

const config: Options = {
  arrowParens: 'always',
  endOfLine: 'auto',
  printWidth: 85,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  plugins: ['prettier-plugin-pkg'],
}

export default config
