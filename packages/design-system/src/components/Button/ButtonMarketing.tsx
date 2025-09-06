import type { ButtonMarketingProps } from './ButtonMarketing.types'

import { forwardRef } from 'react'

import { Box } from '../index'
import { StyledButton } from './ButtonMarketing.styles'

const ButtonMarketing = forwardRef<HTMLButtonElement, ButtonMarketingProps>(
  ({ children, icon: Icon, ...props }, forwardedRef) => {
    return (
      <StyledButton ref={forwardedRef} {...props}>
        {children}
        {Icon && (
          <Box
            as="span"
            css={{ minHeight: '1rem', minWidth: '1rem', ml: 8, mr: -3 }}
          >
            <Icon />
          </Box>
        )}
      </StyledButton>
    )
  },
)

ButtonMarketing.displayName = 'ButtonMarketing'

export { ButtonMarketing }
