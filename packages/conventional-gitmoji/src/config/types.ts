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
    releaseNotes: boolean | null
    section: string
    semver: 'breaking' | 'feature' | 'fix' | 'major' | 'minor' | 'patch' | null
    title: string
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
    releaseNotes: false,
    section: 'Changes that don’t modify src or test files',
    semver: null,
    title: 'Chore',
  },
  rollforward: {
    branch: false,
    code: ':fast_forward:',
    commit: 'rollforward',
    description: 'Create rollforward version.',
    emoji: '⏩️',
    entity: '&#23E9;',
    name: 'rollforward',
    releaseNotes: false,
    section: 'Create rollforward version.',
    semver: null,
    title: 'Rollforward',
  },
  'run-build': {
    branch: false,
    code: ':rocket:',
    commit: 'run-build',
    description: 'Custom type for CI/CD to hook into run build override.',
    emoji: '🚀️',
    entity: '&#1F680;',
    name: 'run-build',
    releaseNotes: false,
    section: 'Custom type for CI/CD to hook into run build override.',
    semver: 'patch',
    title: 'Custom: Run Build',
  },
}

export default types
