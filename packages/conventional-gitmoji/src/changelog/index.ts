import conventionalChangelog from "./utils/conventional-changelog";
import recommendedBumpOpts from "./utils/conventional-recommended-bump";
import gitRawCommitsOpts from "./utils/git-raw-commit";
import parserOpts from "./utils/parser-opts";
import writerOpts from "./utils/writer-opts";

const changelog = {
  conventionalChangelog,
  gitRawCommitsOpts,
  parserOpts,
  recommendedBumpOpts,
  writerOpts,
};

export default changelog;
