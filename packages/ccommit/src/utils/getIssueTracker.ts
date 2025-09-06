import { execSync } from 'node:child_process'

const getIssueTracker = () => {
  let branch: any,
    init = ''

  //  branch = 'ABC-123'
  branch = execSync('git rev-parse --abbrev-ref HEAD')
  branch = branch.toString().trim().split('/')
  const branchType = branch[0]
  const branchName = !branch[1] ? branchType : branch[1]

  const it = branchName.split('-')
  const itProject = it[0]
  const itNumber = !it[1] ? itProject : it[1]
  const itTicket = `${itProject}-${itNumber}`

  // biome-ignore lint/suspicious/noGlobalIsFinite: migrate
  // biome-ignore lint/suspicious/noGlobalIsNan: migrate
  if (!isNaN(parseFloat(itNumber)) && isFinite(parseFloat(itNumber))) {
    init = itTicket
  }
  return init
}

export { getIssueTracker }
