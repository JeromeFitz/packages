// ref: https://octokit.github.io/rest.js/v18#issues-create-label

const labels = [
  {
    name: 'Awaiting 3rd Party',
    emoji: '3️⃣️',
    description: 'WIP: Waiting on 3rd Party Updates',
    color: 'EAB820',
  },
  {
    name: 'Awaiting Code Review (Priority)',
    emoji: '⏲️',
    description: 'Please look at this PR first for code reviews',
    color: 'EDD674',
  },
  {
    name: 'Bug',
    emoji: '🐛️',
    description: 'Something isn’t working',
    color: 'D8EBF6',
  },
  {
    name: 'Changes Requested',
    emoji: '♻️',
    description: 'Please address any changes requested to the PR',
    color: 'ECD9BA',
  },
  {
    name: 'Conflicts',
    emoji: '🛠️',
    color: 'C2E0C6',
    description: 'Please address merge conflicts',
  },
  {
    name: 'Dependencies',
    emoji: '📦️',
    description: 'Pull requests that update a dependency file',
    color: 'E8F1FA',
  },

  {
    name: 'DNM: Awaiting Scheduling',
    emoji: '🗓️',
    description: 'Please review, hold on merging',
    color: '7057ff',
  },
  {
    name: 'Duplicate',
    emoji: '💕️',
    description: 'Identified to be closed when determined which should be merged',
    color: 'cccccc',
  },
  {
    name: 'Do Not Merge',
    emoji: '🛑️',
    description: 'Do not merge until further notice',
    color: '5e0b82',
  },
  {
    name: 'Help Wanted',
    emoji: '🤝️',
    description: 'Extra attention is needed',
    color: '008672',
  },
  {
    name: 'LGTM',
    emoji: '🥳️',
    description: 'Automerge: Let’s Get This Merged',
    color: 'D0FD72',
  },
  {
    name: 'Question / More Info',
    emoji: 'ℹ️',
    description: 'Question or More Info on a PR that is not a Change Request',
    color: 'FC8DD9',
  },
  {
    name: 'Technical Progress',
    emoji: '⚛️',
    description:
      'May not be attributed to a Sprint per se, verify with Milestone before it can be merged',
    color: '466B69',
  },
  {
    name: 'WIP',
    emoji: '🚧️',
    description: 'Work in progress, please do not merge / review just yet',
    color: 'E4E669',
  },
]

export default labels
