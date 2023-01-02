const COMMANDS = {
  COMMIT: 'commit',
  HOOK: 'hook',
  LIST: 'list',
}
const COMMIT_FORMATS = {
  CONVENTIONAL: 'conventional',
  CONVENTIONAL_NO_EMOJI: 'conventional-no-emoji',
  GITMOJI: 'gitmoji',
}

const COMMIT_MODES = {
  CLIENT: 'client',
  HOOK: 'hook',
}

const FIND_BY = {
  EMOJI: 'emoji',
  TYPE: 'type',
}

const FLAGS = Object.freeze({
  BREAKING: 'breaking',
  COMMIT: 'commit',
  DRYRUN: 'dryrun',
  EMOJI: 'emoji',
  HELP: 'help',
  HOOK: 'hook',
  LIST: 'list',
  SKIP: 'skip',
  VERSION: 'version',
})

const FORMAT = {
  [COMMIT_FORMATS.CONVENTIONAL]: '{type}{scope}: {emoji}{title}',
  [COMMIT_FORMATS.CONVENTIONAL_NO_EMOJI]: '{type}{scope}: {title}',
  [COMMIT_FORMATS.GITMOJI]: '{emoji}{scope}{title}',
}

const LOGS = {
  TYPES: {
    ERROR: 'error',
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
  },
  MESSAGES: {
    COMMAND_LINE_WITHOUT_REQUIRED:
      '>> [ccommit] Command line option requires both: --title, --type',
    COMMIT_FAIL: `\n
      Oops! An error occurred. There is likely additional logging output above.\n
      You can run the same commit with this command:\n
      \t
      {REPLACE}
    `,
    GENERATOR_TAKING_OVER:
      '>> [ccommit] Generator will take it from here (CTRL+C to quit)',
    LENGTH_MAX: '[ccommit] Cannot exceed {REPLACE} characters',
    LENGTH_MIN: '[ccommit] Must have at least {REPLACE} characters',
    MODE_CONFLICT:
      '>> [ccommit] Please choose one or the other: --commit, -c | --hook, -u',
    REPLACE: '{REPLACE}',
    STAGED_FILES:
      '>> [commit] There are no staged files for git. Did you mean to do a dry-run (-n)?',
    TYPE_INCORRECT:
      '>> [ccommit] There is no gitmoji/type associated with: {REPLACE}',
  },
}

const OPTIONS = Object.freeze({
  FORMAT: 'format',
  MESSAGE: 'message',
  SCOPE: 'scope',
  TITLE: 'title',
  TYPE: 'type',
})

const SCOPE = {
  MIN: 3,
  MAX: 12,
}

const SEMVER = {
  MAJOR: 'major',
  MINOR: 'minor',
  PATCH: 'patch',
  NULL: 'null',
}

const TITLE = {
  MIN: 3,
  MIN_SWAG: 15,
  MAX: 48,
  MAX_SWAG: 40,
}

const TYPE = {
  MAX: 15,
}

export {
  COMMANDS,
  COMMIT_FORMATS,
  COMMIT_MODES,
  FIND_BY,
  FLAGS,
  FORMAT,
  LOGS,
  OPTIONS,
  SCOPE,
  SEMVER,
  TITLE,
  TYPE,
}
