import GraphemeSplitter from 'grapheme-splitter'
import isCI from 'is-ci'
import _pullAt from 'lodash/pullAt.js'

import branches from './branches'
import releaseRules from './releaseRules'
import typeSpecs from './typeSpecs'

// eslint-disable-next-line @typescript-eslint/no-var-requires
!isCI && require('dotenv').config({ path: './.env' })

const splitter = new GraphemeSplitter()

const parserOpts = {
  headerPattern: /^(.*?)(?:\((.*)\))?:?\s(.*)$/,
  headerCorrespondence: ['type', 'scope', 'subject'],
  noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
  // referenceActions: typeSpecs.map(({ type }) => type),
  revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./,
  //
  // @hack(conventional-commits-parser) 🤖️ dependabot workaround
  //      random uuid to ensure these will never get called
  issuePrefixes: ['1b9fe48b-292c-46e7-bfde-0599639d0ec0'],
  referenceActions: ['b6db85c1-4860-4275-88e3-bd9917a0b29f'],
}

const writerOpts = {
  // transform: (commit, _context) => {
  // @todo(complexity) 12
  // eslint-disable-next-line complexity
  transform: (commit) => {
    // let discard = true
    const { type } = commit

    // Rewrite types
    const typeSpecIndex = typeSpecs.findIndex(
      ({ code: c, emoji: e, type: t, value: v }) => {
        if (type === null) return
        return (
          // @hack(semantic-release) strip colon from :type: for stricter comparison
          type.replace(/\:/g, '') === c.replace(/\:/g, '') ||
          type === e ||
          type === t ||
          type === v
        )
      }
    )

    if (typeSpecIndex === -1) return

    const typeSpec = typeSpecs[typeSpecIndex]

    if (!typeSpec.releaseNotes) return

    commit.type = `${typeSpec.emoji}  ${typeSpec.section}`
    commit.typeSpecIndex = typeSpecIndex
    // @note(semver) future-proof
    //               will eventually move to breaking | feature | fix
    if (typeSpec.semver === 'breaking' || typeSpec.semver === 'major') {
      commit.order = 1
    }
    if (typeSpec.semver === 'feature' || typeSpec.semver === 'minor') {
      commit.order = 3
    }
    if (typeSpec.semver === 'fix' || typeSpec.semver === 'patch') {
      commit.order = 5
    }
    if (typeSpec.semver === null) {
      commit.order = 7
    }
    if (!Boolean(typeSpec.semver)) {
      commit.order = 9
    }

    if (typeof commit.hash === 'string') {
      commit.hash = commit.hash.substring(0, 7)
    }

    const subjectTemp = splitter.splitGraphemes(commit.subject)
    const isEmojiMatch = subjectTemp[0] === typeSpec.emoji
    const subject = isEmojiMatch
      ? commit.subject
          .replace(_pullAt(subjectTemp, [0]), '')
          .replace(_pullAt(subjectTemp, [0]), '')
      : commit.subject

    commit.subject = subject

    return commit
  },
  // groupBy: 'order',
  commitGroupsSort: ['order'],
  commitsSort: ['order'],
}

// console.dir(`parserOpts`)
// console.dir(parserOpts)
// console.dir(`writerOpts`)
// console.dir(writerOpts)

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
        parserOpts,
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
