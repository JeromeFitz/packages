import releaseBranchTypes from './branch-types'

const branchTypes = Object.keys(releaseBranchTypes)
  .map((branchType) =>
    releaseBranchTypes[branchType].map(
      (releaseBranchType: string) =>
        !!releaseBranchType && {
          name: `${branchType}/${releaseBranchType}`,
          prerelease: releaseBranchType,
        }
    )
  )
  .filter((b) => b.length)
  .flat()

const branches = [
  { name: 'main' },
  { name: 'canary', prerelease: 'canary' },
  ...branchTypes,
]

export default branches
