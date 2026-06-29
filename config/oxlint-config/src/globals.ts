import type { OxlintGlobals } from 'oxlint'

import globals from 'globals'

const globalsForOxlint = {
  ...globals.browser,
  ...globals.node,
  ...globals.vitest,
}

const globalsForOxlintMigrated: OxlintGlobals = Object.fromEntries(
  Object.entries(globalsForOxlint).map(([key, value]) => [
    key,
    value === false ? 'readonly' : value === true ? 'writable' : value,
  ]),
)

export { globalsForOxlintMigrated as globals }
