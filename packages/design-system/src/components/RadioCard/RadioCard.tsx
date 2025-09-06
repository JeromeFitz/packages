import type { ElementRef } from 'react'

import type { RadioCardProps } from './RadioCard.types'

import { forwardRef } from 'react'

import {
  RadioCardGroup,
  StyledRadio,
  StyledRadioButton,
  StyledRadioIndicator,
} from './RadioCard.styles'

const RadioCard = forwardRef<ElementRef<typeof StyledRadio>, RadioCardProps>(
  (props, forwardedRef) => (
    <StyledRadio {...props} ref={forwardedRef}>
      <StyledRadioButton>
        <StyledRadioIndicator />
      </StyledRadioButton>
      {props.children}
    </StyledRadio>
  ),
)

RadioCard.displayName = 'RadioCard'

export { RadioCard, RadioCardGroup }
