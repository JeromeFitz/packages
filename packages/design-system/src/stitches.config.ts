/**
 * @colors
 *
 * @question can we pass this to the package instead?
 *  - Accept a `config` => ...merge with default => `createStitches`
 *  - Would need to ensure base colors used throughout are present
 */
import {
  // amber,
  // amberA,
  // amberDark,
  // amberDarkA,
  blackA,
  blue,
  blueA,
  blueDark,
  blueDarkA,
  // bronze,
  // bronzeA,
  // bronzeDark,
  // bronzeDarkA,
  // brown,
  // brownA,
  // brownDark,
  // brownDarkA,
  // crimson,
  // crimsonA,
  // crimsonDark,
  // crimsonDarkA,
  // cyan,
  // cyanA,
  // cyanDark,
  // cyanDarkA,
  // gold,
  // goldA,
  // goldDark,
  // goldDarkA,
  // grass,
  // grassA,
  // grassDark,
  // grassDarkA,
  gray,
  grayA,
  grayDark,
  grayDarkA,
  green,
  greenA,
  greenDark,
  greenDarkA,
  // indigo,
  // indigoA,
  // indigoDark,
  // indigoDarkA,
  // lime,
  // limeA,
  // limeDark,
  // limeDarkA,
  // mauve,
  // mauveA,
  // mauveDark,
  // mauveDarkA,
  // mint,
  // mintA,
  // mintDark,
  // mintDarkA,
  // olive,
  // oliveA,
  // oliveDark,
  // oliveDarkA,
  orange,
  orangeA,
  orangeDark,
  orangeDarkA,
  // pink,
  // pinkA,
  // pinkDark,
  // pinkDarkA,
  // plum,
  // plumA,
  // plumDark,
  // plumDarkA,
  // purple,
  // purpleA,
  // purpleDark,
  // purpleDarkA,
  red,
  redA,
  redDark,
  redDarkA,
  // sage,
  // sageA,
  // sageDark,
  // sageDarkA,
  // sand,
  // sandA,
  // sandDark,
  // sandDarkA,
  // sky,
  // skyA,
  // skyDark,
  // skyDarkA,
  slate,
  slateA,
  slateDark,
  slateDarkA,
  // teal,
  // tealA,
  // tealDark,
  // tealDarkA,
  // tomato,
  // tomatoA,
  // tomatoDark,
  // tomatoDarkA,
  violet,
  violetA,
  violetDark,
  violetDarkA,
  whiteA,
  // yellow,
  // yellowA,
  // yellowDark,
  // yellowDarkA,
} from '@radix-ui/colors'
import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'

/**
 * @fonts default
 */
const fontFamily = {
  mono: [
    'ui-monospace',
    'SFMono-Regular',
    'SF Mono',
    'Menlo',
    'Monaco',
    'Consolas',
    '"Liberation Mono"',
    '"Courier New"',
    'monospace',
  ],
  sans: [
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    '"Noto Sans"',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ],
  serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
}

/**
 * @fonts custom
 */
const inter = ['Inter', ...fontFamily.sans].join(',')
const mono = [...fontFamily.mono].join(',')
const serif = [...fontFamily.serif].join(',')

/**
 * @fonts custom: unused
 */
// const f37bella = ['"F37 Bella"', ...fontFamily.serif].join(',')
// const f37bolton = ['"F37 Bolton"', ...fontFamily.sans].join(',')
// const f37ginger = ['"F37 Ginger"', ...fontFamily.sans].join(',')
// const f37gingerRound = ['"F37 Ginger Round"', ...fontFamily.sans].join(',')
// const iiIncrementalSans = ['II Incremental Sans', ...fontFamily.sans].join(',')
// const iiVorkurs = ['II Vorkurs', ...fontFamily.sans].join(',')
// const name = ['"Name Sans"', ...fontFamily.sans].join(',')

const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  reset,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      // ...amber,
      // ...amberA,
      ...blackA,
      ...blue,
      ...blueA,
      // ...bronze,
      // ...bronzeA,
      // ...brown,
      // ...brownA,
      // ...crimson,
      // ...crimsonA,
      // ...cyan,
      // ...cyanA,
      // ...gold,
      // ...goldA,
      // ...grass,
      // ...grassA,
      ...gray,
      ...grayA,
      ...green,
      ...greenA,
      // ...indigo,
      // ...indigoA,
      // ...lime,
      // ...limeA,
      // ...mauve,
      // ...mauveA,
      // ...mint,
      // ...mintA,
      // ...olive,
      // ...oliveA,
      ...orange,
      ...orangeA,
      // ...pink,
      // ...pinkA,
      // ...plum,
      // ...plumA,
      // ...purple,
      // ...purpleA,
      ...red,
      ...redA,
      // ...sage,
      // ...sageA,
      // ...sand,
      // ...sandA,
      // ...sky,
      // ...skyA,
      ...slate,
      ...slateA,
      // ...teal,
      // ...tealA,
      // ...tomato,
      // ...tomatoA,
      ...violet,
      ...violetA,
      ...whiteA,
      // ...yellow,
      // ...yellowA,

      // Semantic colors
      hiContrast: '$slate12',
      loContrast: '$slate1',
      // loContrast: 'white',
      canvas: 'hsl(0 0% 93%)',
      panel: 'white',
      transparentPanel: 'hsl(0 0% 0% / 97%)',
      shadowLight: 'hsl(206 22% 7% / 35%)',
      shadowDark: 'hsl(206 22% 7% / 20%)',
    },
    fonts: {
      mono,
      sans: inter,
      serif,
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    fontSizes: {
      1: '12px',
      2: '13px',
      3: '15px',
      4: '17px',
      5: '19px',
      6: '21px',
      7: '27px',
      8: '35px',
      9: '59px',
    },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      round: '50%',
      pill: '9999px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '999',
      toast: '2147483647',
    },
  },
  media: {
    bp1: '(min-width: 520px)',
    bp2: '(min-width: 900px)',
    bp3: '(min-width: 1200px)',
    bp4: '(min-width: 1800px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({ alignItems: value }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({ flexShrink: value }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    br: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    btrr: (value: Stitches.PropertyValue<'borderTopRightRadius'>) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: Stitches.PropertyValue<'borderBottomRightRadius'>) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: Stitches.PropertyValue<'borderBottomLeftRadius'>) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: Stitches.PropertyValue<'borderTopLeftRadius'>) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({ lineHeight: value }),

    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({
      pointerEvents: value,
    }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  },
})

/**
 * @theme dark
 */
const darkTheme = createTheme('dark-theme', {
  colors: {
    // ...amberDark,
    // ...amberDarkA,
    ...blueDark,
    ...blueDarkA,
    // ...bronzeDark,
    // ...bronzeDarkA,
    // ...brownDark,
    // ...brownDarkA,
    // ...crimsonDark,
    // ...crimsonDarkA,
    // ...cyanDark,
    // ...cyanDarkA,
    // ...goldDark,
    // ...goldDarkA,
    // ...grassDark,
    // ...grassDarkA,
    ...grayDark,
    ...grayDarkA,
    ...greenDark,
    ...greenDarkA,
    // ...indigoDark,
    // ...indigoDarkA,
    // ...limeDark,
    // ...limeDarkA,
    // ...mauveDark,
    // ...mauveDarkA,
    // ...mintDark,
    // ...mintDarkA,
    // ...oliveDark,
    // ...oliveDarkA,
    ...orangeDark,
    ...orangeDarkA,
    // ...pinkDark,
    // ...pinkDarkA,
    // ...plumDark,
    // ...plumDarkA,
    // ...purpleDark,
    // ...purpleDarkA,
    ...redDark,
    ...redDarkA,
    // ...sageDark,
    // ...sageDarkA,
    // ...sandDark,
    // ...sandDarkA,
    // ...skyDark,
    // ...skyDarkA,
    ...slateDark,
    ...slateDarkA,
    // ...tealDark,
    // ...tealDarkA,
    // ...tomatoDark,
    // ...tomatoDarkA,
    ...violetDark,
    ...violetDarkA,
    // ...yellowDark,
    // ...yellowDarkA,

    // Semantic colors
    hiContrast: '$slate12',
    loContrast: '$slate1',
    canvas: 'hsl(0 0% 15%)',
    panel: '$slate3',
    transparentPanel: 'hsl(0 100% 100% / 97%)',
    // shadowLight: 'hsl(206 22% 7% / 35%)',
    // shadowDark: 'hsl(206 22% 7% / 20%)',
    shadowLight: 'hsl(0 0% 25%)',
    shadowDark: 'hsl(0 0% 75%)',
  },
})

/**
 * @exports
 */
export type CSS = Stitches.CSS<typeof config>
export type { VariantProps } from '@stitches/react'
export {
  config,
  createTheme,
  darkTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  reset,
  styled,
  theme,
}
