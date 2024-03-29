import conventionalChangelog from './utils/conventionalChangelog.js'
import recommendedBumpOpts from './utils/conventionalRecommendedBump.js'
import gitRawCommitsOpts from './utils/gitRawCommit.js'
import parserOpts from './utils/parserOpts.js'
import writerOpts from './utils/writerOpts.js'

const changelog = {
  conventionalChangelog,
  gitRawCommitsOpts,
  parserOpts,
  recommendedBumpOpts,
  writerOpts,
}

export default changelog
