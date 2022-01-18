import { StyledButton } from './ButtonMarketing.styles'

type ButtonMarketingProps = {
  as: any
  disabled?: boolean
  href?: string
  icon?: React.ComponentType<any>
} & React.ComponentProps<typeof StyledButton>

export type { ButtonMarketingProps }
