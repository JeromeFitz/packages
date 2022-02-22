import conventionalCommitsFilter from 'conventional-commits-filter'
import { sync as conventionalCommitsParser } from 'conventional-commits-parser'

import { getMarkdown } from './utils/getMarkdown'
import { processCommit } from './utils/processCommit'

async function generateNotes(pluginConfig, context) {
  const { parserOpts, writerOpts } = pluginConfig
  const { commits: commitsPassed } = context

  const commitsParsed = conventionalCommitsFilter(
    commitsPassed
      .filter(({ message }) => {
        if (!message.trim()) {
          return false
        }
        return true
      })
      .map((commitRaw) => ({
        ...commitRaw,
        ...conventionalCommitsParser(commitRaw.message, {
          // referenceActions,
          // issuePrefixes,
          ...parserOpts,
        }),
      }))
  )

  const commits: any = []
  await commitsParsed.map(async (commitParsed) => {
    const commitProcessed: any = await processCommit(
      commitParsed,
      writerOpts.transform,
      context
    )
    commits.push(commitProcessed)
  })

  return getMarkdown(context, commits)
}

export { generateNotes }
