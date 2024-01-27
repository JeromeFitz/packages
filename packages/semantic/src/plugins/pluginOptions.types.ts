import type {
  GitPluginOptions,
  GithubPluginOptions,
  NPMPluginOptions,
  // ReleaseRule,
} from './index.js'

interface PluginOptions
  extends GitPluginOptions,
    GithubPluginOptions,
    NPMPluginOptions {
  enableGit?: boolean
  enableGithub?: boolean
  enableNpm?: boolean
  enableReleaseNotes?: boolean
  enableReleaseNotesCustom?: boolean
  // releaseRules?: ReleaseRule[]
  releaseRules?: any
}

export type { PluginOptions }
