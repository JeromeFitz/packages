import _forEach from 'lodash/forEach.js'
import _groupBy from 'lodash/groupBy.js'
import _orderBy from 'lodash/orderBy.js'

function getCommitGroups(groupBy, commits, commitGroupsSort, commitsSort) {
  let commitGroups: any = []

  const commitGroupsObj = _groupBy(commits, function (commit) {
    return commit[groupBy] || ''
  })

  _forEach(commitGroupsObj, function (commits, title: string | boolean) {
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
      title: title,
      commits: commitsSorted,
      order,
    })
  })

  if (commitGroupsSort) {
    commitGroups = _orderBy(commitGroups, commitGroupsSort)
  }

  return commitGroups
}

export default getCommitGroups
