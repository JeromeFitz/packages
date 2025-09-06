import _size from 'lodash/size.js'

const commit = (context, commits, meta) => {
  const { commit, commitGroups, linkReferences } = context
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

      // biome-ignore lint/complexity/noExtraBooleanCast: migrate
      if (!!reference.issue) {
        markdownReferenceArray.push(`[ #${reference.issue} ]`)
      }
    })
    markdownReference += markdownReferenceArray.join(' ')
    return markdownReference
  }

  commitGroups.map((commitGroup) => {
    const { _ } = commitGroup
    const type = _[0]?.type
    // // @todo(#744) analytics -vs- deps-dev
    // console.dir(`> commit :: commitGroup`)
    // console.dir(_)
    // console.dir(`-`)
    // console.dir(type)
    // console.dir(`---`)

    markdown += `#### ${type}\n`
    commits.map((commit) => {
      const { hash, header, references, scope, subject } = commit
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
