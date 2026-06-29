const branches = [{ name: 'main' }, { name: 'feat/oxc', prerelease: 'canary' }]

const config = {
  branches,
  contributorsProhibitList: {
    email: [],
    login: ['BotJerome', 'JeromeFitz'],
  },
}

export { config }
