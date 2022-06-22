import { styled } from '../../lib/stitches.config'

const StyledCalloutIconWrapper = styled('div', {
  position: 'absolute',
  display: 'flex',
  top: '-$4',
  left: '-$3',
  padding: '$2',

  background: 'var(--icon-background, $colors$body)',
  border: '1.75px solid var(--icon-border, $colors$typefacePrimary)',
  borderRadius: '$round',
  color: 'var(--icon-text, $colors$typefacePrimary)',

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
  position: 'absolute',
  display: 'flex',
  top: '-$4',
  left: '-$2',
  borderRadius: '$radii$1',
  padding: '$3',
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
  '*:last-child': {
    marginBottom: '0px',
  },

  position: 'relative',

  marginBottom: '1.25rem',
  borderRadius: '$radii$1',
  color: '$colors$typefacePrimary',
  border: '1px solid var(--callout-emphasis, $colors$typefacePrimary)',
  background: 'var(--callout-background, $colors$body)',

  padding: '$5',
  '@bp1': {
    padding: '$7',
  },

  '@media (prefers-reduced-motion: no-preference)': {
    transition: 'all 300ms ease',
  },

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
        // '--callout-emphasis': '$colors$noteEmphasis',
        padding: '$3 $4',
        '@bp1': {
          padding: '$5 $6',
        },
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

export { StyledCalloutIconWrapper, StyledCalloutLabelWrapper, StyledCallout }
