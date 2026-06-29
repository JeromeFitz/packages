const branches = [
  { name: 'main' },
  // add ad-hoc prerelease branches here as needed:
  // { name: 'your-branch-name', prerelease: 'canary' },
]

const config = {
  branches,
  contributorsProhibitList: {
    email: [],
    login: ['BotJerome', 'JeromeFitz'],
  },
}

export { config }
