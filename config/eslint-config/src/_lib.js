import { FlatCompat } from '@eslint/eslintrc'

const getCompat = (directoryName) =>
  new FlatCompat({
    baseDirectory: directoryName,
  })

const RULES = {
  ERROR: 'error', // 2
  OFF: 'off', // 0
  WARN: 'warn', // 1
}

export { getCompat, RULES }
