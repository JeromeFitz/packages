import conventionalChangelog from './utils/conventionalChangelog.js'
import recommendedBumpOpts from './utils/conventionalRecommendedBump.js'
import gitRawCommitsOpts from './utils/gitRawCommit.js'
import parserOpts from './utils/parserOpts.js'
import writerOpts from './utils/writerOpts.js'

const changelog = {
  conventionalChangelog,
  parserOpts,
  recommendedBumpOpts,
  writerOpts,
  gitRawCommitsOpts,
}

export default changelog
