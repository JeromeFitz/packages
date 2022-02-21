/**
 * @copyright https://github.com/semantic-release/release-notes-generator
 */
const HOSTS_CONFIG = {
  github: {
    hostname: 'github.com',
    issue: 'issues',
    commit: 'commit',
    referenceActions: [
      'close',
      'closes',
      'closed',
      'fix',
      'fixes',
      'fixed',
      'resolve',
      'resolves',
      'resolved',
    ],
    issuePrefixes: ['#', 'gh-'],
  },
  bitbucket: {
    hostname: 'bitbucket.org',
    issue: 'issue',
    commit: 'commits',
    referenceActions: [
      'close',
      'closes',
      'closed',
      'closing',
      'fix',
      'fixes',
      'fixed',
      'fixing',
      'resolve',
      'resolves',
      'resolved',
      'resolving',
    ],
    issuePrefixes: ['#'],
  },
  gitlab: {
    hostname: 'gitlab.com',
    issue: 'issues',
    commit: 'commit',
    referenceActions: [
      'close',
      'closes',
      'closed',
      'closing',
      'fix',
      'fixes',
      'fixed',
      'fixing',
    ],
    issuePrefixes: ['#'],
  },
  default: {
    issue: 'issues',
    commit: 'commit',
    referenceActions: [
      'close',
      'closes',
      'closed',
      'closing',
      'fix',
      'fixes',
      'fixed',
      'fixing',
      'resolve',
      'resolves',
      'resolved',
      'resolving',
    ],
    issuePrefixes: ['#', 'gh-'],
  },
}

export { HOSTS_CONFIG }
