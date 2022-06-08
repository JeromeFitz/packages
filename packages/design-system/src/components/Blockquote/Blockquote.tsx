import React from 'react'

import { BlockquoteContent, BlockquoteWrapper } from './Blockquote.styles'
import type { BlockquoteProps } from './Blockquote.types'

const Blockquote: React.FC = ({ children, ...rest }: BlockquoteProps) => {
  return (
    <BlockquoteWrapper {...rest}>
      <BlockquoteContent>{children}</BlockquoteContent>
    </BlockquoteWrapper>
  )
}

Blockquote.displayName = 'Blockquote'

export { Blockquote }
