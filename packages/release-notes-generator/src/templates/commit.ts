import type { CommitReference } from 'conventional-commits-parser'

import type { MarkdownContext, RenderMeta, TransformedCommit } from '../types'

const commit = (
  context: MarkdownContext,
  commits: TransformedCommit[],
  meta: RenderMeta,
): string => {
  const { commit: commitPath, commitGroups, linkReferences } = context
  const { repositoryUrl } = meta

  const commitFormat = `- {scope}{subject}{hash}{references}\n`

  const getHash = (hash: string | undefined): string => {
    if (!hash) return ''
    if (linkReferences) {
      return ` [ \`${hash}\` ](${repositoryUrl}/${commitPath}/${hash})`
    }
    return ` ${hash}`
  }

  const getReferences = (references: CommitReference[]): string => {
    if (references.length === 0) return ''
    const items = references
      .filter((ref) => ref.issue)
      .map((ref) => `[ #${ref.issue} ]`)
    return items.length > 0 ? `, closes ${items.join(' ')}` : ''
  }

  let markdown = ''

  for (const commitGroup of commitGroups) {
    const groupType = commitGroup.commits[0]?.typeSpec?.type
    markdown += `#### ${commitGroup.commits[0]?.type}\n`

    for (const c of commits) {
      if (groupType !== c.typeSpec?.type) continue
      const { hash, header, references = [], scope, subject } = c
      markdown += commitFormat
        .replace(/\{scope\}/g, scope ? `**${scope}**: ` : '')
        .replace(/\{subject\}/g, subject ?? header ?? '')
        .replace(/\{hash\}/g, getHash(hash))
        .replace(/\{references\}/g, getReferences(references as CommitReference[]))
    }

    markdown += '\n'
  }

  return markdown
}

export { commit }
