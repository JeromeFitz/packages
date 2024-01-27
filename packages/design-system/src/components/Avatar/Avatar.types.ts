import type { ComponentProps, ReactNode } from 'react'

import * as AvatarPrimitive from '@radix-ui/react-avatar'

import type { CSS, VariantProps } from '../../lib/stitches.config'

import { Status } from '../index'
import { StyledAvatar } from './Avatar.styles'

type StatusVariants = ComponentProps<typeof Status>
type StatusColors = Pick<StatusVariants, 'variant'>

type AvatarVariants = VariantProps<typeof StyledAvatar>
type AvatarPrimitiveProps = ComponentProps<typeof AvatarPrimitive.Root>
/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
type AvatarOwnProps = AvatarPrimitiveProps &
  AvatarVariants & {
    alt?: string
    css?: CSS
    fallback?: ReactNode
    src?: string
    status?: StatusColors['variant']
  }

export type { AvatarOwnProps }
