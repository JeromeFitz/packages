// import data from 'gitmojis'

// @todo(eslint) back to import
// eslint-disable-next-line @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports
const data = require('gitmojis')

import type { IReleaseRule } from '../types/index.js'

import _rewrites from '../config/rewrites.js'
import _types from '../config/types.js'

const { gitmojis } = data

const getGitmoji = (): IReleaseRule => {
  // @todo(complexity) 16
  // eslint-disable-next-line complexity
  gitmojis.map((gitmoji: any) => {
    const rewrite = _rewrites.find((r) => r?.from === gitmoji.name)
    // @todo(NICE-129) eslint
    // eslint-disable-next-line no-extra-boolean-cast
    if (!!rewrite) {
      const semver =
        rewrite.semver === undefined
          ? gitmoji?.semver || null
          : rewrite.semver || gitmoji?.semver || null

      _types[rewrite.to] = {
        // @todo(NICE-129) eslint
        // eslint-disable-next-line no-extra-boolean-cast
        branch: Boolean(rewrite?.branch) ? rewrite.branch : null,
        code: gitmoji?.code,
        commit: rewrite.to,
        description: gitmoji?.description,
        emoji: gitmoji?.emoji,
        entity: gitmoji?.entity,
        name: gitmoji?.name,
        /**
         * @note
         * (semantic)
         * big lol, README does not meet requirements:
         * ref: https://github.com/semantic-release/semantic-release#commit-message-format
         *
         * ["major","premajor","minor","preminor","patch","prepatch","prerelease"]
         **/
        // @todo(NICE-129) eslint
        // eslint-disable-next-line no-extra-boolean-cast
        semver: !!semver
          ? semver
              .replace('fix', 'patch')
              .replace('feature', 'minor')
              .replace('breaking', 'major')
          : null,
      }
    } else {
      console.dir(`@todo(conventional-gitmoji) create rewrite for: ${gitmoji.name}`)
    }
  })

  const items = Object.keys(_types)
    .sort()
    .reduce((type, key) => {
      type[key] = _types[key]

      return type
    }, {})

  return items
}

export default getGitmoji
