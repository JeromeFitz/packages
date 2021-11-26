import gitmojiBuild from './gitmojiBuild.js'
import gitmojiFetch from './gitmojiFetch.js'
import gitmojiTheme from './gitmojiTheme.js'

const init = async () => {
  const { gitmojis } = await gitmojiFetch()
  const types = await gitmojiBuild(gitmojis)
  gitmojiTheme(types)
}

void init()
