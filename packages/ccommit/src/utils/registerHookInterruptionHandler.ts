/**
 * reference: https://github.com/carloscuesta/gitmoji-cli
 */
const registerHookInterruptionHandler = () => {
  // Allow to interrupt the hook without cancelling the commit
  process.on('SIGINT', () => {
    console.warn('>> [ccommit] was interrupted')
    process.exit(0)
  })
}

export { registerHookInterruptionHandler }
