import { prompter } from '../lib/cz'

describe('commitizen', () => {
  it('exports prompter function', () => {
    if (typeof prompter !== 'function') {
      throw new TypeError('Expected to export "prompter" function for Commitizen.')
    }
  })
})
