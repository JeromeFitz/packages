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
      dependencies: ['**'],
      dependencyTypes: [
        'prod',
        'resolutions',
        'overrides',
        'pnpmOverrides',
        'local',
      ],
      packages: ['**'],
      range: '',
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

export default config
