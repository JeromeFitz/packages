interface GithubPluginOptions {
  addReleases?: boolean;
  assignees?: string[];
  failComment?: string;
  failTitle?: string;
  githubApiPathPrefix?: string;
  githubAssets?: string[];
  githubUrl?: string;
  labels?: string[];
  proxy?: string;
  releasedLabels?: string[];
}

export type { GithubPluginOptions };
