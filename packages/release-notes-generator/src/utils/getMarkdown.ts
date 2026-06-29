import { commit, contributor, footer, header } from "../templates/index";
import type { MarkdownContext, RenderMeta, TransformedCommit } from "../types";

const getMarkdown = async (
  context: MarkdownContext,
  commits: TransformedCommit[],
): Promise<string> => {
  const repositoryUrl = context.repository
    ? `${context.host}/${context.owner}/${context.repository}`
    : "";

  const meta: RenderMeta = { repositoryUrl };

  let markdown = header(context, commits, meta);
  markdown += "\n";
  markdown += commit(context, commits, meta);
  markdown += "\n";
  markdown += await contributor(context, commits, meta);
  markdown += "\n";
  markdown += footer(context, commits, meta);
  markdown += "\n";

  return markdown;
};

export { getMarkdown };
