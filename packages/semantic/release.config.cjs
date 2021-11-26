const GraphemeSplitter = require('grapheme-splitter')
const isCI = require('is-ci')
const _pullAt = require('lodash.pullat/index.js')

const { name } = require('./package.json')
const branches = require('./src/branches.cjs')
const releaseRules = require('./src/releaseRules.cjs')
const typeSpecs = require('./src/typeSpecs.cjs')

!isCI && require('dotenv').config({ path: '../../.env' })

var splitter = new GraphemeSplitter()

const parserOpts = {
  headerPattern: /^(.*?)(?:\((.*)\))?:?\s(.*)$/,
  headerCorrespondence: ['type', 'scope', 'subject'],
  noteKeywords: ['💥️  BREAKING CHANGE', 'BREAKING CHANGE'],
  // referenceActions: typeSpecs.map(({ type }) => type),
  referenceActions: null,
  revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./,
}

const writerOpts = {
  // @todo(complexity) 12
  // eslint-disable-next-line complexity
  transform: (commit, _context) => {
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
    // @semver
    if (typeSpec.semver === 'major' || typeSpec.semver === 'breaking') {
      commit.order = 1
    }
    if (typeSpec.semver === 'minor' || typeSpec.semver === 'feature') {
      commit.order = 3
    }
    if (typeSpec.semver === 'patch') {
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
  //
  tagFormat: `${name}@\${version}`,
}

module.exports = config
