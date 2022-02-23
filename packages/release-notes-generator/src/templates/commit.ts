import _size from 'lodash/size'

const commit = (context, commits, meta) => {
  const { commitGroups, linkReferences, commit } = context
  const { repositoryUrl } = meta

  // @todo(release-notes) make variable
  const commitFormat = `- {scope}{subject}{hash}{references}\n`

  let markdown = ``

  const getHash = (hash) => {
    if (!hash) return ''
    if (linkReferences) {
      const url = ` ${repositoryUrl}/${commit}/${hash}`
      return ` [ \`${hash}\` ](${url})`
    }
    return ` ${hash}`
  }

  const getReferences = (references) => {
    if (!references || _size(references) === 0) return ''
    let markdownReference = `, closes `
    const markdownReferenceArray: any = []
    references.map((reference: any) => {
      // markdownReferenceArray.push(
      //   `[ ${reference.issue} ](${repositoryUrl}/${reference.issue})`
      // )
      if (!!reference.issue) {
        markdownReferenceArray.push(`[ #${reference.issue} ]`)
      }
    })
    markdownReference += markdownReferenceArray.join(' ')
    return markdownReference
  }

  commitGroups.map((commitGroup) => {
    const { commits } = commitGroup
    const type = commits[0]?.type
    markdown += `#### ${type}\n`
    commits.map((commit) => {
      const { scope, subject, header, hash, references } = commit
      const commitMarkdown = commitFormat
        .replace(/\{scope\}/g, scope ? `**${scope}**: ` : '')
        .replace(/\{subject\}/g, subject ? subject : header)
        .replace(/\{hash\}/g, getHash(hash))
        .replace(/\{references\}/g, getReferences(references))

      markdown += commitMarkdown
    })
    markdown += `\n`
  })

  return markdown
}

export { commit }
