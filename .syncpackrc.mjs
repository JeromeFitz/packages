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
      dependencies: ['@babel/runtime', 'tar-fs'],
      isIgnored: true,
    },
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
  ],
  source: [],
  versionGroups: [],
}

export default config
