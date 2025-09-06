import { styled } from '../../lib/stitches.config'

const StyledCalloutIconWrapper = styled('div', {
  background: 'var(--icon-background, $colors$body)',
  border: '1.75px solid var(--icon-border, $colors$typefacePrimary)',
  borderRadius: '$round',
  color: 'var(--icon-text, $colors$typefacePrimary)',
  display: 'flex',

  left: '-$3',
  padding: '$2',
  position: 'absolute',
  top: '-$4',

  variants: {
    variant: {
      error: {
        '--icon-background': '$colors$errorBackground',
        '--icon-border': '$colors$errorEmphasis',
      },
      info: {
        '--icon-background': '$colors$infoBackground',
        '--icon-border': '$colors$infoEmphasis',
      },
      note: {
        // '--icon-background': '$colors$noteBackground',
        // '--icon-border': '$colors$noteEmphasis',
        // '--icon-text': '$colors$noteText',
      },
      quote: {
        '--icon-background': '$colors$quoteBackground',
        '--icon-border': '$colors$quoteEmphasis',
        '--icon-text': '$colors$quoteText',
      },
      success: {
        '--icon-background': '$colors$successBackground',
        '--icon-border': '$colors$successEmphasis',
      },
      warning: {
        '--icon-background': '$colors$warningBackground',
        '--icon-border': '$colors$warningEmphasis',
        '--icon-text': '$colors$warningText',
      },
    },
  },
})

const StyledCalloutLabelWrapper = styled('div', {
  background: 'var(--icon-background, $colors$body)',
  borderRadius: '$radii$1',
  color: '$colors$body',
  display: 'flex',
  fontSize: '$fontSizes$1',
  fontWeight: '$fontWeights$3',
  left: '-$2',
  padding: '$3',
  position: 'absolute',
  top: '-$4',
  userSelect: 'none',

  variants: {
    variant: {
      error: {
        '--icon-background': '$colors$errorBackground',
      },
      info: {
        '--icon-background': '$colors$infoBackground',
      },
      note: {
        // '--icon-background': '$colors$noteBackground',
      },
      quote: {
        '--icon-background': '$colors$quoteBackground',
      },
      success: {
        '--icon-background': '$colors$successBackground',
      },
      warning: {
        '--icon-background': '$colors$warningBackground',
      },
    },
  },
})

const StyledCallout = styled('aside', {
  '@bp1': {
    padding: '$7',
  },

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'all 300ms ease',
  },
  '*:last-child': {
    marginBottom: '0px',
  },
  background: 'var(--callout-background, $colors$body)',
  border: '1px solid var(--callout-emphasis, $colors$typefacePrimary)',
  borderRadius: '$radii$1',
  color: '$colors$typefacePrimary',

  marginBottom: '1.25rem',
  padding: '$5',

  position: 'relative',

  variants: {
    variant: {
      error: {
        '--callout-background': '$colors$errorBackground',
        '--callout-emphasis': '$colors$errorEmpahsis',
      },
      info: {
        '--callout-background': '$colors$infoBackground',
        '--callout-emphasis': '$colors$infoEmpahsis',
      },
      note: {
        // '--callout-background': '$colors$noteBackground',
        '@bp1': {
          padding: '$5 $6',
        },
        // '--callout-emphasis': '$colors$noteEmphasis',
        padding: '$3 $4',
      },
      quote: {
        '--callout-background': '$colors$quoteBackground',
        '--callout-emphasis': '$colors$quoteEmphasis',
      },
      success: {
        '--callout-background': '$colors$successBackground',
        '--callout-emphasis': '$colors$successEmpahsis',
      },
      warning: {
        '--callout-background': '$colors$warningBackground',
        '--callout-emphasis': '$colors$warningEmpahsis',
      },
    },
  },
})

export { StyledCallout, StyledCalloutIconWrapper, StyledCalloutLabelWrapper }
