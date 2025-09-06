import { find as findEmoji } from 'node-emoji'

import { styled } from '../../lib/stitches.config'

// import { Box } from '../../components'

const Box = styled('div', {
  // @reset
  boxSizing: 'border-box',
})

const EmojiHtml = ({ emoji, label, margin }) => {
  return (
    <Box
      aria-label={label}
      as="span"
      // @hack(emoji) this breaks the underline on links
      css={{
        fontStyle: 'normal',
        mr: margin ? '$1' : '0',
      }}
      role="img"
      style={{
        WebkitBackgroundClip: 'text',
        // @note(WebkitTextFillColor) any color will break out of transparency
        WebkitTextFillColor: 'inherit',
      }}
    >
      {emoji}
      {/* @hack(emoji) force two spaces */}
      {` `}
      {` `}
    </Box>
  )
}

const Emoji = ({ character, margin = false }) => {
  const emojiFound = findEmoji(character)

  if (emojiFound === undefined) {
    return (
      <EmojiHtml emoji={character} label={'emoji unsupported'} margin={margin} />
    )
  }

  const { emoji, key } = emojiFound
  const label = `emoji ${key.replace(/_/gi, ' ')}`

  return <EmojiHtml emoji={emoji} label={label} margin={margin} />
}

export { Emoji }
