import { execSync } from 'child_process'

const getStagedFiles = () => {
  const stagedFiles = execSync('git diff --name-only --staged').toString().trim()

  return !!stagedFiles
}

export { getStagedFiles }
