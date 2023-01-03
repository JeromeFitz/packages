const getEmojis = (commitTypes: any) =>
  commitTypes.map(({ description, emoji, emojiLength, type }) => ({
    emoji,
    emojiLength,
    description,
    type,
  }))

export { getEmojis }
