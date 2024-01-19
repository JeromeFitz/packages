// @ts-check

/** @type {import("syncpack").RcFile} */
const config = {
  dependencyTypes: ['dev', 'overrides', 'pnpmOverrides', 'prod', 'resolutions'],
  filter: '.',
  formatRepository: false,
  indent: '  ',
  lintFormatting: false,
  semverGroups: [
    {
      range: '',
      dependencyTypes: [
        'prod',
        'resolutions',
        'overrides',
        'pnpmOverrides',
        'local',
      ],
      dependencies: ['**'],
      packages: ['**'],
    },
    // {
    //   "range": "^",
    //   "dependencyTypes": [
    //     "dev",
    //     "peer"
    //   ],
    //   "dependencies": [
    //     "**"
    //   ],
    //   "packages": [
    //     "**"
    //   ]
    // }
  ],
  source: [],
  versionGroups: [],
}

module.exports = config
