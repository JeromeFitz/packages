/** biome-ignore-all assist/source/useSortedKeys: migrate */

/**
 * @note pseudo-map to conventional-commits
 */

// biome-ignore lint/nursery/useConsistentTypeDefinitions: migrate
type RewritesProps = {
  branch?: null | string
  from: string
  semver?: 'breaking' | 'feature' | 'fix' | 'major' | 'minor' | 'patch' | null
  to: string
}

const rewrites: RewritesProps[] = [
  { from: 'art', to: 'style' },
  { from: 'zap', to: 'perf' },
  { from: 'fire', to: 'prune' },
  { from: 'bug', to: 'fix', branch: 'fix' },
  { from: 'ambulance', to: 'hotfix', branch: 'hotfix' },
  { from: 'sparkles', to: 'feat', branch: 'feature' },
  { from: 'memo', to: 'docs' },
  { from: 'rocket', to: 'deploy' },
  { from: 'lipstick', to: 'ui' },
  { from: 'tada', to: 'init', semver: 'patch' },
  { from: 'white-check-mark', to: 'test', branch: 'test' },
  { from: 'lock', to: 'security' },
  { from: 'bookmark', to: 'release', branch: 'release' },
  { from: 'rotating-light', to: 'lint' },
  { from: 'construction', to: 'wip' },
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
  { from: 'pencil2', to: 'typo' },
  { from: 'poop', to: 'poo' },
  { from: 'rewind', to: 'revert' },
  { from: 'twisted-rightwards-arrows', to: 'merge' },
  { from: 'package', to: 'dep-up' },
  { from: 'alien', to: 'compat' },
  { from: 'truck', to: 'mv' },
  { from: 'page-facing-up', to: 'license' },
  { from: 'boom', to: 'breaking', semver: 'major' },
  { from: 'bento', to: 'assets' },
  { from: 'wheelchair', to: 'access' },
  { from: 'bulb', to: 'docs-code' },
  { from: 'beers', to: 'beer' },
  { from: 'speech-balloon', to: 'texts' },
  { from: 'card-file-box', to: 'db' },
  { from: 'loud-sound', to: 'log-add' },
  { from: 'mute', to: 'log-rm' },
  { from: 'busts-in-silhouette', to: 'contrib-add' },
  { from: 'children-crossing', to: 'ux' },
  { from: 'building-construction', to: 'arch' },
  { from: 'iphone', to: 'iphone' },
  { from: 'clown-face', to: 'mock' },
  { from: 'egg', to: 'egg' },
  { from: 'see-no-evil', to: 'ignore' },
  { from: 'camera-flash', to: 'snapshot' },
  { from: 'alembic', to: 'experiment' },
  { from: 'mag', to: 'seo' },
  { from: 'label', to: 'types' },
  { from: 'seedling', to: 'seed' },
  { from: 'triangular-flag-on-post', to: 'flags' },
  { from: 'goal-net', to: 'catch' },
  { from: 'dizzy', to: 'animation' },
  { from: 'wastebasket', to: 'clean' },
  { from: 'passport-control', to: 'roles' },
  { from: 'adhesive-bandage', to: 'patch' },
  { from: 'monocle-face', to: 'data' },
  { from: 'coffin', to: 'rip' },
  { from: 'test-tube', to: 'test-fail' },
  { from: 'necktie', to: 'logic' },
  { from: 'stethoscope', to: 'healthcheck' },
  { from: 'bricks', to: 'inf' },
  { from: 'technologist', to: 'dx' },
  { from: 'closed-lock-with-key', to: 'secrets' },
  { from: 'money-with-wings', to: 'sponsor' },
  { from: 'thread', to: 'concurrency' },
  { from: 'safety-vest', to: 'validation' },
]

export default rewrites
