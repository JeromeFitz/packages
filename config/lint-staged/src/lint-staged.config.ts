import micromatch from 'micromatch'

const escapedFileNames = (filenames) =>
  // @note(windows) 🪟 need to escape filenames with `shell-quote`
  filenames.map((filename) => `"${filename}"`).join(' ')

const config = (files) => {
  const lintStaged: string[] = []

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
    lintStaged.push(
      `prettier --ignore-unknown --write ${filenames}`,
      `git add ${filenames} -u`,
    )
  }

  const filesSyncpack = micromatch(
    files,
    micromatch.braces('**/package.json', { expand: true }),
  )
  if (filesSyncpack.length) {
    lintStaged.push(`pnpm run lint:packages`)
  }

  return lintStaged
}

export default config
