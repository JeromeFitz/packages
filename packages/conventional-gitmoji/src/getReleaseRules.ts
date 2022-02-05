import type { TypesProps } from './index'

type ReleaseRulesProps = {
  release: string | null
  type: string | null
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

  return releaseRules
}

export default getReleaseRules
