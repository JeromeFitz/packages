import type { Options } from 'prettier'

const config: Options = {
  arrowParens: 'always',
  endOfLine: 'auto',
  plugins: ['prettier-plugin-pkg'],
  printWidth: 85,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
}

export default config
