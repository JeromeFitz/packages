import { execSync } from 'child_process'

const getBranchName = () => {
  const branchName = execSync('git rev-parse --abbrev-ref HEAD').toString().trim()

  return branchName
}

export default getBranchName
