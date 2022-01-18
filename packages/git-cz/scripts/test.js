// import config from '../changelog.config.js'
// import config from '/Users/jerome/Code/@jeromefitz/packages/packages/git-cz/changelog.config.js'

const foo = async () =>
  await import(
    '/Users/jerome/Code/@jeromefitz/packages/packages/git-cz/changelog.config.js'
  )

const bar = await import(
  '/Users/jerome/Code/@jeromefitz/packages/packages/git-cz/changelog.config.js'
)
//
// console.dir(await foo())
console.dir(bar.default)
