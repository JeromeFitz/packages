import { styled } from '../../lib/stitches.config'

const StyledCalloutIconWrapper = styled('div', {
  position: 'absolute',
  display: 'flex',
  top: '-24px',
  right: '-16px',
  borderRadius: '50%',
  padding: '4px',
  color: '$colors$body',
  border: '2px solid $colors$body',
  background: 'var(--icon-background, $colors$body)',

  variants: {
    variant: {
      error: {
        '--icon-background': '$colors$error',
        border: '2px solid $colors$errorEmphasis',
      },
      info: {
        '--icon-background': '$colors$info',
        border: '2px solid $colors$infoEmphasis',
      },
      success: {
        '--icon-background': '$colors$success',
        border: '2px solid $colors$successEmphasis',
      },
      warning: {
        '--icon-background': '$colors$warning',
        border: '2px solid $colors$warningEmphasis',
      },
    },
  },
})

const StyledCalloutLabelWrapper = styled('div', {
  position: 'absolute',
  display: 'flex',
  top: '-24px',
  right: '-8px',
  borderRadius: '$radii$1',
  padding: '8px',
  color: '$colors$body',
  fontSize: '$fontSizes$1',
  fontWeight: '$fontWeights$3',
  userSelect: 'none',
  background: 'var(--icon-background, $colors$body)',

  variants: {
    variant: {
      error: {
        '--icon-background': '$colors$error',
      },
      info: {
        '--icon-background': '$colors$info',
      },
      success: {
        '--icon-background': '$colors$success',
      },
      warning: {
        '--icon-background': '$colors$warning',
      },
    },
  },
})

const StyledCallout = styled('aside', {
  '*:last-child': {
    marginBottom: '0px',
  },

  position: 'relative',
  padding: '30px 30px',
  marginBottom: '2.25rem',
  borderRadius: '$radii$1',
  color: '$colors$typefacePrimary',
  border: '1px solid $colors$emphasis',
  background: 'var(--callout-background, $colors$emphasis)',

  variants: {
    variant: {
      error: {
        '--callout-background': '$colors$error',
        border: '1px solid $colors$errorEmpahsis',
      },
      info: {
        '--callout-background': '$colors$info',
        border: '1px solid $colors$infoEmpahsis',
      },
      success: {
        '--callout-background': '$colors$success',
        border: '1px solid $colors$successEmpahsis',
      },
      warning: {
        '--callout-background': '$colors$warning',
        border: '1px solid $colors$warningEmpahsis',
      },
    },
  },
})

export { StyledCalloutIconWrapper, StyledCalloutLabelWrapper, StyledCallout }
