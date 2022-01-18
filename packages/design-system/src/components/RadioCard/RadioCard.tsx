import * as React from 'react'

import {
  RadioCardGroup,
  StyledRadio,
  StyledRadioButton,
  StyledRadioIndicator,
} from './RadioCard.styles'
import type { RadioCardProps } from './RadioCard.types'

const RadioCard = React.forwardRef<
  React.ElementRef<typeof StyledRadio>,
  RadioCardProps
>((props, forwardedRef) => (
  <StyledRadio {...props} ref={forwardedRef}>
    <StyledRadioButton>
      <StyledRadioIndicator />
    </StyledRadioButton>
    {props.children}
  </StyledRadio>
))

RadioCard.displayName = 'RadioCard'

export { RadioCardGroup }
export default RadioCard
