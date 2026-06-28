/** biome-ignore-all lint/suspicious/noConsole: migrate */
import type { IReleaseRule } from '../types/index'

import { gitmojis } from 'gitmojis'

import _rewrites from '../config/rewrites'
import _types from '../config/types'

const getGitmoji = (): IReleaseRule => {
  const types: IReleaseRule = { ..._types }

  for (const gitmoji of gitmojis) {
    const rewrite = _rewrites.find((r) => r?.from === gitmoji.name)

    if (!rewrite) {
      console.dir(`@todo(conventional-gitmoji) create rewrite for: ${gitmoji.name}`)
      continue
    }

    const semver =
      rewrite.semver === undefined
        ? gitmoji.semver || null
        : rewrite.semver || gitmoji.semver || null

    types[rewrite.to] = {
      branch: rewrite.branch || null,
      code: gitmoji.code,
      commit: rewrite.to,
      description: gitmoji.description,
      emoji: gitmoji.emoji,
      entity: gitmoji.entity,
      name: gitmoji.name,
      semver: semver
        ? semver
            .replace('fix', 'patch')
            .replace('feature', 'minor')
            .replace('breaking', 'major')
        : null,
    }
  }

  return Object.keys(types)
    .sort()
    .reduce<IReleaseRule>((sorted, key) => {
      sorted[key] = types[key]

      return sorted
    }, {})
}

export default getGitmoji
