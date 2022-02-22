import { readFileSync } from 'fs'
import { resolve } from 'path'

import transformer from './transformer'

/**
 * @note (semantic)
 * templates need to be where the `writerOpts` is executed
 * please move this _away_ from init writerOpts and pass as config instead
 */
const basePath = resolve(__dirname, './templates')

const template = readFileSync(`${basePath}/template.hbs`, 'utf-8')

const header = readFileSync(`${basePath}/header.hbs`, 'utf-8')
const commit = readFileSync(`${basePath}/commit.hbs`, 'utf-8')
const footer = readFileSync(`${basePath}/footer.hbs`, 'utf-8')
const author = readFileSync(`${basePath}/author.hbs`, 'utf-8')

/**
 * @todo customize these configs
 *
 * - transform should receive config
 * - all writerOpts should be able to be overwritten
 * - i guess we are going _back_ to handlebars haha
 */
const showAuthor = true

const writerOpts = {
  // @todo pass config from changelog here?
  transform: (commit: any, context: any) => transformer(commit, context),
  groupBy: 'type',
  commitGroupsSort: ['title'],
  commitsSort: ['scope', 'subject'],
  noteGroupsSort: 'title',
  mainTemplate: template,
  headerPartial: header,
  commitPartial: commit.replace(/{{gitUserInfo}}/g, showAuthor ? author : ''),
  footerPartial: footer,
}

export default writerOpts
