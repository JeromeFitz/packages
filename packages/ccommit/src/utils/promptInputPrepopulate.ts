/* eslint-disable @typescript-eslint/ban-ts-comment */
import Input from 'inquirer/lib/prompts/input.js'
/**
 * @note(inquirer) Custom Input Prompt: Prepopulate
 * @todo(inquirer) Not baked out enough to share outside of this repo
 *
 * If there is a `default` provided,
 * prepopulate the input if the user presses either:
 *    - space
 *    - tab
 *
 */
class PromptInputPrepopulate extends Input {
  onKeypress() {
    // @note(inquirer) check if space|tab
    if ((this.rl.line === ' ' || this.rl.line === '\t') && this.opt.default) {
      // @ts-ignore
      this.rl.line = `${this.opt.default} `
      // @ts-ignore
      // this.rl.cursor = this.opt.default.length
      this.rl.cursor = this.rl.line.length
    }

    // @note(inquirer) wipe default if neither space|tab
    if (this.opt.default) {
      this.opt.default = undefined
    }

    // @ts-ignore
    this.render()
  }
}

export default PromptInputPrepopulate
