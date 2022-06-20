import { styled } from '../../lib/stitches.config'

const StyledCalloutIconWrapper = styled('div', {
  position: 'absolute',
  display: 'flex',
  top: '-12px',
  left: '-8px',
  borderRadius: '50%',
  padding: '4px',
  color: '$colors$typefacePrimary',
  border: '1.75px solid $colors$body',
  background: 'var(--icon-background, $colors$body)',

  variants: {
    variant: {
      error: {
        '--icon-background': '$colors$errorBackground',
        border: '1.75px solid $colors$errorEmphasis',
      },
      info: {
        '--icon-background': '$colors$infoBackground',
        border: '1.75px solid $colors$infoEmphasis',
      },
      success: {
        '--icon-background': '$colors$successBackground',
        border: '1.75px solid $colors$successEmphasis',
      },
      warning: {
        '--icon-background': '$colors$warningBackground',
        border: '1.75px solid $colors$warningEmphasis',
        color: '$colors$warningText',
      },
      quote: {
        '--icon-background': '$colors$quoteBackground',
        border: '1.75px solid $colors$quoteEmphasis',
        color: '$colors$quoteText',
      },
    },
  },
})

const StyledCalloutLabelWrapper = styled('div', {
  position: 'absolute',
  display: 'flex',
  top: '-12px',
  left: '-4px',
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
        '--icon-background': '$colors$errorBackground',
      },
      info: {
        '--icon-background': '$colors$infoBackground',
      },
      success: {
        '--icon-background': '$colors$successBackground',
      },
      warning: {
        '--icon-background': '$colors$warningBackground',
      },
      quote: {
        '--icon-background': '$colors$quoteBackground',
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
        '--callout-background': '$colors$errorBackground',
        border: '1px solid $colors$errorEmpahsis',
      },
      info: {
        '--callout-background': '$colors$infoBackground',
        border: '1px solid $colors$infoEmpahsis',
      },
      success: {
        '--callout-background': '$colors$successBackground',
        border: '1px solid $colors$successEmpahsis',
      },
      warning: {
        '--callout-background': '$colors$warningBackground',
        border: '1px solid $colors$warningEmpahsis',
      },
      quote: {
        '--callout-background': '$colors$quoteBackground',
        border: '1px solid $colors$quoteEmphasis',
      },
    },
  },
})

export { StyledCalloutIconWrapper, StyledCalloutLabelWrapper, StyledCallout }
