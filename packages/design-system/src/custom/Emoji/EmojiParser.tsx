/* eslint-disable @typescript-eslint/restrict-plus-operands */
import emojiRegex from 'emoji-regex'
import _map from 'lodash/map'
import _orderBy from 'lodash/orderBy'
import _size from 'lodash/size'

// import dynamic from 'next/dynamic'

import { Emoji } from './Emoji'

// const Emoji = dynamic(() => import('./Emoji'), {
//   ssr: false,
// })

const EmojiParser = ({ id, text }) => {
  if (!text) return null
  // const { default: emojiRegex } = await import('emoji-regex');
  const regex = emojiRegex()
  // const textLength = text.length
  const emojiMapping = {}
  const _text = text

  let emojiIndex = 0
  for (const match of text.matchAll(regex)) {
    const emoji = match[0]
    // @note(emoji) double to take into account emoji codepoint length
    const emojiLength = [...emoji].length
    // @hack(emoji) truly have no idea why 1️⃣️ needs to be 1.5
    const emojiLengthCodePoint =
      emojiLength === 3 ? emojiLength * 1.5 : emojiLength * 2
    if (emojiIndex === 0 && match.index !== 0) {
      emojiMapping[0] = {
        emoji: false,
        index: 0,
        text: text.slice(0, match.index),
        to: match.index,
        to2: match.index,
      }
      emojiIndex++
    }

    const prev = emojiMapping[emojiIndex - 1]
    if (!!prev && prev.index !== match.to) {
      emojiMapping[emojiIndex] = {
        emoji: false,
        index: prev.to,
        text: text.slice(prev.to, match.index),
        to: match.index,
        to2: match.index,
      }
      emojiIndex++
    }

    emojiMapping[emojiIndex] = {
      emoji: true,
      index: match.index,
      text: emoji,
      to: Math.floor(match.index + emojiLengthCodePoint),
      to2: Math.floor(match.index + emojiLength),
    }

    emojiIndex++
  }
  const emojiMappingStitch = []
  if (_size(emojiMapping) > 0) {
    _map(_orderBy(emojiMapping, ['index'], ['asc']), (item: any, itemId) => {
      emojiMappingStitch.push(
        item.emoji ? (
          <Emoji
            character={item.text.trim()}
            key={`${id}--emoji--${itemId}`}
            margin={true}
          />
        ) : (
          item.text
        ),
      )
      if (
        _size(emojiMapping) === _size(emojiMappingStitch) &&
        item.to < [...text].length
      ) {
        const sliced = _text
          .slice(item.to2 + 1)
          .normalize('NFD')
          // @hack(emoji) replace any non-alphanumeric, replace with space
          // ref: https://ricardometring.com/javascript-replace-special-characters
          .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, ' ')
        emojiMappingStitch.push(sliced)
      }
    })
  }
  return (
    <>
      {_size(emojiMappingStitch) > 0
        ? _map(emojiMappingStitch, (ems) => ems)
        : _text}
    </>
  )
}

export { EmojiParser }
