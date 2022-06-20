import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import * as React from 'react'

import type { CSS, VariantProps } from '../../lib/stitches.config'

import { StyledRadio } from './Radio.styles'

type RadioVariants = VariantProps<typeof StyledRadio>
type RadioGroupItemPrimitiveProps = React.ComponentProps<
  typeof RadioGroupPrimitive.Item
>
type RadioProps = RadioGroupItemPrimitiveProps & RadioVariants & { css?: CSS }

export type { RadioProps }
