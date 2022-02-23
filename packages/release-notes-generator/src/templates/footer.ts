// eslint-disable-next-line @typescript-eslint/no-unused-vars
const footer = (context, commits, meta) => {
  const { noteGroups } = context

  // @todo(release-notes) make variable
  const noteFormat = `- {scope}{text}\n`

  let markdown = ``

  noteGroups.map((noteGroup) => {
    const { notes } = noteGroup
    const title = notes[0].title
    markdown += `#### ${title}\n`
    notes.map((note) => {
      const { scope, text } = note
      const noteMarkdown = noteFormat
        .replace(/\{scope\}/g, scope ? `**${scope}**: ` : '')
        .replace(/\{text\}/g, text ? text : '')

      markdown += noteMarkdown
    })
    markdown += `\n`
  })

  return markdown
}

export { footer }
