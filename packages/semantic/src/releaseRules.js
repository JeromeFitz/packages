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
]

// export default releaseRules
module.exports = releaseRules
