import { CSS, VariantProps } from '@ds/stitches.config'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as React from 'react'

import type { StyledCheckbox } from './Checkbox.styles'

type CheckboxPrimitiveProps = React.ComponentProps<typeof CheckboxPrimitive.Root>
type CheckboxVariants = VariantProps<typeof StyledCheckbox>
type CheckboxProps = CheckboxPrimitiveProps & CheckboxVariants & { css?: CSS }

export type { CheckboxProps }
