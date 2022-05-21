// import { globalCss } from './stitches.config'
// import darkTheme from './themes/dark'
// import lightTheme from './themes/light'
// import { palette } from './tokens/colors'
// import { grid } from './tokens/layout'
// import { radii } from './tokens/radii'
// import { sizes } from './tokens/sizes'
// import { spaces } from './tokens/spaces'
// import { fonts, fontSizes, fontWeights } from './tokens/typography'

const globalCss = {
  '*': {
    'box-sizing': 'border-box',
  },
  '*:before': {
    'box-sizing': 'border-box',
  },
  '*:after': {
    'box-sizing': 'border-box',
  },

  body: {
    backgroundColor: '$colors$body',
    // color: '$colors$foreground',
    fontFamily: '$fonts$sans',
    margin: 0,

    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',
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
    fontFamily: '$fonts$mono',
  },

  '#__next': {
    position: 'relative',
    zIndex: 0,
  },

  // 'h1, h2, h3, h4, h5': { fontWeight: '$fontWeights7' },

  // '.hi2ri': {
  //   '& > path': {
  //     strokeWidth: '1.5 !important',
  //   },
  // },

  ".light-theme [data-hide='dark'], .dark-theme [data-hide='light']": {
    display: 'none',
  },
}

const globalRoot = {
  // '--fonts-sans': "'Comic Sans MS'",
  // '--colors-body': 'green',
}

// const globalStyles = globalCss({
//   // ':root': {
//   //   ...fonts,
//   //   ...fontSizes,
//   //   ...fontWeights,
//   //   ...grid,
//   //   ...palette,
//   //   ...radii,
//   //   ...sizes,
//   //   ...spaces,
//   // },
//   ...global,
//   // // themes
//   // ...lightTheme,
//   // ...darkTheme,
// })

const globalStyles = {
  ':root': {
    ...globalRoot,
  },
  ...globalCss,
}

export { globalStyles }
