const branches = [
  { name: 'main' },
  { name: 'refactor/semantic', prerelease: 'canary' },
]

const config = {
  branches,
  contributorsProhibitList: {
    email: [],
    login: ['BotJerome', 'JeromeFitz'],
  },
}

export { config }
