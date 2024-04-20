import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginReactHooks from 'eslint-plugin-react-hooks'

import { RULES } from './_lib.js'
import configTypescript from './typescript.js'

const configReact = [
  {
    // files: ['**/*.ts?(x)'],
    name: '@jeromefitz/eslint-config:react',
    plugins: { 'jsx-a11y': pluginJsxA11y, 'react-hooks': pluginReactHooks },
    rules: {
      'react-hooks/exhaustive-deps': RULES.WARN,
      'react-hooks/rules-of-hooks': RULES.ERROR,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]

export default [...configTypescript, ...configReact]
