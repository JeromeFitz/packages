/**
 * https://www.radix-ui.com/docs/primitives/components/checkbox
 */
import * as React from 'react'

import { Icon } from '../Icon'

import { StyledCheckbox, StyledIndicator } from './Checkbox.styles'
import type { CheckboxProps } from './Checkbox.types'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof StyledCheckbox>,
  CheckboxProps
>((props, forwardedRef) => (
  <StyledCheckbox {...props} ref={forwardedRef}>
    <StyledIndicator>
      <Icon.Check />
    </StyledIndicator>
  </StyledCheckbox>
))

Checkbox.displayName = 'Checkbox'

export { Checkbox }
