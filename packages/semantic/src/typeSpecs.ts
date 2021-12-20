const typeSpecs = [
  {
    code: ':wheelchair:',
    emoji: '♿️',
    releaseNotes: true,
    section: 'Access\n#### Improve accessibility.',
    semver: 'patch',
    type: 'access',
    value: 'access',
  },
  {
    code: ':chart_with_upwards_trend:',
    emoji: '📈',
    releaseNotes: true,
    section: 'Analytics\n#### Add or update analytics or track code.',
    semver: 'patch',
    type: 'analytics',
    value: 'analytics',
  },
  {
    code: ':dizzy:',
    emoji: '💫',
    releaseNotes: true,
    section: 'Animation\n#### Add or update animations and transitions.',
    semver: 'patch',
    type: 'animation',
    value: 'animation',
  },
  {
    code: ':building_construction:',
    emoji: '🏗️',
    releaseNotes: true,
    section: 'Arch\n#### Make architectural changes.',
    semver: null,
    type: 'arch',
    value: 'arch',
  },
  {
    code: ':bento:',
    emoji: '🍱',
    releaseNotes: true,
    section: 'Assets\n#### Add or update assets.',
    semver: 'patch',
    type: 'assets',
    value: 'assets',
  },
  {
    code: ':beers:',
    emoji: '🍻',
    releaseNotes: false,
    section: 'Beer\n#### Write code drunkenly.',
    semver: null,
    type: 'beer',
    value: 'beer',
  },
  {
    code: ':boom:',
    emoji: '💥',
    releaseNotes: true,
    section: 'Breaking\n#### Introduce breaking changes.',
    semver: 'major',
    type: 'breaking',
    value: 'breaking',
  },
  {
    code: ':hammer:',
    emoji: '🔨',
    releaseNotes: true,
    section: 'Build\n#### Add or update development scripts.',
    semver: null,
    type: 'build',
    value: 'build',
  },
  {
    code: ':goal_net:',
    emoji: '🥅',
    releaseNotes: true,
    section: 'Catch\n#### Catch errors.',
    semver: 'patch',
    type: 'catch',
    value: 'catch',
  },
  {
    code: ':computer_disk:',
    emoji: '💽️',
    releaseNotes: false,
    section: 'Chore\n#### Changes that don’t modify src or test files',
    semver: null,
    type: 'chore',
    value: 'chore',
  },
  {
    code: ':construction_worker:',
    emoji: '👷',
    releaseNotes: true,
    section: 'CI\n#### Add or update CI build system.',
    semver: null,
    type: 'ci',
    value: 'ci',
  },
  {
    code: ':wastebasket:',
    emoji: '🗑️',
    releaseNotes: true,
    section: 'Clean\n#### Deprecate code that needs to be cleaned up.',
    semver: 'patch',
    type: 'clean',
    value: 'clean',
  },
  {
    code: ':alien:',
    emoji: '👽️',
    releaseNotes: true,
    section: 'Compat\n#### Update code due to external API changes.',
    semver: 'patch',
    type: 'compat',
    value: 'compat',
  },
  {
    code: ':wrench:',
    emoji: '🔧',
    releaseNotes: true,
    section: 'Config\n#### Add or update configuration files.',
    semver: 'patch',
    type: 'config',
    value: 'config',
  },
  {
    code: ':busts_in_silhouette:',
    emoji: '👥',
    releaseNotes: true,
    section: 'Contrib-Add\n#### Add or update contributor(s).',
    semver: null,
    type: 'contrib-add',
    value: 'contrib-add',
  },
  {
    code: ':monocle_face:',
    emoji: '🧐',
    releaseNotes: true,
    section: 'Data\n#### Data exploration/inspection.',
    semver: null,
    type: 'data',
    value: 'data',
  },
  {
    code: ':card_file_box:',
    emoji: '🗃️',
    releaseNotes: true,
    section: 'Db\n#### Perform database related changes.',
    semver: 'patch',
    type: 'db',
    value: 'db',
  },
  {
    code: ':heavy_plus_sign:',
    emoji: '➕',
    releaseNotes: true,
    section: 'Dep-Add\n#### Add a dependency.',
    semver: 'patch',
    type: 'dep-add',
    value: 'dep-add',
  },
  {
    code: ':heavy_minus_sign:',
    emoji: '➖',
    releaseNotes: true,
    section: 'Dep-Rm\n#### Remove a dependency.',
    semver: 'patch',
    type: 'dep-rm',
    value: 'dep-rm',
  },
  {
    code: ':package:',
    emoji: '📦️',
    releaseNotes: true,
    section: 'Dep-Up\n#### Add or update compiled files or packages.',
    semver: 'patch',
    type: 'dep-up',
    value: 'dep-up',
  },
  {
    code: ':rocket:',
    emoji: '🚀',
    releaseNotes: true,
    section: 'Deploy\n#### Deploy stuff.',
    semver: null,
    type: 'deploy',
    value: 'deploy',
  },
  {
    code: ':memo:',
    emoji: '📝',
    releaseNotes: true,
    section: 'Docs\n#### Add or update documentation.',
    semver: null,
    type: 'docs',
    value: 'docs',
  },
  {
    code: ':bulb:',
    emoji: '💡',
    releaseNotes: true,
    section: 'Docs-Code\n#### Add or update comments in source code.',
    semver: null,
    type: 'docs-code',
    value: 'docs-code',
  },
  {
    code: ':arrow_down:',
    emoji: '⬇️',
    releaseNotes: true,
    section: 'Downgrade\n#### Downgrade dependencies.',
    semver: 'patch',
    type: 'downgrade',
    value: 'downgrade',
  },
  {
    code: ':technologist:',
    emoji: '🧑‍💻',
    releaseNotes: true,
    section: 'Dx\n#### Improve developer experience',
    semver: null,
    type: 'dx',
    value: 'dx',
  },
  {
    code: ':egg:',
    emoji: '🥚',
    releaseNotes: false,
    section: 'Egg\n#### Add or update an easter egg.',
    semver: 'patch',
    type: 'egg',
    value: 'egg',
  },
  {
    code: ':alembic:',
    emoji: '⚗️',
    releaseNotes: false,
    section: 'Experiment\n#### Perform experiments.',
    semver: 'patch',
    type: 'experiment',
    value: 'experiment',
  },
  {
    code: ':sparkles:',
    emoji: '✨',
    releaseNotes: true,
    section: 'Feat\n#### Introduce new features.',
    semver: 'minor',
    type: 'feat',
    value: 'feat',
  },
  {
    code: ':bug:',
    emoji: '🐛',
    releaseNotes: true,
    section: 'Fix\n#### Fix a bug.',
    semver: 'patch',
    type: 'fix',
    value: 'fix',
  },
  {
    code: ':green_heart:',
    emoji: '💚',
    releaseNotes: true,
    section: 'Fix-CI\n#### Fix CI Build.',
    semver: null,
    type: 'fix-ci',
    value: 'fix-ci',
  },
  {
    code: ':triangular_flag_on_post:',
    emoji: '🚩',
    releaseNotes: true,
    section: 'Flags\n#### Add, update, or remove feature flags.',
    semver: 'patch',
    type: 'flags',
    value: 'flags',
  },
  {
    code: ':stethoscope:',
    emoji: '🩺',
    releaseNotes: true,
    section: 'Healthcheck\n#### Add or update healthcheck.',
    semver: null,
    type: 'healthcheck',
    value: 'healthcheck',
  },
  {
    code: ':ambulance:',
    emoji: '🚑️',
    releaseNotes: true,
    section: 'Hotfix\n#### Critical hotfix.',
    semver: 'patch',
    type: 'hotfix',
    value: 'hotfix',
  },
  {
    code: ':globe_with_meridians:',
    emoji: '🌐',
    releaseNotes: true,
    section: 'I18n\n#### Internationalization and localization.',
    semver: 'patch',
    type: 'i18n',
    value: 'i18n',
  },
  {
    code: ':see_no_evil:',
    emoji: '🙈',
    releaseNotes: false,
    section: 'Ignore\n#### Add or update a .gitignore file.',
    semver: null,
    type: 'ignore',
    value: 'ignore',
  },
  {
    code: ':bricks:',
    emoji: '🧱',
    releaseNotes: true,
    section: 'Inf\n#### Infrastructure related changes.',
    semver: null,
    type: 'inf',
    value: 'inf',
  },
  {
    code: ':tada:',
    emoji: '🎉',
    releaseNotes: true,
    section: 'Init\n#### Begin a project.',
    semver: 'major',
    type: 'init',
    value: 'init',
  },
  {
    code: ':iphone:',
    emoji: '📱',
    releaseNotes: true,
    section: 'iPhone\n#### Work on responsive design.',
    semver: 'patch',
    type: 'iphone',
    value: 'iphone',
  },
  {
    code: ':page_facing_up:',
    emoji: '📄',
    releaseNotes: true,
    section: 'License\n#### Add or update license.',
    semver: null,
    type: 'license',
    value: 'license',
  },
  {
    code: ':rotating_light:',
    emoji: '🚨',
    releaseNotes: true,
    section: 'Lint\n#### Fix compiler / linter warnings.',
    semver: null,
    type: 'lint',
    value: 'lint',
  },
  {
    code: ':loud_sound:',
    emoji: '🔊',
    releaseNotes: false,
    section: 'Log-Add\n#### Add or update logs.',
    semver: null,
    type: 'log-add',
    value: 'log-add',
  },
  {
    code: ':mute:',
    emoji: '🔇',
    releaseNotes: false,
    section: 'Log-Rm\n#### Remove logs.',
    semver: null,
    type: 'log-rm',
    value: 'log-rm',
  },
  {
    code: ':necktie:',
    emoji: '👔',
    releaseNotes: true,
    section: 'Logic\n#### Add or update business logic',
    semver: 'patch',
    type: 'logic',
    value: 'logic',
  },
  {
    code: ':twisted_rightwards_arrows:',
    emoji: '🔀',
    releaseNotes: false,
    section: 'Merge\n#### Merge branches.',
    semver: null,
    type: 'merge',
    value: 'merge',
  },
  {
    code: ':clown_face:',
    emoji: '🤡',
    releaseNotes: true,
    section: 'Mock\n#### Mock things.',
    semver: null,
    type: 'mock',
    value: 'mock',
  },
  {
    code: ':truck:',
    emoji: '🚚',
    releaseNotes: false,
    section: 'Mv\n#### Move or rename resources (e.g.: files, paths, routes).',
    semver: null,
    type: 'mv',
    value: 'mv',
  },
  {
    code: ':adhesive_bandage:',
    emoji: '🩹',
    releaseNotes: true,
    section: 'Patch\n#### Simple fix for a non-critical issue.',
    semver: 'patch',
    type: 'patch',
    value: 'patch',
  },
  {
    code: ':zap:',
    emoji: '⚡️',
    releaseNotes: true,
    section: 'Perf\n#### Improve performance.',
    semver: 'patch',
    type: 'perf',
    value: 'perf',
  },
  {
    code: ':poop:',
    emoji: '💩',
    releaseNotes: false,
    section: 'Poo\n#### Write bad code that needs to be improved.',
    semver: null,
    type: 'poo',
    value: 'poo',
  },
  {
    code: ':fire:',
    emoji: '🔥',
    releaseNotes: true,
    section: 'Prune\n#### Remove code or files.',
    semver: null,
    type: 'prune',
    value: 'prune',
  },
  {
    code: ':pushpin:',
    emoji: '📌',
    releaseNotes: true,
    section: 'Pushpin\n#### Pin dependencies to specific versions.',
    semver: 'patch',
    type: 'pushpin',
    value: 'pushpin',
  },
  {
    code: ':recycle:',
    emoji: '♻️',
    releaseNotes: true,
    section: 'Refactor\n#### Refactor code.',
    semver: null,
    type: 'refactor',
    value: 'refactor',
  },
  {
    code: ':bookmark:',
    emoji: '🔖',
    releaseNotes: false,
    section: 'Release\n#### Release / Version tags.',
    semver: null,
    type: 'release',
    value: 'release',
  },
  {
    code: ':rewind:',
    emoji: '⏪️',
    releaseNotes: false,
    section: 'Revert\n#### Revert changes.',
    semver: 'patch',
    type: 'revert',
    value: 'revert',
  },
  {
    code: ':coffin:',
    emoji: '⚰️',
    releaseNotes: false,
    section: 'Rip\n#### Remove dead code.',
    semver: null,
    type: 'rip',
    value: 'rip',
  },
  {
    code: ':passport_control:',
    emoji: '🛂',
    releaseNotes: true,
    section:
      'Roles\n#### Work on code related to authorization, roles and permissions.',
    semver: 'patch',
    type: 'roles',
    value: 'roles',
  },
  {
    code: ':fast_forward:',
    emoji: '⏩️',
    releaseNotes: false,
    section: 'Rollforward\n#### Create rollforward version.',
    semver: null,
    type: 'rollforward',
    value: 'rollforward',
  },
  {
    code: ':rocket:',
    emoji: '🚀️',
    releaseNotes: false,
    section:
      'Run-Build\n#### Custom type for CI/CD to hook into run build override.',
    semver: 'patch',
    type: 'run-build',
    value: 'run-build',
  },
  {
    code: ':lock:',
    emoji: '🔒️',
    releaseNotes: true,
    section: 'Security\n#### Fix security issues.',
    semver: 'patch',
    type: 'security',
    value: 'security',
  },
  {
    code: ':seedling:',
    emoji: '🌱',
    releaseNotes: true,
    section: 'Seed\n#### Add or update seed files.',
    semver: null,
    type: 'seed',
    value: 'seed',
  },
  {
    code: ':mag:',
    emoji: '🔍️',
    releaseNotes: true,
    section: 'Seo\n#### Improve SEO.',
    semver: 'patch',
    type: 'seo',
    value: 'seo',
  },
  {
    code: ':camera_flash:',
    emoji: '📸',
    releaseNotes: false,
    section: 'Snapshot\n#### Add or update snapshots.',
    semver: null,
    type: 'snapshot',
    value: 'snapshot',
  },
  {
    code: ':art:',
    emoji: '🎨',
    releaseNotes: true,
    section: 'Style\n#### Improve structure / format of the code.',
    semver: null,
    type: 'style',
    value: 'style',
  },
  {
    code: ':white_check_mark:',
    emoji: '✅',
    releaseNotes: true,
    section: 'Test\n#### Add, update, or pass tests.',
    semver: null,
    type: 'test',
    value: 'test',
  },
  {
    code: ':test_tube:',
    emoji: '🧪',
    releaseNotes: true,
    section: 'Test-Fail\n#### Add a failing test.',
    semver: null,
    type: 'test-fail',
    value: 'test-fail',
  },
  {
    code: ':speech_balloon:',
    emoji: '💬',
    releaseNotes: true,
    section: 'Texts\n#### Add or update text and literals.',
    semver: 'patch',
    type: 'texts',
    value: 'texts',
  },
  {
    code: ':label:',
    emoji: '🏷️',
    releaseNotes: true,
    section: 'Types\n#### Add or update types.',
    semver: 'patch',
    type: 'types',
    value: 'types',
  },
  {
    code: ':pencil2:',
    emoji: '✏️',
    releaseNotes: false,
    section: 'Typo\n#### Fix typos.',
    semver: 'patch',
    type: 'typo',
    value: 'typo',
  },
  {
    code: ':lipstick:',
    emoji: '💄',
    releaseNotes: true,
    section: 'UI\n#### Add or update the UI and style files.',
    semver: 'patch',
    type: 'ui',
    value: 'ui',
  },
  {
    code: ':arrow_up:',
    emoji: '⬆️',
    releaseNotes: true,
    section: 'Upgrade\n#### Upgrade dependencies.',
    semver: 'patch',
    type: 'upgrade',
    value: 'upgrade',
  },
  {
    code: ':children_crossing:',
    emoji: '🚸',
    releaseNotes: true,
    section: 'UX\n#### Improve user experience / usability.',
    semver: 'patch',
    type: 'ux',
    value: 'ux',
  },
  {
    code: ':construction:',
    emoji: '🚧',
    releaseNotes: false,
    section: 'Wip\n#### Work in progress.',
    semver: null,
    type: 'wip',
    value: 'wip',
  },
]

export default typeSpecs
