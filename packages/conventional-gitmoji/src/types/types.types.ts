// @lol at this filename

type CommitTypes =
  | 'access'
  | 'analytics'
  | 'animation'
  | 'arch'
  | 'assets'
  | 'beer'
  | 'breaking'
  | 'build'
  | 'catch'
  | 'ci'
  | 'clean'
  | 'compat'
  | 'config'
  | 'contrib-add'
  | 'data'
  | 'db'
  | 'dep-add'
  | 'dep-rm'
  | 'dep-up'
  | 'deploy'
  | 'docs-code'
  | 'docs'
  | 'downgrade'
  | 'dx'
  | 'egg'
  | 'experiment'
  | 'feat'
  | 'fix-ci'
  | 'fix'
  | 'flags'
  | 'healthcheck'
  | 'hotfix'
  | 'i18n'
  | 'ignore'
  | 'inf'
  | 'init'
  | 'iphone'
  | 'license'
  | 'lint'
  | 'log-add'
  | 'log-rm'
  | 'logic'
  | 'merge'
  | 'mock'
  | 'mv'
  | 'patch'
  | 'perf'
  | 'poo'
  | 'prune'
  | 'pushpin'
  | 'refactor'
  | 'release'
  | 'revert'
  | 'rip'
  | 'roles'
  | 'secrets'
  | 'security'
  | 'seed'
  | 'seo'
  | 'snapshot'
  | 'style'
  | 'test-fail'
  | 'test'
  | 'texts'
  | 'types'
  | 'typo'
  | 'ui'
  | 'upgrade'
  | 'ux'
  | 'wip'
  //
  | 'chore'
  | 'rollforward'
  | 'run-build'

type ReleaseRuleProps = {
  // @jeromefitz/git-cz doubles up on this field for gitflow
  branch: string | null
  code: string
  commit: CommitTypes
  description: string
  emoji: string
  entity: string
  name: string
  semver: 'breaking' | 'feature' | 'fix' | 'major' | 'minor' | 'patch' | null
  // @note(breaking) can we move away from this dupe key currently required in getTypeSpecs?
  type?: CommitTypes
  value?: CommitTypes
}

type ReleaseRuleTypes = {
  [key in CommitTypes]?: ReleaseRuleProps
}
export type { CommitTypes, ReleaseRuleProps, ReleaseRuleTypes }
