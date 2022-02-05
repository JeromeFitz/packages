import { releaseRules } from '@jeromefitz/conventional-gitmoji'
import isCI from 'is-ci'

import branches from './branches'
import parserOpts from './changelog/parserOpts'
import writerOpts from './changelog/writerOpts'

// eslint-disable-next-line @typescript-eslint/no-var-requires
!isCI && require('dotenv').config({ path: './.env' })

// console.dir(`parserOpts`)
// console.dir(parserOpts)
// console.dir(`writerOpts`)
// console.dir(writerOpts)
// console.dir(`releaseRules`)
// console.dir(releaseRules)

const config = {
  branches,
  // ci: false,
  // debug: true,
  // dryRun: true,
  extends: ['semantic-release-commit-filter'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        parserOpts: {
          noteKeywords: parserOpts.noteKeywords,
        },
        releaseRules,
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        parserOpts,
        writerOpts,
      },
    ],
    [
      '@semantic-release/npm',
      {
        npmPublish: true,
        tarballDir: 'release',
      },
    ],
    [
      '@semantic-release/github',
      {
        assets: 'release/*.tgz',
      },
    ],
    [
      '@semantic-release/exec',
      {
        prepareCmd:
          'echo sh ./scripts/postSemanticRelease.sh ${nextRelease.version} ${nextRelease.channel} ${nextRelease.gitHead} ${nextRelease.gitTag}',
      },
    ],
  ],
  tagFormat: `v\${version}`,
}

export default config
