/**
 * @note default from git-cz
 */

type TypesProps = {
  [x: string]: {
    branch: string | boolean | null | undefined
    code: any | null
    commit: any
    description: any
    emoji: any
    entity: string
    name: string
    semver: 'breaking' | 'feature' | 'fix' | 'major' | 'minor' | 'patch' | null
  }
}
const types: TypesProps = {
  chore: {
    branch: 'chore',
    code: ':computer_disk:',
    commit: 'chore',
    description: 'Changes that don’t modify src or test files',
    emoji: '💽️',
    entity: '&#x1f4bd;',
    name: 'computer-disk',
    semver: null,
  },
  rollforward: {
    branch: false,
    code: ':fast_forward:',
    commit: 'rollforward',
    description: 'Create rollforward version.',
    emoji: '⏩️',
    entity: '&#23E9;',
    name: 'rollforward',
    semver: null,
  },
  'run-build': {
    branch: false,
    code: ':rocket:',
    commit: 'run-build',
    description: 'Custom type for CI/CD to hook into run build override.',
    emoji: '🚀️',
    entity: '&#1F680;',
    name: 'run-build',
    semver: 'patch',
  },
}

export default types
