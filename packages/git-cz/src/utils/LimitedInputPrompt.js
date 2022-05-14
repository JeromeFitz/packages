import InputPrompt from 'inquirer/lib/prompts/input.js'
import pico from 'picocolors'

const { green, yellow, red } = pico
class LimitedInputPrompt extends InputPrompt {
  constructor(...args) {
    super(...args)

    if (!this.opt.maxLength) {
      this.throwParamError('maxLength')
    }

    this.originalMessage = this.opt.message
    this.spacer = new Array(this.opt.maxLength).fill('-').join('')

    if (this.opt.leadingLabel) {
      if (typeof this.opt.leadingLabel === 'function') {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        this.leadingLabel = ' ' + this.opt.leadingLabel(this.answers)
      } else {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        this.leadingLabel = ' ' + this.opt.leadingLabel
      }
    } else {
      this.leadingLabel = ''
    }

    this.leadingLength = this.leadingLabel.length
  }

  remainingChar() {
    return this.opt.maxLength - this.leadingLength - this.rl.line.length
  }

  onKeypress() {
    if (this.rl.line.length > this.opt.maxLength - this.leadingLength) {
      this.rl.line = this.rl.line.slice(0, this.opt.maxLength - this.leadingLength)
      this.rl.cursor--
    }

    this.render()
  }

  getCharsLeftText() {
    const chars = this.remainingChar()

    if (chars > 15) {
      return green(`${chars} chars left`)
    } else if (chars > 5) {
      return yellow(`${chars} chars left`)
    } else {
      return red(`${chars} chars left`)
    }
  }

  render(error) {
    let bottomContent = ''
    let message = this.getQuestion()
    let appendContent = ''
    const isFinal = this.status === 'answered'

    if (isFinal) {
      appendContent = this.answer
    } else {
      appendContent = this.rl.line
    }

    message = `${message}\n\n[${this.spacer}] ${this.getCharsLeftText()}\n\n${
      this.leadingLabel
    } ${appendContent}`

    if (error) {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      bottomContent = red('>> ') + error
    }

    this.screen.render(message, bottomContent)
  }
}

export default LimitedInputPrompt
