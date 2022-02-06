import type { TypesProps } from './index'

type ReleaseRulesProps = {
  message?: string | null
  release?: string | null
  tag?: string | null
  type?: string | null
}

const releaseRules: ReleaseRulesProps[] = []
const getReleaseRules = (types: TypesProps) => {
  Object.keys(types).map((type) => {
    /**
     * @note Need to cover (code|commit|emoji) for
     *  semver based on repo choice
     *
     * @hack
     * (semantic-release) commit.type:
     *  :arrow_up: => :arrow_up
     *  accounting for that here "fixes"
     */
    releaseRules.push({
      release: types[type].semver,
      type: !!types[type] && types[type]?.code.replace(/(:[^:]*):/g, '$1'),
    })
    releaseRules.push({
      release: types[type].semver,
      type: types[type].commit,
    })
    releaseRules.push({
      release: types[type].semver,
      type: types[type].emoji,
    })
  })

  /**
   * @custom
   */
  releaseRules.push({
    message: '*[major]*',
    release: 'major', // breaking
  })
  releaseRules.push({
    message: '*[minor]*',
    release: 'minor', // feature
  })
  releaseRules.push({
    message: '*[patch]*',
    release: 'patch', // fix
  })
  releaseRules.push({
    message: '*[breaking]*',
    release: 'major', // breaking
  })
  releaseRules.push({
    message: '*[feature]*',
    release: 'minor', // feature
  })
  releaseRules.push({
    message: '*[fix]*',
    release: 'patch', // fix
  })

  return releaseRules
}

export default getReleaseRules
