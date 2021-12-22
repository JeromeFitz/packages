// @note default from git-cz
const types = {
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
  },
}

export default types
