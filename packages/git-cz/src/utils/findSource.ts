/* eslint-disable import/default */
/* eslint-disable import/no-named-as-default-member */
import fuzzy from 'fuzzy'

const choiceToListItem = (choices, choice, _value) => {
  const { description, emoji } = choices[choice]
  const value = choices[choice][_value]
  const prefix = `${emoji}  `

  return {
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    name: prefix + (value + ':').padEnd(18, ' ') + description,
    value,
  }
}

const findChoice = function (substring, choices, value) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const keys = Object.keys(choices).map((choice) => choices[choice][value])

  return Promise.resolve(
    fuzzy
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      .filter(substring || '', keys)
      .map(({ original: choice }) => choiceToListItem(choices, choice, value))
  )
}

const findScope = function (substring, scopes) {
  return Promise.resolve(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    fuzzy.filter(substring || '', scopes).map(({ original: scope }) => scope)
  )
}

export { findChoice, findScope }
