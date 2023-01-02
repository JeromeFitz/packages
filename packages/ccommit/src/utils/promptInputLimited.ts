/* eslint-disable @typescript-eslint/ban-ts-comment */
import Input from 'inquirer/lib/prompts/input.js'

/**
 * @note(inquirer) Custom Input Prompt: Limited
 * @todo(inquirer) Not baked out enough to share outside of this repo
 *
 * If there is a MAX CHAR LIMIT for an input
 *
 */
class PromptInputLimited extends Input {
  onKeypress() {
    // @ts-ignore
    if (this.rl.line.length > this.opt.inputMax) {
      // @ts-ignore
      this.rl.line = this.rl.line.slice(0, this.opt.inputMax)
      // @ts-ignore
      this.rl.cursor--
    }

    // @ts-ignore
    this.render()
  }
}

export default PromptInputLimited
