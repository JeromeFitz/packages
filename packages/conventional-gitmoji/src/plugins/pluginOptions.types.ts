import type {
  GithubPluginOptions,
  GitPluginOptions,
  NPMPluginOptions,
  ReleaseRule,
} from './index'

interface PluginOptions
  extends GitPluginOptions,
    GithubPluginOptions,
    NPMPluginOptions {
  enableGit?: boolean
  enableGithub?: boolean
  enableNPM?: boolean
  enableReleaseNotes?: boolean
  releaseRules?: ReleaseRule[]
}

export type { PluginOptions }
