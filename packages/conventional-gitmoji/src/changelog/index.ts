import conventionalChangelog from './utils/conventionalChangelog'
import recommendedBumpOpts from './utils/conventionalRecommendedBump'
import gitRawCommitsOpts from './utils/gitRawCommit'
import parserOpts from './utils/parserOpts'
import writerOpts from './utils/writerOpts'

const changelog = {
  conventionalChangelog,
  parserOpts,
  recommendedBumpOpts,
  writerOpts,
  gitRawCommitsOpts,
}

// console.dir(`>> changelog`)
// console.dir(changelog)

export default changelog
