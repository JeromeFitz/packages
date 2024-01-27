import type { FC } from 'react'

import type { BlockquoteProps } from './Blockquote.types'

import { BlockquoteContent, BlockquoteWrapper } from './Blockquote.styles'

const Blockquote: FC = ({ children, ...rest }: BlockquoteProps) => {
  return (
    <BlockquoteWrapper {...rest}>
      <BlockquoteContent>{children}</BlockquoteContent>
    </BlockquoteWrapper>
  )
}

Blockquote.displayName = 'Blockquote'

export { Blockquote }
