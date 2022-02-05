import { readFileSync } from 'fs'
import { resolve } from 'path'

import transformer from './transformer'

const basePath = resolve(__dirname, './templates')

const template = readFileSync(`${basePath}/template.hbs`, 'utf-8')

const header = readFileSync(`${basePath}/header.hbs`, 'utf-8')
const commit = readFileSync(`${basePath}/commit.hbs`, 'utf-8')
const footer = readFileSync(`${basePath}/footer.hbs`, 'utf-8')
const author = readFileSync(`${basePath}/author.hbs`, 'utf-8')

/**
 * @todo customize these configs
 */
const showAuthor = true

const writerOpts = {
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
