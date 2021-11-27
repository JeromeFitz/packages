import { version } from '../package.json'

import { runCLI } from './testUtils'

test('git-cz --help', async () => {
  const { getResult } = runCLI(['--help'])

  const result = await getResult()

  expect(result).toMatchSnapshot()
})

test('git-cz --version', async () => {
  const { getResult } = runCLI(['--version'])

  const result = await getResult()

  expect(result.trim()).toBe(version)
})

test('git-cz --non-interactive', async () => {
  const { getResult } = runCLI(['--non-interactive', '--dry-run'])

  const result = await getResult()

  expect(result).toMatchSnapshot()
})
