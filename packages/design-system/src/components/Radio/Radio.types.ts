import type { ComponentProps } from 'react'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import type { CSS, VariantProps } from '../../lib/stitches.config'

import { StyledRadio } from './Radio.styles'

type RadioVariants = VariantProps<typeof StyledRadio>
type RadioGroupItemPrimitiveProps = ComponentProps<typeof RadioGroupPrimitive.Item>
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
type RadioProps = RadioGroupItemPrimitiveProps & RadioVariants & { css?: CSS }

export type { RadioProps }
