import { parserOpts, writerOpts } from "@jeromefitz/conventional-gitmoji";
import type { PluginSpec } from "semantic-release";

import { commitAnalyzer, git, github, npm } from "./index";
import type { PluginOptions } from "./pluginOptions.types";

const getPluginOptions = (optionsPassed?: PluginOptions): PluginSpec[] => {
  const options: PluginOptions = {
    enableGit: false,
    enableGithub: true,
    enableNpm: true,
    enableReleaseNotes: false,
    enableReleaseNotesCustom: true,
    pkgRoot: "./dist",
    ...optionsPassed,
  };

  const releaseNotesConfig: PluginSpec = [
    "@semantic-release/release-notes-generator",
    {
      config: "@jeromefitz/conventional-gitmoji",
      parserOpts,
      writerOpts,
    },
  ];
  const releaseNotesCustomConfig: PluginSpec = "@jeromefitz/release-notes-generator";

  const { npmPublish, pkgRoot, tarballDir } = options;
  const npmConfig = npm({ npmPublish, pkgRoot, tarballDir });

  const {
    addReleases,
    assignees,
    failComment,
    failTitle,
    githubApiPathPrefix,
    githubAssets,
    githubUrl,
    labels,
    proxy,
    releasedLabels,
  } = options;
  const githubConfig = github({
    addReleases,
    assignees,
    failComment,
    failTitle,
    githubApiPathPrefix,
    githubAssets,
    githubUrl,
    labels,
    proxy,
    releasedLabels,
  });

  const gitConfig = git(options);

  return [
    commitAnalyzer(options.releaseRules),
    ...(options.enableReleaseNotes ? [releaseNotesConfig] : []),
    ...(options.enableReleaseNotesCustom ? [releaseNotesCustomConfig] : []),
    ...(options.enableNpm ? [npmConfig] : []),
    ...(options.enableGithub ? [githubConfig] : []),
    ...(options.enableGit ? [gitConfig] : []),
  ];
};

export { getPluginOptions };
