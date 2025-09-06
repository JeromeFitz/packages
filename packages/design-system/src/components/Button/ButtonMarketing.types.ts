import type { ComponentProps, ComponentType } from 'react'

import type { StyledButton } from './ButtonMarketing.styles'

type ButtonMarketingProps = {
  as: any
  disabled?: boolean
  href?: string
  icon?: ComponentType<any>
  // eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
} & ComponentProps<typeof StyledButton>

export type { ButtonMarketingProps }
