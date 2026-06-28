import releaseBranchTypes from './scripts/release-branch-types/index.cjs'

const branchTypes = Object.entries(releaseBranchTypes)
  .map(([category, types]) =>
    types[0] ? { name: `${category}/${types[0]}`, prerelease: types[0] } : null,
  )
  .filter(Boolean)

const branches = [{ name: 'main' }, ...branchTypes]

const config = {
  branches,
  contributorsProhibitList: {
    email: [],
    login: ['BotJerome', 'JeromeFitz'],
  },
}

export { config }
