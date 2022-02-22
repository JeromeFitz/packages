import type {
  GithubPluginOptions,
  GitPluginOptions,
  NPMPluginOptions,
  // ReleaseRule,
} from './index'

interface PluginOptions
  extends GitPluginOptions,
    GithubPluginOptions,
    NPMPluginOptions {
  enableGit?: boolean
  enableGithub?: boolean
  enableNpm?: boolean
  enableReleaseNotes?: boolean
  // releaseRules?: ReleaseRule[]
  releaseRules?: any
}

export type { PluginOptions }
