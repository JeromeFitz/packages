#!/usr/bin/env node
/*!
 * For license information please see index.js.LICENSE.txt
 */
import { URL } from 'node:url'

import meow from 'meow'

import { commit, list } from '~ccommit/commands/index.js'
import { COMMANDS, COMMIT_FORMATS, FLAGS, OPTIONS } from '~ccommit/lib/index.js'
import { findCommand } from '~ccommit/utils/index.js'

let url = import.meta.url
if (!url.startsWith('file://')) url = new URL(`file://${import.meta.url}`).toString()

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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    importMeta: { url },
    flags: {
      // Flags
      [FLAGS.BREAKING]: { type: 'boolean', alias: 'b', default: false },
      [FLAGS.COMMIT]: { type: 'boolean', alias: 'c' },
      [FLAGS.DRYRUN]: { type: 'boolean', alias: 'n' },
      [FLAGS.EMOJI]: { type: 'boolean', alias: 'e', default: true },
      [FLAGS.HELP]: { type: 'boolean', alias: 'h' },
      [FLAGS.HOOK]: { type: 'boolean', alias: 'u' },
      [FLAGS.LIST]: { type: 'boolean', alias: 'l' },
      [FLAGS.SKIP]: { type: 'boolean', default: false },
      [FLAGS.VERSION]: { type: 'boolean', alias: 'v' },
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
