const { types } = require('@jeromefitz/git-cz/dist/themes/gitmoji').default
const GraphemeSplitter = require('grapheme-splitter')
const isCI = require('is-ci')
const _pullAt = require('lodash/pullAt')
const title = require('title')
// const _map = require('lodash/map')
// const _orderBy = require('lodash/orderBy')
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

Object.keys(types).map((type, _index) => {
  typeSpecs.push({
    emoji: types[type].emoji,
    section: title(types[type].commit) + '\n#### ' + types[type].section,
    semver: types[type].semver,
    type: types[type].commit,
    value: types[type].commit,
  })
  /**
   * @note Need to cover (code|commit|emoji) for semver based on repo choice
   */
  releaseRules.push({
    release: types[type].code,
    type: types[type].commit,
  })
  releaseRules.push({
    release: types[type].semver,
    type: types[type].commit,
  })
  releaseRules.push({
    release: types[type].semver,
    type: types[type].emoji,
  })
  return true
})

// // semver: major, minor, patch, null
// // sort by above
// typeSpecs = _orderBy(typeSpecs, ['semver'], ['desc'])

const parserOpts = {
  headerPattern: /^(.*?)(?:\((.*)\))?:?\s(.*)$/,
  noteKeywords: ['💥️  BREAKING CHANGE', 'BREAKING CHANGE'],
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

    console.dir(commit)

    return commit
  },
  // groupBy: 'order',
  commitGroupsSort: ['order'],
  commitsSort: ['order'],
}

module.exports = {
  branches: [
    { name: 'main' },
    { name: 'canary', prerelease: 'canary' },
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
      '@jeromefitz/semantic-release-git',
      {
        assets: ['package.json'],
        message: `🔖️ {RELEASE_TAG} [skip ci]\n\n{RELEASE_URL}/releases/tag/{RELEASE_TAG}\n\n{RELEASE_NOTES}`,
      },
    ],
  ],
}
