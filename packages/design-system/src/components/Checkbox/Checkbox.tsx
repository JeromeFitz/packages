import { CheckIcon } from '@radix-ui/react-icons'
import * as React from 'react'

import { StyledCheckbox, StyledIndicator } from './Checkbox.styles'
import type { CheckboxProps } from './Checkbox.types'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof StyledCheckbox>,
  CheckboxProps
>((props, forwardedRef) => (
  <StyledCheckbox {...props} ref={forwardedRef}>
    <StyledIndicator>
      <CheckIcon />
    </StyledIndicator>
  </StyledCheckbox>
))

Checkbox.displayName = 'Checkbox'

export default Checkbox
