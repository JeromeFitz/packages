/**
 * @note pseudo-map to conventional-commits
 */

type RewritesProps = {
  branch?: string | null
  from: string
  releaseNotes?: boolean | null
  semver?: 'breaking' | 'feature' | 'fix' | 'major' | 'minor' | 'patch' | null
  to: string
  title?: string
}

/* eslint-disable sort-keys */
const rewrites: RewritesProps[] = [
  { from: 'art', to: 'style' },
  { from: 'zap', to: 'perf', title: 'Performance' },
  { from: 'fire', to: 'prune' },
  { from: 'bug', to: 'fix', branch: 'fix' },
  { from: 'ambulance', to: 'hotfix', branch: 'hotfix' },
  { from: 'sparkles', to: 'feat', branch: 'feature', title: 'Feature' },
  { from: 'memo', to: 'docs' },
  { from: 'rocket', to: 'deploy' },
  { from: 'lipstick', to: 'ui' },
  { from: 'tada', to: 'init', semver: 'patch' },
  { from: 'white-check-mark', to: 'test', branch: 'test' },
  { from: 'lock', to: 'security' },
  { from: 'bookmark', to: 'release', branch: 'release', releaseNotes: true },
  { from: 'rotating-light', to: 'lint' },
  {
    from: 'construction',
    to: 'wip',
    releaseNotes: true,
    title: 'Work In Progress',
  },
  { from: 'green-heart', to: 'fix-ci', title: 'CI Fix' },
  { from: 'arrow-down', to: 'downgrade' },
  { from: 'arrow-up', to: 'upgrade' },
  { from: 'pushpin', to: 'pushpin', title: 'Pin' },
  { from: 'construction-worker', to: 'ci', branch: 'ci' },
  { from: 'chart-with-upwards-trend', to: 'analytics' },
  { from: 'recycle', to: 'refactor', branch: 'refactor' },
  { from: 'heavy-plus-sign', to: 'dep-add', title: 'Dependencies: Add' },
  { from: 'heavy-minus-sign', to: 'dep-rm', title: 'Dependencies: Remove' },
  { from: 'wrench', to: 'config' },
  { from: 'hammer', to: 'build' },
  { from: 'globe-with-meridians', to: 'i18n', title: 'Internationalization' },
  { from: 'pencil2', to: 'typo', releaseNotes: true },
  { from: 'poop', to: 'poo', releaseNotes: true },
  { from: 'rewind', to: 'revert', releaseNotes: true },
  { from: 'twisted-rightwards-arrows', to: 'merge', releaseNotes: true },
  { from: 'package', to: 'dep-up', title: 'Dependencies: Upgrade' },
  { from: 'alien', to: 'compat', title: 'Compatability' },
  { from: 'truck', to: 'mv', releaseNotes: true, title: 'Move: Files' },
  { from: 'page-facing-up', to: 'license' },
  { from: 'boom', to: 'breaking', semver: 'major' },
  { from: 'bento', to: 'assets' },
  { from: 'wheelchair', to: 'access' },
  { from: 'bulb', to: 'docs-code', title: 'Docs: Code' },
  { from: 'beers', to: 'beer', releaseNotes: true },
  { from: 'speech-balloon', to: 'texts' },
  { from: 'card-file-box', to: 'db' },
  { from: 'loud-sound', to: 'log-add', releaseNotes: true, title: 'Log: Add' },
  { from: 'mute', to: 'log-rm', releaseNotes: true, title: 'Log: Remove' },
  { from: 'busts-in-silhouette', to: 'contrib-add', title: 'Contributor: Add' },
  { from: 'children-crossing', to: 'ux' },
  { from: 'building-construction', to: 'arch', title: 'Architecture' },
  { from: 'iphone', to: 'iphone' },
  { from: 'clown-face', to: 'mock' },
  { from: 'egg', to: 'egg', releaseNotes: true, title: 'Easter Egg' },
  { from: 'see-no-evil', to: 'ignore', releaseNotes: true },
  { from: 'camera-flash', to: 'snapshot', releaseNotes: true },
  { from: 'alembic', to: 'experiment', releaseNotes: true },
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
  { from: 'coffin', to: 'rip', releaseNotes: true },
  { from: 'test-tube', to: 'test-fail', title: 'Test: Fail' },
  { from: 'necktie', to: 'logic' },
  { from: 'stethoscope', to: 'healthcheck' },
  { from: 'bricks', to: 'inf', title: 'Infrastructure' },
  { from: 'technologist', to: 'dx', title: 'Developer Experience' },
]

export default rewrites
