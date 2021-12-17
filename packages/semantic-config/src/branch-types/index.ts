import ci from './ci'
import feature from './feature'
import fix from './fix'
import refactor from './refactor'
import release from './release'

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

export default releaseBranchTypes
