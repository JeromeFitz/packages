import * as AvatarPrimitive from '@radix-ui/react-avatar'
import type { ComponentProps, ReactNode } from 'react'

import type { CSS, VariantProps } from '../../lib/stitches.config'
import { Status } from '../index'

import { StyledAvatar } from './Avatar.styles'

type StatusVariants = ComponentProps<typeof Status>
type StatusColors = Pick<StatusVariants, 'variant'>

type AvatarVariants = VariantProps<typeof StyledAvatar>
type AvatarPrimitiveProps = ComponentProps<typeof AvatarPrimitive.Root>
type AvatarOwnProps = AvatarPrimitiveProps &
  AvatarVariants & {
    css?: CSS
    alt?: string
    src?: string
    fallback?: ReactNode
    status?: StatusColors['variant']
  }

export type { AvatarOwnProps }
