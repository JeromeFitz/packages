#!/usr/bin/env node
/*!
 * For license information please see index.js.LICENSE.txt
 */
import meow from 'meow'

import { commit, list } from '~ccommit/commands/index.js'
import { COMMANDS, COMMIT_FORMATS, FLAGS, OPTIONS } from '~ccommit/lib/index.js'
import { findCommand } from '~ccommit/utils/index.js'

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
    importMeta: import.meta,
    flags: {
      // Flags
      [FLAGS.BREAKING]: { type: 'boolean', shortFlag: 'b', default: false },
      [FLAGS.COMMIT]: { type: 'boolean', shortFlag: 'c' },
      [FLAGS.DRYRUN]: { type: 'boolean', shortFlag: 'n' },
      [FLAGS.EMOJI]: { type: 'boolean', shortFlag: 'e', default: true },
      [FLAGS.HELP]: { type: 'boolean', shortFlag: 'h' },
      [FLAGS.HOOK]: { type: 'boolean', shortFlag: 'u' },
      [FLAGS.LIST]: { type: 'boolean', shortFlag: 'l' },
      [FLAGS.SKIP]: { type: 'boolean', default: false },
      [FLAGS.VERSION]: { type: 'boolean', shortFlag: 'v' },
      // Options
      [OPTIONS.FORMAT]: { type: 'string', default: COMMIT_FORMATS.GITMOJI },
      [OPTIONS.MESSAGE]: { type: 'string' },
      [OPTIONS.SCOPE]: { type: 'string' },
      [OPTIONS.TITLE]: { type: 'string' },
      [OPTIONS.TYPE]: { type: 'string' },
    },
  }
)

const commands = {
  [COMMANDS.COMMIT]: (options: any) => commit(options),
  [COMMANDS.HOOK]: (options: any) => commit(options),
  [COMMANDS.LIST]: () => list(),
}

findCommand(cli, commands)
