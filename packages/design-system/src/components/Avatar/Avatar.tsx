/**
 * https://www.radix-ui.com/primitives/docs/components/avatar
 */
import type { ElementRef } from 'react'

import type { AvatarOwnProps } from './Avatar.types'

import { forwardRef } from 'react'

import { Box, Status } from '../index'
import {
  StyledAvatar,
  StyledAvatarFallback,
  StyledAvatarImage,
} from './Avatar.styles'

const Avatar = forwardRef<ElementRef<typeof StyledAvatar>, AvatarOwnProps>(
  (
    { alt, css, fallback, shape, size, src, status, variant, ...props },
    forwardedRef,
  ) => {
    return (
      <Box
        css={{
          ...css,
          height: 'fit-content',
          position: 'relative',
          width: 'fit-content',
        }}
      >
        <StyledAvatar
          {...props}
          ref={forwardedRef}
          shape={shape}
          size={size}
          variant={variant}
        >
          <StyledAvatarImage alt={alt} src={src} />
          <StyledAvatarFallback size={size}>{fallback}</StyledAvatarFallback>
        </StyledAvatar>
        {status && (
          <Box
            css={{
              borderRadius: '$round',
              bottom: '0',
              boxShadow: '0 0 0 3px $colors$loContrast',
              mb: '-3px',
              mr: '-3px',
              position: 'absolute',
              right: '0',
            }}
          >
            <Status size={size && size > 2 ? '2' : '1'} variant={status} />
          </Box>
        )}
      </Box>
    )
  },
)

Avatar.displayName = 'Avatar'

export { Avatar }
