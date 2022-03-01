import { createColorize } from 'colorize-template'
import pico from 'picocolors'

const colorize = createColorize(pico)

/* eslint-disable no-console */
const runNonInteractiveMode = (
  state,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { type = 'chore', subject = 'automated commit', ...restAnswers }
) => {
  //
  console.log(colorize`{yellow.bold 🚧️  runNonInteractiveMode is not finished}`)
  console.log(
    colorize`{yellow 🤕️  Help at: https://github.com/JeromeFitz/packages}`
  )

  const answers = {
    subject,
    type,
    ...restAnswers,
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  Object.keys(state.answers).forEach((key) => {
    if (answers[key]) {
      state.answers[key] = answers[key]
      delete answers[key]
    }
  })

  process.exit()
}

export default runNonInteractiveMode
