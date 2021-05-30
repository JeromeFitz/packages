const releaseRules = [
  {
    release: 'patch',
    type: ':wheelchair:',
  },
  {
    release: 'patch',
    type: 'access',
  },
  {
    release: 'patch',
    type: '♿️',
  },
  {
    release: 'patch',
    type: ':chart_with_upwards_trend:',
  },
  {
    release: 'patch',
    type: 'analytics',
  },
  {
    release: 'patch',
    type: '📈',
  },
  {
    release: 'patch',
    type: ':dizzy:',
  },
  {
    release: 'patch',
    type: 'animation',
  },
  {
    release: 'patch',
    type: '💫',
  },
  {
    release: null,
    type: ':building_construction:',
  },
  {
    release: null,
    type: 'arch',
  },
  {
    release: null,
    type: '🏗️',
  },
  {
    release: 'patch',
    type: ':bento:',
  },
  {
    release: 'patch',
    type: 'assets',
  },
  {
    release: 'patch',
    type: '🍱',
  },
  {
    release: null,
    type: ':beers:',
  },
  {
    release: null,
    type: 'beer',
  },
  {
    release: null,
    type: '🍻',
  },
  {
    release: 'major',
    type: ':boom:',
  },
  {
    release: 'major',
    type: 'breaking',
  },
  {
    release: 'major',
    type: '💥',
  },
  {
    release: null,
    type: ':hammer:',
  },
  {
    release: null,
    type: 'build',
  },
  {
    release: null,
    type: '🔨',
  },
  {
    release: 'patch',
    type: ':goal_net:',
  },
  {
    release: 'patch',
    type: 'catch',
  },
  {
    release: 'patch',
    type: '🥅',
  },
  {
    release: null,
    type: ':computer_disk:',
  },
  {
    release: null,
    type: 'chore',
  },
  {
    release: null,
    type: '💽️',
  },
  {
    release: null,
    type: ':construction_worker:',
  },
  {
    release: null,
    type: 'ci',
  },
  {
    release: null,
    type: '👷',
  },
  {
    release: 'patch',
    type: ':wastebasket:',
  },
  {
    release: 'patch',
    type: 'clean',
  },
  {
    release: 'patch',
    type: '🗑️',
  },
  {
    release: 'patch',
    type: ':alien:',
  },
  {
    release: 'patch',
    type: 'compat',
  },
  {
    release: 'patch',
    type: '👽️',
  },
  {
    release: 'patch',
    type: ':wrench:',
  },
  {
    release: 'patch',
    type: 'config',
  },
  {
    release: 'patch',
    type: '🔧',
  },
  {
    release: null,
    type: ':busts_in_silhouette:',
  },
  {
    release: null,
    type: 'contrib-add',
  },
  {
    release: null,
    type: '👥',
  },
  {
    release: null,
    type: ':monocle_face:',
  },
  {
    release: null,
    type: 'data',
  },
  {
    release: null,
    type: '🧐',
  },
  {
    release: 'patch',
    type: ':card_file_box:',
  },
  {
    release: 'patch',
    type: 'db',
  },
  {
    release: 'patch',
    type: '🗃️',
  },
  {
    release: 'patch',
    type: ':heavy_plus_sign:',
  },
  {
    release: 'patch',
    type: 'dep-add',
  },
  {
    release: 'patch',
    type: '➕',
  },
  {
    release: 'patch',
    type: ':heavy_minus_sign:',
  },
  {
    release: 'patch',
    type: 'dep-rm',
  },
  {
    release: 'patch',
    type: '➖',
  },
  {
    release: 'patch',
    type: ':package:',
  },
  {
    release: 'patch',
    type: 'dep-up',
  },
  {
    release: 'patch',
    type: '📦️',
  },
  {
    release: null,
    type: ':rocket:',
  },
  {
    release: null,
    type: 'deploy',
  },
  {
    release: null,
    type: '🚀',
  },
  {
    release: null,
    type: ':memo:',
  },
  {
    release: null,
    type: 'docs',
  },
  {
    release: null,
    type: '📝',
  },
  {
    release: null,
    type: ':bulb:',
  },
  {
    release: null,
    type: 'docs-code',
  },
  {
    release: null,
    type: '💡',
  },
  {
    release: 'patch',
    type: ':arrow_down:',
  },
  {
    release: 'patch',
    type: 'downgrade',
  },
  {
    release: 'patch',
    type: '⬇️',
  },
  {
    release: 'patch',
    type: ':egg:',
  },
  {
    release: 'patch',
    type: 'egg',
  },
  {
    release: 'patch',
    type: '🥚',
  },
  {
    release: 'patch',
    type: ':alembic:',
  },
  {
    release: 'patch',
    type: 'experiment',
  },
  {
    release: 'patch',
    type: '⚗️',
  },
  {
    release: 'minor',
    type: ':sparkles:',
  },
  {
    release: 'minor',
    type: 'feat',
  },
  {
    release: 'minor',
    type: '✨',
  },
  {
    release: 'patch',
    type: ':bug:',
  },
  {
    release: 'patch',
    type: 'fix',
  },
  {
    release: 'patch',
    type: '🐛',
  },
  {
    release: null,
    type: ':green_heart:',
  },
  {
    release: null,
    type: 'fix-ci',
  },
  {
    release: null,
    type: '💚',
  },
  {
    release: 'patch',
    type: ':triangular_flag_on_post:',
  },
  {
    release: 'patch',
    type: 'flags',
  },
  {
    release: 'patch',
    type: '🚩',
  },
  {
    release: 'patch',
    type: ':ambulance:',
  },
  {
    release: 'patch',
    type: 'hotfix',
  },
  {
    release: 'patch',
    type: '🚑️',
  },
  {
    release: 'patch',
    type: ':globe_with_meridians:',
  },
  {
    release: 'patch',
    type: 'i18n',
  },
  {
    release: 'patch',
    type: '🌐',
  },
  {
    release: null,
    type: ':see_no_evil:',
  },
  {
    release: null,
    type: 'ignore',
  },
  {
    release: null,
    type: '🙈',
  },
  {
    release: null,
    type: ':tada:',
  },
  {
    release: null,
    type: 'init',
  },
  {
    release: null,
    type: '🎉',
  },
  {
    release: 'patch',
    type: ':iphone:',
  },
  {
    release: 'patch',
    type: 'iphone',
  },
  {
    release: 'patch',
    type: '📱',
  },
  {
    release: null,
    type: ':page_facing_up:',
  },
  {
    release: null,
    type: 'license',
  },
  {
    release: null,
    type: '📄',
  },
  {
    release: null,
    type: ':rotating_light:',
  },
  {
    release: null,
    type: 'lint',
  },
  {
    release: null,
    type: '🚨',
  },
  {
    release: null,
    type: ':loud_sound:',
  },
  {
    release: null,
    type: 'log-add',
  },
  {
    release: null,
    type: '🔊',
  },
  {
    release: null,
    type: ':mute:',
  },
  {
    release: null,
    type: 'log-rm',
  },
  {
    release: null,
    type: '🔇',
  },
  {
    release: null,
    type: ':twisted_rightwards_arrows:',
  },
  {
    release: null,
    type: 'merge',
  },
  {
    release: null,
    type: '🔀',
  },
  {
    release: null,
    type: ':clown_face:',
  },
  {
    release: null,
    type: 'mock',
  },
  {
    release: null,
    type: '🤡',
  },
  {
    release: null,
    type: ':truck:',
  },
  {
    release: null,
    type: 'mv',
  },
  {
    release: null,
    type: '🚚',
  },
  {
    release: 'patch',
    type: ':adhesive_bandage:',
  },
  {
    release: 'patch',
    type: 'patch',
  },
  {
    release: 'patch',
    type: '🩹',
  },
  {
    release: 'patch',
    type: ':zap:',
  },
  {
    release: 'patch',
    type: 'perf',
  },
  {
    release: 'patch',
    type: '⚡️',
  },
  {
    release: null,
    type: ':poop:',
  },
  {
    release: null,
    type: 'poo',
  },
  {
    release: null,
    type: '💩',
  },
  {
    release: null,
    type: ':fire:',
  },
  {
    release: null,
    type: 'prune',
  },
  {
    release: null,
    type: '🔥',
  },
  {
    release: 'patch',
    type: ':pushpin:',
  },
  {
    release: 'patch',
    type: 'pushpin',
  },
  {
    release: 'patch',
    type: '📌',
  },
  {
    release: null,
    type: ':recycle:',
  },
  {
    release: null,
    type: 'refactor',
  },
  {
    release: null,
    type: '♻️',
  },
  {
    release: null,
    type: ':bookmark:',
  },
  {
    release: null,
    type: 'release',
  },
  {
    release: null,
    type: '🔖',
  },
  {
    release: 'patch',
    type: ':rewind:',
  },
  {
    release: 'patch',
    type: 'revert',
  },
  {
    release: 'patch',
    type: '⏪️',
  },
  {
    release: null,
    type: ':coffin:',
  },
  {
    release: null,
    type: 'rip',
  },
  {
    release: null,
    type: '⚰️',
  },
  {
    release: 'patch',
    type: ':passport_control:',
  },
  {
    release: 'patch',
    type: 'roles',
  },
  {
    release: 'patch',
    type: '🛂',
  },
  {
    release: null,
    type: ':fast_forward:',
  },
  {
    release: null,
    type: 'rollforward',
  },
  {
    release: null,
    type: '⏩️',
  },
  {
    release: null,
    type: ':rocket:',
  },
  {
    release: null,
    type: 'run-build',
  },
  {
    release: null,
    type: '🚀️',
  },
  {
    release: 'patch',
    type: ':lock:',
  },
  {
    release: 'patch',
    type: 'security',
  },
  {
    release: 'patch',
    type: '🔒️',
  },
  {
    release: null,
    type: ':seedling:',
  },
  {
    release: null,
    type: 'seed',
  },
  {
    release: null,
    type: '🌱',
  },
  {
    release: 'patch',
    type: ':mag:',
  },
  {
    release: 'patch',
    type: 'seo',
  },
  {
    release: 'patch',
    type: '🔍️',
  },
  {
    release: null,
    type: ':camera_flash:',
  },
  {
    release: null,
    type: 'snapshot',
  },
  {
    release: null,
    type: '📸',
  },
  {
    release: null,
    type: ':art:',
  },
  {
    release: null,
    type: 'style',
  },
  {
    release: null,
    type: '🎨',
  },
  {
    release: null,
    type: ':white_check_mark:',
  },
  {
    release: null,
    type: 'test',
  },
  {
    release: null,
    type: '✅',
  },
  {
    release: 'patch',
    type: ':speech_balloon:',
  },
  {
    release: 'patch',
    type: 'texts',
  },
  {
    release: 'patch',
    type: '💬',
  },
  {
    release: 'patch',
    type: ':label:',
  },
  {
    release: 'patch',
    type: 'types',
  },
  {
    release: 'patch',
    type: '🏷️',
  },
  {
    release: 'patch',
    type: ':pencil2:',
  },
  {
    release: 'patch',
    type: 'typo',
  },
  {
    release: 'patch',
    type: '✏️',
  },
  {
    release: 'patch',
    type: ':lipstick:',
  },
  {
    release: 'patch',
    type: 'ui',
  },
  {
    release: 'patch',
    type: '💄',
  },
  {
    release: 'patch',
    type: ':arrow_up:',
  },
  {
    release: 'patch',
    type: 'upgrade',
  },
  {
    release: 'patch',
    type: '⬆️',
  },
  {
    release: 'patch',
    type: ':children_crossing:',
  },
  {
    release: 'patch',
    type: 'ux',
  },
  {
    release: 'patch',
    type: '🚸',
  },
  {
    release: null,
    type: ':construction:',
  },
  {
    release: null,
    type: 'wip',
  },
  {
    release: null,
    type: '🚧',
  },
]

// export default releaseRules
module.exports = releaseRules
