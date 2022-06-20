import {
  blackA,
  blue,
  blueA,
  blueDark,
  blueDarkA,
  gray,
  grayA,
  grayDark,
  grayDarkA,
  green,
  greenA,
  greenDark,
  greenDarkA,
  orange,
  orangeA,
  orangeDark,
  orangeDarkA,
  red,
  redA,
  redDark,
  redDarkA,
  slate,
  slateA,
  slateDark,
  slateDarkA,
  violet,
  violetA,
  violetDark,
  violetDarkA,
  whiteA,
} from '@radix-ui/colors'

// @todo(types)
type Colors = any
type Themes = {
  dark: {
    colors: Colors
  }
  light: {
    colors: Colors
  }
}

/**
 * @todo(theme) actual branding and HOWTO
 */
const brand = {
  brand1: blue.blue1,
  brand2: blue.blue2,
  brand3: blue.blue3,
  brand4: blue.blue4,
  brand5: blue.blue5,
  brand6: blue.blue6,
  brand7: blue.blue7,
  brand8: blue.blue8,
  brand9: blue.blue9,
  brand10: blue.blue10,
  brand11: blue.blue11,
  brand12: blue.blue12,
  brandA1: blueA.blueA1,
  brandA2: blueA.blueA2,
  brandA3: blueA.blueA3,
  brandA4: blueA.blueA4,
  brandA5: blueA.blueA5,
  brandA6: blueA.blueA6,
  brandA7: blueA.blueA7,
  brandA8: blueA.blueA8,
  brandA9: blueA.blueA9,
  brandA10: blueA.blueA10,
  brandA11: blueA.blueA11,
  brandA12: blueA.blueA12,
}
const brandDark = {
  brand1: blueDark.blue1,
  brand2: blueDark.blue2,
  brand3: blueDark.blue3,
  brand4: blueDark.blue4,
  brand5: blueDark.blue5,
  brand6: blueDark.blue6,
  brand7: blueDark.blue7,
  brand8: blueDark.blue8,
  brand9: blueDark.blue9,
  brand10: blueDark.blue10,
  brand11: blueDark.blue11,
  brand12: blueDark.blue12,
  brandA1: blueDarkA.blueA1,
  brandA2: blueDarkA.blueA2,
  brandA3: blueDarkA.blueA3,
  brandA4: blueDarkA.blueA4,
  brandA5: blueDarkA.blueA5,
  brandA6: blueDarkA.blueA6,
  brandA7: blueDarkA.blueA7,
  brandA8: blueDarkA.blueA8,
  brandA9: blueDarkA.blueA9,
  brandA10: blueDarkA.blueA10,
  brandA11: blueDarkA.blueA11,
  brandA12: blueDarkA.blueA12,
}

/**
 * @note(themes) light === root
 *               This comes first as it is the default theme
 *               Anything _not_ in dark, comes from default.
 */
const themes: Themes = {
  light: {
    colors: {
      ...brand,
      //
      ...blackA,
      ...blue,
      ...blueA,
      ...gray,
      ...grayA,
      ...green,
      ...greenA,
      ...orange,
      ...orangeA,
      ...red,
      ...redA,
      ...slate,
      ...slateA,
      ...violet,
      ...violetA,
      ...whiteA,
      hiContrast: '$slate12',
      loContrast: '$slate1',
      /**
       * Brand Guidelines
       */
      body: '$colors$gray1',
      brand: '$colors$blue11',
      canvas: 'hsl(0 0% 93%)',
      emphasis: '$colors$violet11',
      foreground: '$colors$green11',
      header: '$colors$blue11',
      panel: 'white',
      panelTransparent: '$colors$blackA5',
      // panelTransparent: 'hsl(0 0% 0% / 97%)',
      // shadow: 'hsl(206 22% 7% / 20%)',
      shadow: '$colors$blackA9',
      shadowSecondary: '$colors$blackA8',
      // State
      disabled: '$colores$slate3',
      disabledBackground: 'transparent',
      focus: '$colors$blue12',
      focusBackground: '$colors$blackA3',
      hover: '$colors$blue12',
      hoverBackground: '$colors$blackA4',
      open: '$colors$blue11',
      openBackground: '$colors$blackA5',
      // // Status
      // error
      error: '$colors$red11',
      errorHover: '$colors$red10',
      errorEmphasis: '$colors$red9',
      errorEmphasisHover: '$colors$red8',
      errorBackground: '$colors$red3',
      errorBackgroundHover: '$colors$red4',
      errorBorder: '$colors$red6',
      errorText: '$colors$red11',
      errorTextHover: '$colors$red12',
      // info
      info: '$colors$blue11',
      infoHover: '$colors$blue10',
      infoEmphasis: '$colors$blue9',
      infoEmphasisHover: '$colors$blue8',
      infoBackground: '$colors$blue3',
      infoBackgroundHover: '$colors$blue4',
      infoBorder: '$colors$blue6',
      infoText: '$colors$blue11',
      infoTextHover: '$colors$blue12',
      // success
      success: '$colors$green11',
      successHover: '$colors$green10',
      successEmphasis: '$colors$green9',
      successEmphasisHover: '$colors$green8',
      successBackground: '$colors$green3',
      successBackgroundHover: '$colors$green4',
      successBorder: '$colors$green6',
      successText: '$colors$green11',
      successTextHover: '$colors$green12',
      // warning
      warning: '$colors$orange11',
      warningHover: '$colors$orange10',
      warningEmphasis: '$colors$orange9',
      warningEmphasisHover: '$colors$orange8',
      warningBackground: '$colors$orange3',
      warningBackgroundHover: '$colors$orange4',
      warningBorder: '$colors$orange6',
      warningText: '$colors$orange11',
      warningTextHover: '$colors$orange12',

      // Typeface
      typefacePrimary: '$colors$slate12',
      typefaceSecondary: '$colors$slate11',
      typefaceTertiary: '$colors$orange11',
      typefaceDanger: '$colors$gray11',
    },
  },
  dark: {
    colors: {
      // Palette
      ...brandDark,
      //
      ...blueDark,
      ...blueDarkA,
      ...grayDark,
      ...grayDarkA,
      ...greenDark,
      ...greenDarkA,
      ...orangeDark,
      ...orangeDarkA,
      ...redDark,
      ...redDarkA,
      ...slateDark,
      ...slateDarkA,
      ...violetDark,
      ...violetDarkA,
      // hiContrast: '$slate12',
      // loContrast: '$slate1',
      /**
       * Brand Guidelines
       */
      // body: '',
      // brand: '',
      canvas: 'hsl(0 0% 15%)',
      // emphasis: '',
      // foreground: '',
      // header: '',
      // hover: '',
      panel: '$slate3',
      panelTransparent: '$colors$whiteA5',
      // shadow: 'hsl(0 0% 75%)',
      shadow: '$colors$whiteA7',
      shadowSecondary: '$colors$whiteA6',
      transparentPanel: 'hsl(0 100% 100% / 97%)',
      // State
      // disabled: '$colores$slate3',
      // disabledBackground: 'transparent',
      // focus: '$colors$blue12',
      focusBackground: '$colors$whiteA3',
      // hover: '$colors$blue12',
      hoverBackground: '$colors$whiteA4',
      // open: '$colors$blue11',
      openBackground: '$colors$whiteA5',
      // // Status
      // error: '',
      // errorEmphasis: '',
      // warning: '',
      // warningEmphasis: '',
      // success: '',
      // successEmphasis: '',
      // // Typeface
      // typefacePrimary: '',
      // typefaceSecondary: '',
      // typefaceTertiary: '',
      // typefaceDanger: '',
    },
  },
}

export default themes
