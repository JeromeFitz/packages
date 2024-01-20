import _map from 'lodash/map.js'

import { getConfig } from './packages/semantic/dist/index.js'
import releaseBranchTypes from './scripts/release-branch-types/index.cjs'

const branchTypes = _map(
  releaseBranchTypes,
  (releaseBranchType, releaseBranchTypeIndex) => {
    return _map(releaseBranchType, (branchType) => {
      return (
        !!branchType && {
          name: `${releaseBranchTypeIndex}/${branchType}`,
          prerelease: branchType,
        }
      )
    })[0]
  },
).filter((branchType) => !!branchType)

const branches = [
  { name: 'main' },
  { name: 'canary', prerelease: 'canary' },
  ...branchTypes,
]

const config = {
  branches,
  contributorsProhibitList: {
    email: [],
    login: ['BotJerome', 'JeromeFitz'],
  },
  /**
   * @note(semantic) what a second after ALL THIS we are not even using this?!
   */
  // extends: 'semantic-release-monorepo',
}

// const _config = getConfig(config)

const _config = config
const _getConfig = getConfig

export { _config as config }
export { _getConfig as getConfig }
