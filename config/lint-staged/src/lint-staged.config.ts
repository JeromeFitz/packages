import isCI from 'is-ci'
import micromatch from 'micromatch'

const FILE_MAX = 9

const escapedFileNames = (filenames) =>
  // @note(windows) 🪟 need to escape filenames with `shell-quote`
  filenames
    .map((filename) => `"${filename}"`)
    .join(' ')

const config = (files) => {
  if (isCI && files.length > FILE_MAX) {
    return [`pnpm run format:prettier:check`]
  }

  // @todo(types)
  const lintStaged: any[] = []

  lintStaged.push(
    `pnpm exec biome format --write --no-errors-on-unmatched`,
    `pnpm exec biome check --write --no-errors-on-unmatched --files-ignore-unknown=true`,
  )

  const filesPrettier = micromatch(
    files,
    micromatch.braces('**/package.json', {
      expand: true,
    }),
  )
  if (filesPrettier.length) {
    const filenames = escapedFileNames(filesPrettier)
    isCI
      ? lintStaged.push(`prettier --ignore-unknown --check ${filenames}`)
      : lintStaged.push(
          `prettier --ignore-unknown --write ${filenames}`,
          `git add ${filenames} -u`,
        )
  }

  const filesSyncpack = micromatch(
    files,
    micromatch.braces('**/package.json', { expand: true }),
  )
  if (filesSyncpack.length) {
    isCI ? lintStaged.push() : lintStaged.push(`pnpm run lint:packages`)
  }

  return lintStaged
}

export type Foo = any
export default config
