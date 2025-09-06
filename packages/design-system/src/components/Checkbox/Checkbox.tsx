/**
 * https://www.radix-ui.com/primitives/docs/components/checkbox
 */
import type { ElementRef } from 'react'

import type { CheckboxProps } from './Checkbox.types'

import { forwardRef } from 'react'

import { Icon } from '../Icon'
import { StyledCheckbox, StyledIndicator } from './Checkbox.styles'

const Checkbox = forwardRef<ElementRef<typeof StyledCheckbox>, CheckboxProps>(
  (props, forwardedRef) => (
    <StyledCheckbox {...props} ref={forwardedRef}>
      <StyledIndicator>
        <Icon.Check />
      </StyledIndicator>
    </StyledCheckbox>
  ),
)

Checkbox.displayName = 'Checkbox'

export { Checkbox }
