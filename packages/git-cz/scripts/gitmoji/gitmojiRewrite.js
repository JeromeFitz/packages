/* eslint-disable object-property-newline */
const _find = require('lodash/find')

const items = require('../../data/gitmoji/init.json').gitmojis

/**
 * @todo(package) turn this into standalone: gitmoji-to-conventional
 */
// @note pseudo-map to conventional-commits
/* eslint-disable sort-keys */
const rewrites = [
  { from: 'art', to: 'style' },
  { from: 'zap', to: 'perf' },
  { from: 'fire', to: 'prune' },
  { from: 'bug', to: 'fix', branch: 'fix' },
  { from: 'ambulance', to: 'hotfix', branch: 'hotfix' },
  { from: 'sparkles', to: 'feat', branch: 'feature' },
  { from: 'memo', to: 'docs' },
  { from: 'rocket', to: 'deploy' },
  { from: 'lipstick', to: 'ui' },
  { from: 'tada', to: 'init' },
  { from: 'white-check-mark', to: 'test', branch: 'test' },
  { from: 'lock', to: 'security' },
  { from: 'bookmark', to: 'release', branch: 'release', releaseNotes: false },
  { from: 'rotating-light', to: 'lint' },
  { from: 'construction', to: 'wip', releaseNotes: false },
  { from: 'green-heart', to: 'fix-ci' },
  { from: 'arrow-down', to: 'downgrade' },
  { from: 'arrow-up', to: 'upgrade' },
  { from: 'pushpin', to: 'pushpin' },
  { from: 'construction-worker', to: 'ci', branch: 'ci' },
  { from: 'chart-with-upwards-trend', to: 'analytics' },
  { from: 'recycle', to: 'refactor', branch: 'refactor' },
  { from: 'heavy-plus-sign', to: 'dep-add' },
  { from: 'heavy-minus-sign', to: 'dep-rm' },
  { from: 'wrench', to: 'config' },
  { from: 'hammer', to: 'build' },
  { from: 'globe-with-meridians', to: 'i18n' },
  { from: 'pencil2', to: 'typo', releaseNotes: false },
  { from: 'poop', to: 'poo', releaseNotes: false },
  { from: 'rewind', to: 'revert', releaseNotes: false },
  { from: 'twisted-rightwards-arrows', to: 'merge', releaseNotes: false },
  { from: 'package', to: 'dep-up' },
  { from: 'alien', to: 'compat' },
  { from: 'truck', to: 'mv', releaseNotes: false },
  { from: 'page-facing-up', to: 'license' },
  { from: 'boom', to: 'breaking' },
  { from: 'bento', to: 'assets' },
  { from: 'wheelchair', to: 'access' },
  { from: 'bulb', to: 'docs-code' },
  { from: 'beers', to: 'beer', releaseNotes: false },
  { from: 'speech-balloon', to: 'texts' },
  { from: 'card-file-box', to: 'db' },
  { from: 'loud-sound', to: 'log-add', releaseNotes: false },
  { from: 'mute', to: 'log-rm', releaseNotes: false },
  { from: 'busts-in-silhouette', to: 'contrib-add' },
  { from: 'children-crossing', to: 'ux' },
  { from: 'building-construction', to: 'arch' },
  { from: 'iphone', to: 'iphone' },
  { from: 'clown-face', to: 'mock' },
  { from: 'egg', to: 'egg', releaseNotes: false },
  { from: 'see-no-evil', to: 'ignore', releaseNotes: false },
  { from: 'camera-flash', to: 'snapshot', releaseNotes: false },
  { from: 'alembic', to: 'experiment', releaseNotes: false },
  { from: 'mag', to: 'seo' },
  { from: 'label', to: 'types' },
  { from: 'seedling', to: 'seed' },
  { from: 'triangular-flag-on-post', to: 'flags' },
  { from: 'goal-net', to: 'catch' },
  { from: 'animation', to: 'animation' },
  { from: 'wastebasket', to: 'clean' },
  { from: 'passport-control', to: 'roles' },
  { from: 'adhesive-bandage', to: 'patch' },
  { from: 'monocle-face', to: 'data' },
  { from: 'coffin', to: 'rip', releaseNotes: false },
  { from: 'test-tube', to: 'test-fail' },
  { from: 'necktie', to: 'logic' },
  { from: 'stethoscope', to: 'healthcheck' },
]

// @note default from git-cz
const types = {
  chore: {
    branch: 'chore',
    code: ':computer_disk:',
    commit: 'chore',
    description: 'Changes that don’t modify src or test files',
    emoji: '💽️',
    entity: '&#x1f4bd;',
    name: 'computer-disk',
    releaseNotes: false,
    section: 'Changes that don’t modify src or test files',
    semver: null,
  },
  rollforward: {
    branch: false,
    code: ':fast_forward:',
    commit: 'rollforward',
    description: 'Create rollforward version.',
    emoji: '⏩️',
    entity: '&#23E9;',
    name: 'rollforward',
    releaseNotes: false,
    section: 'Create rollforward version.',
    semver: null,
  },
  'run-build': {
    branch: false,
    code: ':rocket:',
    commit: 'run-build',
    description: 'Custom type for CI/CD to hook into run build override.',
    emoji: '🚀️',
    entity: '&#1F680;',
    name: 'run-build',
    releaseNotes: false,
    section: 'Custom type for CI/CD to hook into run build override.',
    semver: 'patch',
  },
}

const gitmoji = async () => {
  await items.map((item) => {
    const rewrite = _find(rewrites, { from: item.name })
    const releaseNotes =
      rewrite.releaseNotes === undefined
        ? true
        : rewrite.releaseNotes || item.releaseNotes || false
    types[rewrite.to] = {
      branch: Boolean(rewrite.branch) ? rewrite.branch : false,
      code: item.code,
      commit: rewrite.to,
      description: item.description,
      emoji: item.emoji,
      entity: item.entity,
      name: item.name,
      releaseNotes,
      section: item.description,
      semver: item.semver || null,
    }
  })
}

gitmoji()

module.exports = {
  types: Object.keys(types)
    .sort()
    .reduce((type, key) => {
      type[key] = types[key]

      return type
    }, {}),
}
