import isCI from 'is-ci'

const escapedFileNames = (filenames: any) =>
  // @note(windows) 🪟 need to escape filenames with `shell-quote`
  filenames.map((filename: any) => `"${filename}"`).join(' ')

const config = {
  '**/*.{cjs,js,jsx,mjs,ts,tsx}': (files: any) => {
    const filenames = escapedFileNames(files)
    return isCI
      ? [`prettier --list-different ${filenames} --ignore-unknown --loglevel log`]
      : [
          `eslint --no-ignore --max-warnings=0 --fix ${filenames}`,
          `git add ${filenames} -u`,
        ]
  },
  '**/*.{json,md,mdx,css,html,yml,yaml,scss}': (files: any) => {
    const filenames = escapedFileNames(files)
    return isCI
      ? [`prettier --list-different ${filenames} --ignore-unknown --loglevel log`]
      : []
  },
}

export default config
