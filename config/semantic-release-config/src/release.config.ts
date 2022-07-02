import { releaseRules } from '@jeromefitz/conventional-gitmoji'

const semanticReleaseConfig = {
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

export default semanticReleaseConfig
