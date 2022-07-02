const { releaseRules } = require('@jeromefitz/conventional-gitmoji')
const isCI = require('is-ci')
!isCI && require('dotenv').config({ path: '../../.env' })

const config = {
  branches: [
    { name: 'main' },
    { name: 'develop', prerelease: 'develop' },
    { name: 'canary', prerelease: 'canary' },
    { name: 'feature/src', prerelease: 'src' },
  ],
  dryRun: true,
  tagFormat: `@jeromefitz/semantic-release-config@\${version}`,
  // extends: '@jeromefitz/semantic-release-config',
  // extends: './dist/index.cjs',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        config: '@jeromefitz/conventional-gitmoji',
        releaseRules,
      },
    ],
    [
      '@jeromefitz/release-notes-generator',
      {
        config: '@jeromefitz/conventional-gitmoji',
        contributorsProhibitList: {
          email: [],
          login: ['BotJerome', 'JeromeFitz'],
        },
      },
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: './dist',
      },
    ],
    [
      '@semantic-release/github',
      {
        addReleases: false,
        labels: false,
        releasedLabels: false,
        successComment: false,
      },
    ],
  ],
}

module.exports = config
