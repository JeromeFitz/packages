// ref: https://octokit.github.io/rest.js/v18#issues-create-label

const labels = [
  {
    color: "EAB820",
    description: "WIP: Waiting on 3rd Party Updates",
    emoji: "3️⃣️",
    name: "Awaiting 3rd Party",
  },
  {
    color: "EDD674",
    description: "Please look at this PR first for code reviews",
    emoji: "⏲️",
    name: "Awaiting Code Review (Priority)",
  },
  {
    color: "D8EBF6",
    description: "Something isn’t working",
    emoji: "🐛️",
    name: "Bug",
  },
  {
    color: "ECD9BA",
    description: "Please address any changes requested to the PR",
    emoji: "♻️",
    name: "Changes Requested",
  },
  {
    color: "C2E0C6",
    description: "Please address merge conflicts",
    emoji: "🛠️",
    name: "Conflicts",
  },
  {
    color: "E8F1FA",
    description: "Pull requests that update a dependency file",
    emoji: "📦️",
    name: "Dependencies",
  },

  {
    color: "7057ff",
    description: "Please review, hold on merging",
    emoji: "🗓️",
    name: "DNM: Awaiting Scheduling",
  },
  {
    color: "cccccc",
    description: "Identified to be closed when determined which should be merged",
    emoji: "💕️",
    name: "Duplicate",
  },
  {
    color: "5e0b82",
    description: "Do not merge until further notice",
    emoji: "🛑️",
    name: "Do Not Merge",
  },
  {
    color: "d4c5f9",
    description: "Gitflow Standards",
    emoji: ":octocat:",
    name: "Gitflow",
  },
  {
    color: "008672",
    description: "Extra attention is needed",
    emoji: "🤝️",
    name: "Help Wanted",
  },
  {
    color: "BB145E",
    description: "Kodiak: Merge (Override)",
    emoji: "",
    name: `kodiak: merge.method = 'merge'`,
  },
  {
    color: "BB145E",
    description: "Kodiak: Rebase (Override)",
    emoji: "",
    name: `kodiak: merge.method = 'rebase'`,
  },
  {
    color: "BB145E",
    description: "Kodiak: Squash (Override)",
    emoji: "",
    name: `kodiak: merge.method = 'squash'`,
  },
  {
    color: "D0FD72",
    description: "Automerge: Let’s Get This Merged",
    emoji: "🥳️",
    name: "LGTM",
  },
  {
    color: "FC8DD9",
    description: "Question or More Info on a PR that is not a Change Request",
    emoji: "ℹ️",
    name: "Question / More Info",
  },
  {
    color: "466B69",
    description:
      "May not be attributed to a Sprint per se, verify with Milestone before it can be merged",
    emoji: "⚛️",
    name: "Technical Progress",
  },
  {
    color: "E4E669",
    description: "Work in progress, please do not merge / review just yet",
    emoji: "🚧️",
    name: "WIP",
  },
];

export default labels;
