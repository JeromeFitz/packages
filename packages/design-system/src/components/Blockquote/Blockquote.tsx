import type { FC } from 'react'

import { BlockquoteContent, BlockquoteWrapper } from './Blockquote.styles'
import type { BlockquoteProps } from './Blockquote.types'

const Blockquote: FC = ({ children, ...rest }: BlockquoteProps) => {
  return (
    <BlockquoteWrapper {...rest}>
      <BlockquoteContent>{children}</BlockquoteContent>
    </BlockquoteWrapper>
  )
}

Blockquote.displayName = 'Blockquote'

export { Blockquote }
