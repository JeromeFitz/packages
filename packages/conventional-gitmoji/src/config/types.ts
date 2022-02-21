import type { ReleaseRuleTypes } from '../types'

/**
 * @note
 * These are _additional_ types on top of base Gitmoji
 *
 * @todo
 * - These should be accepted through a config for use by:
 * - @jeromefitz/git-cz
 * - @jeromefitz/semantic
 * - @jeromefitz/release-notes
 *
 */

const types: ReleaseRuleTypes = {
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
    branch: null,
    code: ':fast_forward:',
    commit: 'rollforward',
    description: 'Create rollforward version.',
    emoji: '⏩️',
    entity: '&#23E9;',
    name: 'rollforward',
    semver: null,
  },
  'run-build': {
    branch: null,
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
