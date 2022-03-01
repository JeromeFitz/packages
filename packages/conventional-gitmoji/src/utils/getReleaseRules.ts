// import GraphemeSplitter from 'grapheme-splitter'

import type { IReleaseRuleProps, IReleaseRule } from '../index'

// const splitter = new GraphemeSplitter()

// @note(semantic-release) can we re-use types here?
type CustomReleaseRulesProps = {
  message?: string | null
  release?: string | null
  tag?: string | null
  type?: string | null
}

const releaseRules: CustomReleaseRulesProps[] = []
const getReleaseRules = (types: IReleaseRule) => {
  Object.keys(types).map((type) => {
    const releaseRule: IReleaseRuleProps = types[type]
    /**
     * @note
     * - Only run this if the releaseRule has a valid semver
     *
     * @hack
     * - Need to create rules for whichever type of commits team is using
     * - - code
     * - - commit
     * - - emoji
     *
     */
    if (!!releaseRule && !!releaseRule.semver) {
      releaseRules.push({
        release: releaseRule.semver,
        /**
         * @hack (semantic-release)
         * :arrow_up: => :arrow_up
         * accounting for that here "fixes"
         */
        type: releaseRule?.code.replace(/(:[^:]*):/g, '$1'),
      })
      releaseRules.push({
        release: releaseRule.semver,
        type: releaseRule?.code,
      })
      releaseRules.push({
        release: releaseRule.semver,
        type: releaseRule.commit,
      })
      releaseRules.push({
        release: releaseRule.semver,
        type: releaseRule.emoji,
        // type: splitter.splitGraphemes(releaseRule.emoji)[0],
      })
    }
  })

  return releaseRules
}

export default getReleaseRules
