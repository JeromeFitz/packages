const isCI = require('is-ci')
!isCI && require('dotenv').config({ path: './.env' })
const _map = require('lodash/map.js')

/**
 * @note(semantic-release) Conventional Branches
 *
 * Configuration object to inform semantic-release what
 *  the prerelease branches are. Add a key as you see fit,
 *  and then in the array all acceptable branch names.
 *
 * This is done in this manner so that it can be a very
 *  visual and one-stop-shop of what prerelease branches
 *  are active on a given repo / branch.
 *
 * ex.) feature/cool-feature => feature: ['cool-feature']
 *
 */
const releaseBranchTypes = {
  ci: [],
  feature: ['src'],
  fix: [],
  refactor: [],
  release: [],
}

const branchTypes = _map(
  releaseBranchTypes,
  (releaseBranchType, releaseBranchTypeIndex) =>
    _map(
      releaseBranchType,
      (branchType) =>
        !!branchType && {
          name: `${releaseBranchTypeIndex}/${branchType}`,
          prerelease: branchType,
        }
    )[0]
).filter((branchType) => !!branchType)

const branches = [
  // x.y.z
  { name: 'main' },
  // x.y.z-develop.1|2|3...
  { name: 'canary', prerelease: 'canary' },
  // x.y.z-develop.1|2|3...
  { name: 'develop', prerelease: 'develop' },
  // x.y.z-[branchType].1|2|3...
  // x.y.z-cool-feature.1|2|3...
  ...branchTypes,
]

const config = {
  branches,
  extends: ['@jeromefitz/semantic-release-config'],
}

/**
 * @note(semantic-release) package overrides
 */
const getConfig = (overrides) => {
  return { ...config, ...overrides }
}

/**
 * @note(semantic-release) { config, getConfig }
 */
module.exports.config = config
module.exports.getConfig = getConfig
