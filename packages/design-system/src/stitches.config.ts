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
import type { CSS as StitchesCSS, ScaleValue } from '@stitches/react'

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
      gradient:
        'linear-gradient(112deg, $blue500 -63.59%, $red500 -20.3%, $violet500 70.46%)',
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
    p: (value: ScaleValue<'padding'> | string | number) => ({
      padding: value,
    }),
    pt: (value: ScaleValue<'paddingTop'> | string | number) => ({
      paddingTop: value,
    }),
    pr: (value: ScaleValue<'paddingRight'> | string | number) => ({
      paddingRight: value,
    }),
    pb: (value: ScaleValue<'paddingBottom'> | string | number) => ({
      paddingBottom: value,
    }),
    pl: (value: ScaleValue<'paddingLeft'> | string | number) => ({
      paddingLeft: value,
    }),
    px: (value: ScaleValue<'paddingLeft'> | string | number) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: ScaleValue<'paddingTop'> | string | number) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: ScaleValue<'margin'> | string | number) => ({
      margin: value,
    }),
    mt: (value: ScaleValue<'marginTop'> | string | number) => ({
      marginTop: value,
    }),
    mr: (value: ScaleValue<'marginRight'> | string | number) => ({
      marginRight: value,
    }),
    mb: (value: ScaleValue<'marginBottom'> | string | number) => ({
      marginBottom: value,
    }),
    ml: (value: ScaleValue<'marginLeft'> | string | number) => ({
      marginLeft: value,
    }),
    mx: (value: ScaleValue<'marginLeft'> | string | number) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: ScaleValue<'marginTop'> | string | number) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: ScaleValue<'textAlign'> | string | number) => ({ textAlign: value }),

    fd: (value: ScaleValue<'flexDirection'> | string | number) => ({
      flexDirection: value,
    }),
    fw: (value: ScaleValue<'flexWrap'> | string | number) => ({ flexWrap: value }),

    ai: (value: ScaleValue<'alignItems'> | string | number) => ({
      alignItems: value,
    }),
    ac: (value: ScaleValue<'alignContent'> | string | number) => ({
      alignContent: value,
    }),
    jc: (value: ScaleValue<'justifyContent'> | string | number) => ({
      justifyContent: value,
    }),
    as: (value: ScaleValue<'alignSelf'> | string | number) => ({ alignSelf: value }),
    fg: (value: ScaleValue<'flexGrow'> | string | number) => ({ flexGrow: value }),
    fs: (value: ScaleValue<'flexShrink'> | string | number) => ({
      flexShrink: value,
    }),
    fb: (value: ScaleValue<'flexBasis'> | string | number) => ({ flexBasis: value }),

    bc: (value: ScaleValue<'backgroundColor'> | string | number) => ({
      backgroundColor: value,
    }),

    br: (value: ScaleValue<'borderRadius'> | string | number) => ({
      borderRadius: value,
    }),
    btrr: (value: ScaleValue<'borderTopRightRadius'> | string | number) => ({
      borderTopRightRadius: value,
    }),
    bbrr: (value: ScaleValue<'borderBottomRightRadius'> | string | number) => ({
      borderBottomRightRadius: value,
    }),
    bblr: (value: ScaleValue<'borderBottomLeftRadius'> | string | number) => ({
      borderBottomLeftRadius: value,
    }),
    btlr: (value: ScaleValue<'borderTopLeftRadius'> | string | number) => ({
      borderTopLeftRadius: value,
    }),

    bs: (value: ScaleValue<'boxShadow'> | string | number) => ({ boxShadow: value }),

    lh: (value: ScaleValue<'lineHeight'> | string | number) => ({
      lineHeight: value,
    }),

    ox: (value: ScaleValue<'overflowX'> | string | number) => ({ overflowX: value }),
    oy: (value: ScaleValue<'overflowY'> | string | number) => ({ overflowY: value }),

    pe: (value: ScaleValue<'pointerEvents'> | string | number) => ({
      pointerEvents: value,
    }),
    us: (value: ScaleValue<'userSelect'> | string | number) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: ScaleValue<'userSelect'> | string | number) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: ScaleValue<'width'> | string | number) => ({
      width: value,
      height: value,
    }),

    appearance: (value: ScaleValue<'appearance'> | string | number) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: ScaleValue<'backgroundClip'> | string | number) => ({
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
export type CSS = StitchesCSS<typeof config>
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
