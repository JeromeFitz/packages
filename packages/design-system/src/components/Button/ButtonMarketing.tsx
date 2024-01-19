import { forwardRef } from 'react'

import { Box } from '../index'

import { StyledButton } from './ButtonMarketing.styles'
import { ButtonMarketingProps } from './ButtonMarketing.types'

const ButtonMarketing = forwardRef<HTMLButtonElement, ButtonMarketingProps>(
  ({ children, icon: Icon, ...props }, forwardedRef) => {
    return (
      <StyledButton ref={forwardedRef} {...props}>
        {children}
        {Icon && (
          <Box
            as="span"
            css={{ ml: 8, mr: -3, minWidth: '1rem', minHeight: '1rem' }}
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
