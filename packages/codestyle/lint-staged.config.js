/**
 * @note
 * If you are on Windows, you may need to escape filenames with `shell-quote`.
 */
const escapedFileNames = (filenames) =>
  filenames.map((filename) => `"${filename}"`).join(' ')

module.exports = {
  '**/*.{js,jsx,ts,tsx}': (files) => {
    const filenames = escapedFileNames(files)
    return [
      `prettier --with-node-modules --ignore-path='./.prettierignore_staged' --write ${filenames}`,
      `eslint --no-ignore --max-warnings=0 --fix ${filenames}`,
      `git add ${filenames}`,
    ]
  },
  '**/*.{json,md,mdx,css,html,yml,yaml,scss}': (files) => {
    const filenames = escapedFileNames(files)
    return [
      `prettier --with-node-modules --ignore-path='./.prettierignore_staged' --write ${filenames}`,
      `git add ${filenames}`,
    ]
  },
}
