import type { CommitGroup, TransformedCommit } from "../types";

function multiKeySort<T>(keys: string[]): (a: T, b: T) => number {
  return (a, b) => {
    const ar = a as Record<string, unknown>;
    const br = b as Record<string, unknown>;
    for (const key of keys) {
      const av = ar[key] ?? 0;
      const bv = br[key] ?? 0;
      if (av < bv) return -1;
      if (av > bv) return 1;
    }
    return 0;
  };
}

function semverToOrder(semver: string | null | undefined): number {
  if (semver && ["breaking", "major"].includes(semver)) return 0;
  if (semver && ["feature", "minor"].includes(semver)) return 10;
  if (semver && ["fix", "patch"].includes(semver)) return 20;
  return 99;
}

function toCommitGroup(
  title: string,
  groupCommits: TransformedCommit[] | undefined,
  commitsSort: string[],
): CommitGroup {
  const sorted =
    commitsSort.length > 0
      ? [...(groupCommits ?? [])].sort(multiKeySort<TransformedCommit>(commitsSort))
      : [...(groupCommits ?? [])];

  return {
    commits: sorted,
    order: semverToOrder(sorted[0]?.typeSpec?.semver),
    title: title === "" ? false : title,
  };
}

function getCommitGroups(
  groupBy: string,
  commits: TransformedCommit[],
  commitGroupsSort: string[],
  commitsSort: string[],
): CommitGroup[] {
  const grouped = Object.groupBy(
    commits,
    (commit) => (commit[groupBy] as string | undefined) ?? "",
  );

  const commitGroups = Object.entries(grouped).map(([title, group]) =>
    toCommitGroup(title, group, commitsSort),
  );

  return commitGroupsSort.length > 0
    ? commitGroups.sort(multiKeySort<CommitGroup>(commitGroupsSort))
    : commitGroups;
}

export { getCommitGroups };
