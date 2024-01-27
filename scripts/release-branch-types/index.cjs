const ci = require('./ci.cjs')
const feature = require('./feature.cjs')
const fix = require('./fix.cjs')
const refactor = require('./refactor.cjs')
const release = require('./release.cjs')

/**
 * @todo To get a `prerelease` name these cannot be passed as RegEx.
 *       With Node we can dynamically determine if it meets a RegEx
 *        requirement and pass statically though (down the line).
 *
 *  @todo We can "tell" what branch we are on prior to generation
 *        and may be able to pass `feature/xyz` directly without
 *        needing this set list to be the same for each branch in gitflow
 */
const releaseBranchTypes = {
  ci,
  feature,
  fix,
  refactor,
  release,
}

module.exports = releaseBranchTypes
