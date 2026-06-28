import type { MarkdownContext, RenderMeta, TransformedCommit } from '../types'

const footer = (
  context: MarkdownContext,
  _commits: TransformedCommit[],
  _meta: RenderMeta,
): string => {
  const { noteGroups } = context
  const noteFormat = `- {scope}{text}\n`

  let markdown = ''

  for (const noteGroup of noteGroups) {
    const { notes } = noteGroup
    markdown += `#### ${notes[0].title}\n`
    for (const note of notes) {
      const { scope, text } = note
      markdown += noteFormat
        .replace(/\{scope\}/g, scope ? `**${scope}**: ` : '')
        .replace(/\{text\}/g, text ?? '')
    }
    markdown += '\n'
  }

  return markdown
}

export { footer }
