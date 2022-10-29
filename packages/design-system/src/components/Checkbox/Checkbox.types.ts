import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import type { ComponentProps } from 'react'

import type { CSS, VariantProps } from '../../lib/stitches.config'

import type { StyledCheckbox } from './Checkbox.styles'

type CheckboxPrimitiveProps = ComponentProps<typeof CheckboxPrimitive.Root>
type CheckboxVariants = VariantProps<typeof StyledCheckbox>
type CheckboxProps = CheckboxPrimitiveProps & CheckboxVariants & { css?: CSS }

export type { CheckboxProps }
