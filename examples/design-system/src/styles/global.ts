const global = {
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  body: {
    margin: 0,
    color: '$colors$gray12',

    fontFamily: '$sans',

    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',

    backgroundColor: '$colors$gray1',
    '.dark-theme &': {
      backgroundColor: '$colors$gray1',
    },
  },

  'body.loading *': {
    transition: 'none !important',
  },

  svg: {
    display: 'block',
    verticalAlign: 'middle',
  },

  'pre, code': {
    margin: 0,
    fontFamily: '$mono',
  },

  '#__next': {
    position: 'relative',
    zIndex: 0,
  },

  'h1, h2, h3, h4, h5': { fontWeight: 700 },

  '.hi2ri': {
    '& > path': {
      strokeWidth: '1.5 !important',
    },
  },

  ".light-theme [data-hide='dark'], .dark-theme [data-hide='light']": {
    display: 'none',
  },
}

export default global
