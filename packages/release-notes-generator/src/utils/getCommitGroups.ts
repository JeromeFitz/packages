import _forEach from 'lodash/forEach.js'
import _groupBy from 'lodash/groupBy.js'
import _orderBy from 'lodash/orderBy.js'

function getCommitGroups(groupBy, commits, commitGroupsSort, commitsSort) {
  let commitGroups: any = []

  const commitGroupsObj = _groupBy(commits, (commit) => commit[groupBy] || '')

  _forEach(commitGroupsObj, (commits, title: boolean | string) => {
    if (title === '') {
      title = false
    }

    let commitsSorted: any = commits

    if (commitsSort) {
      commitsSorted = _orderBy(commitsSorted, commitsSort)
    }

    const semver = commitsSorted[0].typeSpec.semver

    let order = 99
    if (['fix', 'patch'].includes(semver)) {
      order = 20
    }
    if (['feature', 'minor'].includes(semver)) {
      order = 10
    }
    if (['breaking', 'major'].includes(semver)) {
      order = 0
    }

    commitGroups.push({
      commits: commitsSorted,
      order,
      title: title,
    })
  })

  if (commitGroupsSort) {
    commitGroups = _orderBy(commitGroups, commitGroupsSort)
    // // @todo(#744) analytics -vs- deps-dev
    // console.dir(`>> commitGroupsSort`)
    // console.dir(commitGroups)
  }

  return commitGroups
}

export default getCommitGroups
