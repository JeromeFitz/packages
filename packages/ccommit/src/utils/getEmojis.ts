import _map from 'lodash/map.js'

const getEmojis = (commitTypes: any) => {
  return _map(commitTypes, (commitType: any) => {
    const { description, emoji, emojiLength, type } = commitType

    return {
      emoji,
      emojiLength,
      description,
      type,
    }
  })
}

export { getEmojis }
