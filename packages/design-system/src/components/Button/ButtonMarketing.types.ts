import type { ComponentProps, ComponentType } from 'react'

import { StyledButton } from './ButtonMarketing.styles'

type ButtonMarketingProps = {
  as: any
  disabled?: boolean
  href?: string
  icon?: ComponentType<any>
} & ComponentProps<typeof StyledButton>

export type { ButtonMarketingProps }
