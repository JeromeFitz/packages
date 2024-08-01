import isCI from 'is-ci'
import micromatch from 'micromatch'

const FILE_MAX = 9

const escapedFileNames = (filenames) =>
  // @note(windows) 🪟 need to escape filenames with `shell-quote`
  filenames.map((filename) => `"${filename}"`).join(' ')

const config = (files) => {
  if (isCI && files.length > FILE_MAX) {
    return [`pnpm run format:prettier:check`]
  }

  // @todo(types)
  const lintStaged: any[] = []

  const filesPrettier = micromatch(
    files,
    micromatch.braces(
      '**.{cjs,js,jsx,mjs,ts,tsx,html,json,md,mdx,css,scss,yml,yaml}',
      {
        expand: true,
      },
    ),
  )
  if (filesPrettier.length) {
    const filenames = escapedFileNames(filesPrettier)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isCI
      ? lintStaged.push(`prettier --ignore-unknown --check ${filenames}`)
      : lintStaged.push(
          `prettier --ignore-unknown --write ${filenames}`,
          `git add ${filenames} -u`,
        )
  }

  const filesEslint = micromatch(
    files,
    micromatch.braces('**.{cjs,js,jsx,mjs,ts,tsx}', { expand: true }),
  )
  if (filesEslint.length) {
    const filenames = escapedFileNames(filesEslint)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isCI
      ? lintStaged.push()
      : lintStaged.push(
          `eslint --max-warnings=0 --no-ignore --fix ${filenames}`,
          `git add ${filenames} -u`,
        )
  }

  const filesSyncpack = micromatch(
    files,
    micromatch.braces('**/package.json', { expand: true }),
  )
  if (filesSyncpack.length) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isCI ? lintStaged.push() : lintStaged.push(`pnpm run lint:packages`)
  }

  return lintStaged
}

export type Foo = any
export default config
