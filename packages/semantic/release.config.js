const types = require('@jeromefitz/git-cz/data/gitmoji').types
const GraphemeSplitter = require('grapheme-splitter')
const isCI = require('is-ci')
// const _map = require('lodash/map')
// const _orderBy = require('lodash/orderBy')
const _pullAt = require('lodash/pullAt')
!isCI && require('dotenv').config({ path: '../../.env' })

var splitter = new GraphemeSplitter()

// // @todo(sprintNames)
// const sprintNames = ['akuma', 'blanka', 'chun-li', 'dhalism']
// const releaseBranches = _map(sprintNames, (sprintName) => ({
//   name: `release/${sprintName}`,
//   prerelease: sprintName,
// }))

let typeSpecs = []
const releaseRules = []

Object.keys(types).map((type, index) => {
  typeSpecs.push({
    type: types[type].value,
    emoji: types[type].emoji,
    section: types[type].section,
    semver: types[type].semver,
    value: types[type].value,
  })
  releaseRules.push({
    type: types[type].emoji,
    release: types[type].release,
  })
  return true
})

// // semver: major, minor, patch, null
// // sort by above
// typeSpecs = _orderBy(typeSpecs, ['semver'], ['desc'])

const parserOpts = {
  headerPattern: /^(.*?)(?:\((.*)\))?:?\s(.*)$/,
  referenceActions: typeSpecs.map(({ type }) => type),
  revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./,
}

const writerOpts = {
  transform: (commit, _context) => {
    const { type } = commit

    // Rewrite types
    const typeSpecIndex = typeSpecs.findIndex(({ emoji: e, type: t, value: v }) => {
      return type === e || type === t || type === v
    })
    if (typeSpecIndex === -1) return
    const typeSpec = typeSpecs[typeSpecIndex]

    commit.type = `${typeSpec.emoji}  ${typeSpec.section}`
    commit.typeSpecIndex = typeSpecIndex
    // @semver
    if (typeSpec.semver === 'major') {
      commit.order = 1
    }
    if (typeSpec.semver === 'minor') {
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
  // commitGroupsSort: ['order'],
  commitsSort: ['order'],
}

module.exports = {
  branches: [
    { name: 'main' },
    { name: 'develop', prerelease: 'develop' },
    // ...releaseBranches,
  ],
  // ci: false,
  // dryRun: true,
  extends: ['semantic-release-commit-filter'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules,
        parserOpts,
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
        npmPublish: false,
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
      '@jeromefitz/semantic-release-git',
      {
        assets: ['package.json'],
        message: `🔖️ {PACKAGE_NAME}@{VERSION} [skip ci]\n\n{RELEASE_URL}/releases/tag/{RELEASE_TAG}\n\n{RELEASE_NOTES}`,
      },
    ],
  ],
}
