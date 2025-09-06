import { execSync } from 'node:child_process'

const getGitRootDir = () => {
  const devNull = process.platform === 'win32' ? ' nul' : '/dev/null'
  // biome-ignore lint/style/useTemplate: migrate
  const dir = execSync('git rev-parse --show-toplevel 2>' + devNull)
    .toString()
    .trim()

  return dir
}

export { getGitRootDir }
