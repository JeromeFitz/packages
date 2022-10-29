/**
 * https://www.radix-ui.com/docs/primitives/components/checkbox
 */
import { forwardRef } from 'react'
import type { ElementRef } from 'react'

import { Icon } from '../Icon'

import { StyledCheckbox, StyledIndicator } from './Checkbox.styles'
import type { CheckboxProps } from './Checkbox.types'

const Checkbox = forwardRef<ElementRef<typeof StyledCheckbox>, CheckboxProps>(
  (props, forwardedRef) => (
    <StyledCheckbox {...props} ref={forwardedRef}>
      <StyledIndicator>
        <Icon.Check />
      </StyledIndicator>
    </StyledCheckbox>
  )
)

Checkbox.displayName = 'Checkbox'

export { Checkbox }
