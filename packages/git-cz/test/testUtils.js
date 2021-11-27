import { fileURLToPath } from 'node:url'
import { dirname, join } from 'path'

import spawn from 'spawncommand'

export const keys = {
  down: '\u001B\u005B\u0042',
  enter: '\r',
  up: '\u001B\u005B\u0041',
}

const __dirname = dirname(fileURLToPath(import.meta.url))

export function runCLI(args = []) {
  const CLI_PATH = join(__dirname, '/../lib/cli')

  const { promise, stdin } = spawn('node', [CLI_PATH, ...args])

  const getResult = async () => {
    const { stdout } = await promise

    return stdout
  }

  const delay = () => new Promise((resolve) => setTimeout(resolve, 500))

  const write = async (inputs = []) => {
    for (const input of inputs) {
      stdin.write(input)
      await delay()
    }

    stdin.end()
  }

  return {
    getResult,
    write,
  }
}
