import type { IReleaseRule } from './releaseRule.types'

const releaseRule: IReleaseRule = {
  access: {
    branch: null,
    code: ':wheelchair:',
    commit: 'access',
    description: 'Improve accessibility.',
    emoji: '♿️',
    entity: '&#9855;',
    name: 'wheelchair',
    semver: 'patch',
  },
  analytics: {
    branch: null,
    code: ':chart_with_upwards_trend:',
    commit: 'analytics',
    description: 'Add or update analytics or track code.',
    emoji: '📈',
    entity: '&#x1F4C8;',
    name: 'chart-with-upwards-trend',
    semver: 'patch',
  },
  animation: {
    branch: null,
    code: ':dizzy:',
    commit: 'animation',
    description: 'Add or update animations and transitions.',
    emoji: '💫',
    entity: '&#x1f4ab;',
    name: 'animation',
    semver: 'patch',
  },
  arch: {
    branch: null,
    code: ':building_construction:',
    commit: 'arch',
    description: 'Make architectural changes.',
    emoji: '🏗️',
    entity: '&#1f3d7;',
    name: 'building-construction',
    semver: null,
  },
  assets: {
    branch: null,
    code: ':bento:',
    commit: 'assets',
    description: 'Add or update assets.',
    emoji: '🍱',
    entity: '&#1F371',
    name: 'bento',
    semver: 'patch',
  },
  beer: {
    branch: null,
    code: ':beers:',
    commit: 'beer',
    description: 'Write code drunkenly.',
    emoji: '🍻',
    entity: '&#x1f37b;',
    name: 'beers',
    semver: null,
  },
  breaking: {
    branch: null,
    code: ':boom:',
    commit: 'breaking',
    description: 'Introduce breaking changes.',
    emoji: '💥',
    entity: '&#x1f4a5;',
    name: 'boom',
    semver: 'major',
  },
  build: {
    branch: null,
    code: ':hammer:',
    commit: 'build',
    description: 'Add or update development scripts.',
    emoji: '🔨',
    entity: '&#128296;',
    name: 'hammer',
    semver: null,
  },
  catch: {
    branch: null,
    code: ':goal_net:',
    commit: 'catch',
    description: 'Catch errors.',
    emoji: '🥅',
    entity: '&#x1F945;',
    name: 'goal-net',
    semver: 'patch',
  },
  chore: {
    branch: 'chore',
    code: ':computer_disk:',
    commit: 'chore',
    description: 'Changes that don’t modify src or test files',
    emoji: '💽️',
    entity: '&#x1f4bd;',
    name: 'computer-disk',
    semver: null,
  },
  ci: {
    branch: 'ci',
    code: ':construction_worker:',
    commit: 'ci',
    description: 'Add or update CI build system.',
    emoji: '👷',
    entity: '&#x1f477;',
    name: 'construction-worker',
    semver: null,
  },
  clean: {
    branch: null,
    code: ':wastebasket:',
    commit: 'clean',
    description: 'Deprecate code that needs to be cleaned up.',
    emoji: '🗑️',
    entity: '&#x1F5D1;',
    name: 'wastebasket',
    semver: 'patch',
  },
  compat: {
    branch: null,
    code: ':alien:',
    commit: 'compat',
    description: 'Update code due to external API changes.',
    emoji: '👽️',
    entity: '&#1F47D;',
    name: 'alien',
    semver: 'patch',
  },
  config: {
    branch: null,
    code: ':wrench:',
    commit: 'config',
    description: 'Add or update configuration files.',
    emoji: '🔧',
    entity: '&#x1f527;',
    name: 'wrench',
    semver: 'patch',
  },
  concurrency: {
    branch: null,
    code: ':thread:',
    commit: 'concurrency',
    description: 'Add or update code related to multithreading or concurrency..',
    emoji: '🧵',
    entity: '&#x1F9F5;',
    name: 'thread',
    semver: 'patch',
  },
  'contrib-add': {
    branch: null,
    code: ':busts_in_silhouette:',
    commit: 'contrib-add',
    description: 'Add or update contributor(s).',
    emoji: '👥',
    entity: '&#128101;',
    name: 'busts-in-silhouette',
    semver: null,
  },
  data: {
    branch: null,
    code: ':monocle_face:',
    commit: 'data',
    description: 'Data exploration/inspection.',
    emoji: '🧐',
    entity: '&#x1F9D0;',
    name: 'monocle-face',
    semver: null,
  },
  db: {
    branch: null,
    code: ':card_file_box:',
    commit: 'db',
    description: 'Perform database related changes.',
    emoji: '🗃️',
    entity: '&#128451;',
    name: 'card-file-box',
    semver: 'patch',
  },
  'dep-add': {
    branch: null,
    code: ':heavy_plus_sign:',
    commit: 'dep-add',
    description: 'Add a dependency.',
    emoji: '➕',
    entity: '&#10133;',
    name: 'heavy-plus-sign',
    semver: 'patch',
  },
  'dep-rm': {
    branch: null,
    code: ':heavy_minus_sign:',
    commit: 'dep-rm',
    description: 'Remove a dependency.',
    emoji: '➖',
    entity: '&#10134;',
    name: 'heavy-minus-sign',
    semver: 'patch',
  },
  'dep-up': {
    branch: null,
    code: ':package:',
    commit: 'dep-up',
    description: 'Add or update compiled files or packages.',
    emoji: '📦️',
    entity: '&#1F4E6;',
    name: 'package',
    semver: null,
  },
  deploy: {
    branch: null,
    code: ':rocket:',
    commit: 'deploy',
    description: 'Deploy stuff.',
    emoji: '🚀',
    entity: '&#x1f680;',
    name: 'rocket',
    semver: null,
  },
  docs: {
    branch: null,
    code: ':memo:',
    commit: 'docs',
    description: 'Add or update documentation.',
    emoji: '📝',
    entity: '&#x1f4dd;',
    name: 'memo',
    semver: null,
  },
  'docs-code': {
    branch: null,
    code: ':bulb:',
    commit: 'docs-code',
    description: 'Add or update comments in source code.',
    emoji: '💡',
    entity: '&#128161;',
    name: 'bulb',
    semver: null,
  },
  downgrade: {
    branch: null,
    code: ':arrow_down:',
    commit: 'downgrade',
    description: 'Downgrade dependencies.',
    emoji: '⬇️',
    entity: '⬇️',
    name: 'arrow-down',
    semver: 'patch',
  },
  dx: {
    branch: null,
    code: ':technologist:',
    commit: 'dx',
    description: 'Improve developer experience',
    emoji: '🧑‍💻',
    entity: '&#129489;&#8205;&#128187;',
    name: 'technologist',
    semver: null,
  },
  egg: {
    branch: null,
    code: ':egg:',
    commit: 'egg',
    description: 'Add or update an easter egg.',
    emoji: '🥚',
    entity: '&#129370;',
    name: 'egg',
    semver: 'patch',
  },
  experiment: {
    branch: null,
    code: ':alembic:',
    commit: 'experiment',
    description: 'Perform experiments.',
    emoji: '⚗️',
    entity: '&#128248;',
    name: 'alembic',
    semver: 'patch',
  },
  feat: {
    branch: 'feature',
    code: ':sparkles:',
    commit: 'feat',
    description: 'Introduce new features.',
    emoji: '✨',
    entity: '&#x2728;',
    name: 'sparkles',
    semver: 'minor',
  },
  fix: {
    branch: 'fix',
    code: ':bug:',
    commit: 'fix',
    description: 'Fix a bug.',
    emoji: '🐛',
    entity: '&#x1f41b;',
    name: 'bug',
    semver: 'patch',
  },
  'fix-ci': {
    branch: null,
    code: ':green_heart:',
    commit: 'fix-ci',
    description: 'Fix CI Build.',
    emoji: '💚',
    entity: '&#x1f49a;',
    name: 'green-heart',
    semver: null,
  },
  flags: {
    branch: null,
    code: ':triangular_flag_on_post:',
    commit: 'flags',
    description: 'Add, update, or remove feature flags.',
    emoji: '🚩',
    entity: '&#x1F6A9;',
    name: 'triangular-flag-on-post',
    semver: 'patch',
  },
  healthcheck: {
    branch: null,
    code: ':stethoscope:',
    commit: 'healthcheck',
    description: 'Add or update healthcheck.',
    emoji: '🩺',
    entity: '&#x1FA7A;',
    name: 'stethoscope',
    semver: null,
  },
  hotfix: {
    branch: 'hotfix',
    code: ':ambulance:',
    commit: 'hotfix',
    description: 'Critical hotfix.',
    emoji: '🚑️',
    entity: '&#128657;',
    name: 'ambulance',
    semver: 'patch',
  },
  i18n: {
    branch: null,
    code: ':globe_with_meridians:',
    commit: 'i18n',
    description: 'Internationalization and localization.',
    emoji: '🌐',
    entity: '&#127760;',
    name: 'globe-with-meridians',
    semver: 'patch',
  },
  ignore: {
    branch: null,
    code: ':see_no_evil:',
    commit: 'ignore',
    description: 'Add or update a .gitignore file.',
    emoji: '🙈',
    entity: '&#8bdfe7;',
    name: 'see-no-evil',
    semver: null,
  },
  inf: {
    branch: null,
    code: ':bricks:',
    commit: 'inf',
    description: 'Infrastructure related changes.',
    emoji: '🧱',
    entity: '&#x1f9f1;',
    name: 'bricks',
    semver: null,
  },
  init: {
    branch: null,
    code: ':tada:',
    commit: 'init',
    description: 'Begin a project.',
    emoji: '🎉',
    entity: '&#127881;',
    name: 'tada',
    semver: 'patch',
  },
  iphone: {
    branch: null,
    code: ':iphone:',
    commit: 'iphone',
    description: 'Work on responsive design.',
    emoji: '📱',
    entity: '&#128241;',
    name: 'iphone',
    semver: 'patch',
  },
  license: {
    branch: null,
    code: ':page_facing_up:',
    commit: 'license',
    description: 'Add or update license.',
    emoji: '📄',
    entity: '&#1F4C4;',
    name: 'page-facing-up',
    semver: null,
  },
  lint: {
    branch: null,
    code: ':rotating_light:',
    commit: 'lint',
    description: 'Fix compiler / linter warnings.',
    emoji: '🚨',
    entity: '&#x1f6a8;',
    name: 'rotating-light',
    semver: null,
  },
  'log-add': {
    branch: null,
    code: ':loud_sound:',
    commit: 'log-add',
    description: 'Add or update logs.',
    emoji: '🔊',
    entity: '&#128266;',
    name: 'loud-sound',
    semver: null,
  },
  'log-rm': {
    branch: null,
    code: ':mute:',
    commit: 'log-rm',
    description: 'Remove logs.',
    emoji: '🔇',
    entity: '&#128263;',
    name: 'mute',
    semver: null,
  },
  logic: {
    branch: null,
    code: ':necktie:',
    commit: 'logic',
    description: 'Add or update business logic',
    emoji: '👔',
    entity: '&#128084;',
    name: 'necktie',
    semver: 'patch',
  },
  merge: {
    branch: null,
    code: ':twisted_rightwards_arrows:',
    commit: 'merge',
    description: 'Merge branches.',
    emoji: '🔀',
    entity: '&#128256;',
    name: 'twisted-rightwards-arrows',
    semver: null,
  },
  mock: {
    branch: null,
    code: ':clown_face:',
    commit: 'mock',
    description: 'Mock things.',
    emoji: '🤡',
    entity: '&#129313;',
    name: 'clown-face',
    semver: null,
  },
  mv: {
    branch: null,
    code: ':truck:',
    commit: 'mv',
    description: 'Move or rename resources (e.g.: files, paths, routes).',
    emoji: '🚚',
    entity: '&#1F69A;',
    name: 'truck',
    semver: null,
  },
  patch: {
    branch: null,
    code: ':adhesive_bandage:',
    commit: 'patch',
    description: 'Simple fix for a non-critical issue.',
    emoji: '🩹',
    entity: '&#x1FA79;',
    name: 'adhesive-bandage',
    semver: 'patch',
  },
  perf: {
    branch: null,
    code: ':zap:',
    commit: 'perf',
    description: 'Improve performance.',
    emoji: '⚡️',
    entity: '&#x26a1;',
    name: 'zap',
    semver: 'patch',
  },
  poo: {
    branch: null,
    code: ':poop:',
    commit: 'poo',
    description: 'Write bad code that needs to be improved.',
    emoji: '💩',
    entity: '&#58613;',
    name: 'poop',
    semver: null,
  },
  prune: {
    branch: null,
    code: ':fire:',
    commit: 'prune',
    description: 'Remove code or files.',
    emoji: '🔥',
    entity: '&#x1f525;',
    name: 'fire',
    semver: null,
  },
  pushpin: {
    branch: null,
    code: ':pushpin:',
    commit: 'pushpin',
    description: 'Pin dependencies to specific versions.',
    emoji: '📌',
    entity: '&#x1F4CC;',
    name: 'pushpin',
    semver: 'patch',
  },
  refactor: {
    branch: 'refactor',
    code: ':recycle:',
    commit: 'refactor',
    description: 'Refactor code.',
    emoji: '♻️',
    entity: '&#x2672;',
    name: 'recycle',
    semver: null,
  },
  release: {
    branch: 'release',
    code: ':bookmark:',
    commit: 'release',
    description: 'Release / Version tags.',
    emoji: '🔖',
    entity: '&#x1f516;',
    name: 'bookmark',
    semver: null,
  },
  revert: {
    branch: null,
    code: ':rewind:',
    commit: 'revert',
    description: 'Revert changes.',
    emoji: '⏪️',
    entity: '&#9194;',
    name: 'rewind',
    semver: 'patch',
  },
  rip: {
    branch: null,
    code: ':coffin:',
    commit: 'rip',
    description: 'Remove dead code.',
    emoji: '⚰️',
    entity: '&#x26B0;',
    name: 'coffin',
    semver: null,
  },
  roles: {
    branch: null,
    code: ':passport_control:',
    commit: 'roles',
    description: 'Work on code related to authorization, roles and permissions.',
    emoji: '🛂',
    entity: '&#x1F6C2;',
    name: 'passport-control',
    semver: 'patch',
  },
  rollforward: {
    branch: null,
    code: ':fast_forward:',
    commit: 'rollforward',
    description: 'Create rollforward version.',
    emoji: '⏩️',
    entity: '&#23E9;',
    name: 'rollforward',
    semver: null,
  },
  'run-build': {
    branch: null,
    code: ':rocket:',
    commit: 'run-build',
    description: 'Custom type for CI/CD to hook into run build override.',
    emoji: '🚀️',
    entity: '&#1F680;',
    name: 'run-build',
    semver: 'patch',
  },
  secrets: {
    branch: null,
    code: ':closed_lock_with_key:',
    commit: 'secrets',
    description: 'Add or update secrets.',
    emoji: '🔐',
    entity: '&#x1f510;',
    name: 'closed-lock-with-key',
    semver: null,
  },
  security: {
    branch: null,
    code: ':lock:',
    commit: 'security',
    description: 'Fix security issues.',
    emoji: '🔒️',
    entity: '&#x1f512;',
    name: 'lock',
    semver: 'patch',
  },
  seed: {
    branch: null,
    code: ':seedling:',
    commit: 'seed',
    description: 'Add or update seed files.',
    emoji: '🌱',
    entity: '&#127793;',
    name: 'seedling',
    semver: null,
  },
  seo: {
    branch: null,
    code: ':mag:',
    commit: 'seo',
    description: 'Improve SEO.',
    emoji: '🔍️',
    entity: '&#128269;',
    name: 'mag',
    semver: 'patch',
  },
  snapshot: {
    branch: null,
    code: ':camera_flash:',
    commit: 'snapshot',
    description: 'Add or update snapshots.',
    emoji: '📸',
    entity: '&#128248;',
    name: 'camera-flash',
    semver: null,
  },
  sponsor: {
    branch: null,
    code: ':money_with_wings:',
    commit: 'sponsor',
    description: 'Add sponsorships or money related infrastructure.',
    emoji: '💸',
    entity: '&#x1f4b8;',
    name: 'money-with-wings',
    semver: null,
  },
  style: {
    branch: null,
    code: ':art:',
    commit: 'style',
    description: 'Improve structure / format of the code.',
    emoji: '🎨',
    entity: '&#x1f3a8;',
    name: 'art',
    semver: null,
  },
  test: {
    branch: 'test',
    code: ':white_check_mark:',
    commit: 'test',
    description: 'Add, update, or pass tests.',
    emoji: '✅',
    entity: '&#x2705;',
    name: 'white-check-mark',
    semver: null,
  },
  'test-fail': {
    branch: null,
    code: ':test_tube:',
    commit: 'test-fail',
    description: 'Add a failing test.',
    emoji: '🧪',
    entity: '&#x1F9EA;',
    name: 'test-tube',
    semver: null,
  },
  texts: {
    branch: null,
    code: ':speech_balloon:',
    commit: 'texts',
    description: 'Add or update text and literals.',
    emoji: '💬',
    entity: '&#128172;',
    name: 'speech-balloon',
    semver: 'patch',
  },
  types: {
    branch: null,
    code: ':label:',
    commit: 'types',
    description: 'Add or update types.',
    emoji: '🏷️',
    entity: '&#127991;',
    name: 'label',
    semver: 'patch',
  },
  typo: {
    branch: null,
    code: ':pencil2:',
    commit: 'typo',
    description: 'Fix typos.',
    emoji: '✏️',
    entity: '&#59161;',
    name: 'pencil2',
    semver: 'patch',
  },
  ui: {
    branch: null,
    code: ':lipstick:',
    commit: 'ui',
    description: 'Add or update the UI and style files.',
    emoji: '💄',
    entity: '&#ff99cc;',
    name: 'lipstick',
    semver: 'patch',
  },
  upgrade: {
    branch: null,
    code: ':arrow_up:',
    commit: 'upgrade',
    description: 'Upgrade dependencies.',
    emoji: '⬆️',
    entity: '⬆️',
    name: 'arrow-up',
    semver: 'patch',
  },
  ux: {
    branch: null,
    code: ':children_crossing:',
    commit: 'ux',
    description: 'Improve user experience / usability.',
    emoji: '🚸',
    entity: '&#128696;',
    name: 'children-crossing',
    semver: 'patch',
  },
  wip: {
    branch: null,
    code: ':construction:',
    commit: 'wip',
    description: 'Work in progress.',
    emoji: '🚧',
    entity: '&#x1f6a7;',
    name: 'construction',
    semver: null,
  },
}

export { releaseRule }