import type { PluginSpec } from 'semantic-release'

import { describe, expect, it } from 'vitest'

import { getPluginOptions } from './pluginOptions'

const pluginName = (p: PluginSpec): string =>
  Array.isArray(p) ? String(p[0]) : String(p)

const pluginNames = (plugins: PluginSpec[]): string[] => plugins.map(pluginName)

describe('getPluginOptions', () => {
  it('default plugins snapshot', () => {
    expect(getPluginOptions()).toMatchSnapshot()
  })

  describe('default enabled set', () => {
    it('includes commit-analyzer, release-notes-generator (custom), npm, github', () => {
      const names = pluginNames(getPluginOptions())
      expect(names).toContain('@semantic-release/commit-analyzer')
      expect(names).toContain('@jeromefitz/release-notes-generator')
      expect(names).toContain('@semantic-release/npm')
      expect(names).toContain('@semantic-release/github')
    })

    it('excludes git and standard release-notes-generator by default', () => {
      const names = pluginNames(getPluginOptions())
      expect(names).not.toContain('@semantic-release/git')
      expect(names).not.toContain('@semantic-release/release-notes-generator')
    })

    it('commit-analyzer is always first', () => {
      expect(pluginName(getPluginOptions()[0])).toBe(
        '@semantic-release/commit-analyzer',
      )
    })
  })

  describe('enableGit', () => {
    it('false (default) excludes git plugin', () => {
      expect(pluginNames(getPluginOptions({ enableGit: false }))).not.toContain(
        '@semantic-release/git',
      )
    })

    it('true includes git plugin', () => {
      expect(pluginNames(getPluginOptions({ enableGit: true }))).toContain(
        '@semantic-release/git',
      )
    })
  })

  describe('enableGithub', () => {
    it('false excludes github plugin', () => {
      expect(pluginNames(getPluginOptions({ enableGithub: false }))).not.toContain(
        '@semantic-release/github',
      )
    })
  })

  describe('enableNpm', () => {
    it('false excludes npm plugin', () => {
      expect(pluginNames(getPluginOptions({ enableNpm: false }))).not.toContain(
        '@semantic-release/npm',
      )
    })
  })

  describe('enableReleaseNotes', () => {
    it('true includes standard release-notes-generator', () => {
      expect(pluginNames(getPluginOptions({ enableReleaseNotes: true }))).toContain(
        '@semantic-release/release-notes-generator',
      )
    })
  })

  describe('enableReleaseNotesCustom', () => {
    it('false excludes custom release-notes-generator', () => {
      expect(
        pluginNames(getPluginOptions({ enableReleaseNotesCustom: false })),
      ).not.toContain('@jeromefitz/release-notes-generator')
    })
  })

  describe('releaseRules', () => {
    it('custom rules are appended after defaults', () => {
      const customRule = { release: 'major' as const, type: 'breaking' as const }
      const plugins = getPluginOptions({ releaseRules: [customRule] })
      const [, analyzerConfig] = plugins[0] as [string, { releaseRules: unknown[] }]
      const rules = analyzerConfig.releaseRules
      expect(rules.at(-1)).toEqual(customRule)
    })
  })

  describe('pkgRoot', () => {
    it('defaults to ./dist', () => {
      const plugins = getPluginOptions()
      const npmPlugin = plugins.find(
        (p) => pluginName(p) === '@semantic-release/npm',
      ) as [string, { pkgRoot: string }]
      expect(npmPlugin[1].pkgRoot).toBe('./dist')
    })

    it('can be overridden', () => {
      const plugins = getPluginOptions({ pkgRoot: './build' })
      const npmPlugin = plugins.find(
        (p) => pluginName(p) === '@semantic-release/npm',
      ) as [string, { pkgRoot: string }]
      expect(npmPlugin[1].pkgRoot).toBe('./build')
    })
  })
})
