import isCI from 'is-ci'

if (!isCI) {
  const dotenv = await import('dotenv')
  dotenv.config({ path: './.env' })
}

const isOverride = process.env.GIT_CZ__OVERRIDE_TEST

const enabled = isOverride

const _types = {
  override: {
    branch: false,
    code: ':sunrise_over_mountains:',
    commit: 'override',
    description: 'Custom type => override.',
    emoji: '🌄️',
    entity: '&#1F304;',
    name: 'override',
    releaseNotes: true,
    section: 'Custom type => override.',
    semver: null,
  },
}

const commit = isOverride
  ? {
      after: { branchName: ' ', emoji: '  ', scope: ') ' },
      before: { branchName: '', emoji: '', scope: '(' },
      format: '{emoji}{scope}{branchName}{subject}',
      maxMessageLength: 64,
      minMessageLength: 3,
      questions: [
        'branchFlag',
        'commitBreakingFlag',
        'commitBreaking',
        'commitScopes',
        'commitTypes',
        'commitSubject',
        'commitBodyFlag',
        'commitBody',
      ],
      // @question dynamic?
      scopes: [
        '',
        'codestyle',
        'conventional-gitmoji',
        'git-cz',
        'notion',
        'scripts',
        'semantic',
        'semantic-config',
        'spotify',
        'utils',
      ],
    }
  : {}

const branch = isOverride
  ? {
      format: '{branchType}{branchName}',
      prefix: 'ABC-',
      questions: ['branchFlag', 'branchTypes', 'branchName'],
      url: 'https://abc.atlassian.net/browse/',
    }
  : {}

const types = isOverride ? _types : {}

const changelog = { branch, commit, enabled, types }

export default changelog
