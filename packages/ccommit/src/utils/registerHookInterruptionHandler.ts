/*!
 * reference: https://github.com/carloscuesta/gitmoji-cli
 */
/** biome-ignore-all lint/suspicious/noConsole: migrate */
import process from 'node:process'

import colors from 'ansi-colors'

const registerHookInterruptionHandler = () => {
  // Allow to interrupt the hook without cancelling the commit
  process.on('SIGINT', () => {
    console.log(colors.magenta.bold('❯ [ccommit] interrupted'))
    process.exit(0)
  })
}

export { registerHookInterruptionHandler }
