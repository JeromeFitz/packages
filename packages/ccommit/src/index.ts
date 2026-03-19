#!/usr/bin/env node

/*!
 * For license information please see index.js.LICENSE.txt
 */
import meow from 'meow'

import { commit, list } from '~ccommit/commands/index'
import { COMMANDS, COMMIT_FORMATS, FLAGS, OPTIONS } from '~ccommit/lib/index'
import { findCommand } from '~ccommit/utils/index'

const cli = meow(
  `
  Usage
    $ ccommit -c

  Flags
    --${FLAGS.BREAKING}, -b       💥  Breaking Change
    --${FLAGS.COMMIT}, -c         💽  Mode: Client
    --${FLAGS.DRYRUN}, -n         🎽  Mode: Dry Run
    --${FLAGS.EMOJI}, -e          😜  Emoji (default)
    --${FLAGS.HOOK}, -u           🪝   Mode: Hook
    --${FLAGS.LIST}, -l           📖  List all types
    --${FLAGS.VERSION}, -v        📦  Print installed version

  Options
    --${OPTIONS.FORMAT}             😜  Commit Format: conventional|gitmoji (default)
    --${OPTIONS.MESSAGE}            📝  Commit Message
    --${OPTIONS.SCOPE}              🔬  Commit Scope
    --${OPTIONS.TITLE}              📓  Commit Title
    --${OPTIONS.TYPE}               ✨  Commit Type

  Notes
    - Pass any non-format options the following will be required: --title, --type
    - If you do not pass any options the Conventional Commit Generator prompt will run
      - Branch Name detection is enabled to pre-populate Issue Tracker information in prompt
`,
  {
    flags: {
      // Flags
      [FLAGS.BREAKING]: { default: false, shortFlag: 'b', type: 'boolean' },
      [FLAGS.COMMIT]: { shortFlag: 'c', type: 'boolean' },
      [FLAGS.DRYRUN]: { shortFlag: 'n', type: 'boolean' },
      [FLAGS.EMOJI]: { default: true, shortFlag: 'e', type: 'boolean' },
      [FLAGS.HELP]: { shortFlag: 'h', type: 'boolean' },
      [FLAGS.HOOK]: { shortFlag: 'u', type: 'boolean' },
      [FLAGS.LIST]: { shortFlag: 'l', type: 'boolean' },
      [FLAGS.SKIP]: { default: false, type: 'boolean' },
      [FLAGS.VERSION]: { shortFlag: 'v', type: 'boolean' },
      // Options
      [OPTIONS.FORMAT]: { default: COMMIT_FORMATS.GITMOJI, type: 'string' },
      [OPTIONS.MESSAGE]: { type: 'string' },
      [OPTIONS.SCOPE]: { type: 'string' },
      [OPTIONS.TITLE]: { type: 'string' },
      [OPTIONS.TYPE]: { type: 'string' },
    },
    importMeta: import.meta,
  },
)

const commands = {
  [COMMANDS.COMMIT]: (options: any) => commit(options),
  [COMMANDS.HOOK]: (options: any) => commit(options),
  [COMMANDS.LIST]: () => list(),
}

findCommand(cli, commands)
