import transformer from './transformer.js'

/**
 * @note (semantic)
 * templates need to be redone away from handlebars
 * and will be replaced by remark or replace string
 */

/**
 * @todo customize these configs
 *
 * - transform should receive config
 * - all writerOpts should be able to be overwritten
 * - i guess we are going _back_ to handlebars haha
 */

const writerOpts = {
  commitGroupsSort: ['order', 'title'],
  commitsSort: ['scope', 'subject'],
  groupBy: 'type',
  noteGroupsSort: ['title'],
  notesSort: ['title'],
  // @todo pass config from changelog here?
  transform: (commit: any, context: any) => transformer(commit, context),
}

export default writerOpts
