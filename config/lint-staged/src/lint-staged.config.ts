/**
 * @note
 * If you are on Windows, you may need to escape filenames with `shell-quote`.
 */
// @todo(any)
const escapedFileNames = (filenames: any) =>
  filenames.map((filename: any) => `"${filename}"`).join(' ')

const config = {
  '**/*.{cjs,js,jsx,mjs,ts,tsx}': (files: any) => {
    const filenames = escapedFileNames(files)
    return [
      `prettier --with-node-modules --ignore-path='./.prettierignore_staged' --write ${filenames} --ignore-unknown --loglevel warn`,
      `eslint --no-ignore --max-warnings=0 --fix ${filenames}`,
      `git add ${filenames}`,
    ]
  },
  '**/*.{json,md,mdx,css,html,yml,yaml,scss}': (files: any) => {
    const filenames = escapedFileNames(files)
    return [
      `prettier --with-node-modules --ignore-path='./.prettierignore_staged' --write ${filenames} --ignore-unknown --loglevel warn`,
      `git add ${filenames}`,
    ]
  },
}

export default config
