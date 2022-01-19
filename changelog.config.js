import isCI from 'is-ci'

if (!isCI) {
  const dotenv = await import('dotenv')
  dotenv.config({ path: './.env' })
}

const isOverride = process.env.GIT_CZ__OVERRIDE_TEST

const enabled = isOverride

/**
 * @note lol, this will not get picked up in release releaseNotes
 *       unless we _also_ pass this configuration to it 🥴️
 */
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
        'cs', // codestyle
        'cz', // git-cz
        'ds', // design-system
        'gitmoji', // conventional-gitmoji
        'notion', // notion
        's-config', // semantic-config
        'scripts', // scripts
        'semantic', // semantic
        'spotify', // spotify
        'utils', // u
      ],
    }
  : {}

const branch = isOverride
  ? {
      format: '{branchType}{branchName}',
      prefix: '',
      questions: ['branchFlag', 'branchTypes', 'branchName'],
      url: 'https://github.com/JeromeFitz/packages/issues/',
    }
  : {}

const types = isOverride ? _types : {}

const changelog = { branch, commit, enabled, types }

export default changelog
