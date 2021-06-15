/* eslint-disable no-console */
import minimist from 'minimist'

import { getPackage } from './getFile'
import getGitRootDir from './getGitRootDir'

let root
try {
  root = getGitRootDir()
} catch (error) {
  throw new Error('Could not find Git root folder')
}

const pkg = getPackage(root)

const helpScreen = `
    > ${pkg.name}
    > ${pkg.version}
    > ${pkg.description}

    Usage: git-cz [options]

    options:
        -h, --help          show usage information
        -v, --version       print version info and exit
        -m, --mode          commit|branch (default: commit)
        --dry-run           dry run of mode for testing purposes
        --format            format based of of --mode
        --non-interactive   run git-cz in non-interactive mode

    non-interactive mode options:
        --commitBody        extended description of the commit
        --commitBreaking    description of breaking changes, if any
        --commitScopes      semantic commit scope
        --commitSubject     message of the commit (default: automated commit)
        --commitTypes       type of the commit (default: chore)
`

// eslint-disable-next-line complexity
const parseArgs = () => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _: inputs,
    'dry-run': dryRun,
    'non-interactive': nonInteractive,
    commitBody,
    commitBreaking,
    commitScope,
    commitSubject,
    commitTypes,
    format,
    h,
    help,
    hook,
    m,
    mode,
    v,
    version,
    ...passThroughParams
  } = minimist(process.argv.slice(2), {
    alias: {
      h: 'help',
      m: 'mode',
      v: 'version',
    },
    boolean: ['dry-run', 'help', 'hook', 'non-interactive', 'version'],
    string: [
      'commitBody',
      'commitBreaking',
      'commitScope',
      'commitSubject',
      'commitTypes',
      'format',
      'mode',
    ],
  })

  if (help || h) {
    console.log(helpScreen)
    process.exit()
  }

  if (version || v) {
    console.log(pkg.version)
    process.exit()
  }

  if (mode === 'branch' || m === 'branch') {
    passThroughParams.verify = false
    passThroughParams['allow-empty'] = true
  }

  let commitBreakingFlag = false
  if (commitBreaking) {
    commitBreakingFlag = true
  }

  const cliOptions = {
    dryRun,
    format,
    help,
    hook,
    mode: mode || 'commit',
    nonInteractive,
    version,
  }

  const cliAnswers = {
    commitBody,
    commitBreaking,
    commitBreakingFlag,
    commitScope,
    commitSubject,
    commitTypes,
    mode: mode || 'commit',
  }

  return {
    cliAnswers,
    cliOptions,
    passThroughParams,
  }
}

export default parseArgs
