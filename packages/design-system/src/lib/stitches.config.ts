import { createStitches } from '@stitches/react'
import type { CSS as StitchesCSS } from '@stitches/react'

import themes from './themes'
// import { grid } from './tokens/layout'
// import { gradients } from './tokens/gradients'
import { media } from './tokens/media'
import { radii } from './tokens/radii'
import { shadows } from './tokens/shadows'
import { sizes } from './tokens/sizes'
import { spaces as space } from './tokens/spaces'
import { fonts, fontSizes, fontWeights } from './tokens/typography'
import { utils } from './tokens/utils'
import { zIndices } from './tokens/z-indices'

// @note(stitches) init theme with lightColors
const colors = themes.light.colors

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
  media,
  theme: {
    borderWidths: {},
    borderStyles: {},
    colors,
    fonts,
    fontSizes,
    fontWeights,
    letterSpacings: {},
    lineHeights: {},
    radii,
    shadows,
    sizes,
    space,
    transitions: {},
    zIndices,
    foo: {
      bar: 'baz',
    },
  },
  utils,
})

/**
 * @note(storybook) duplicating root and light-theme currently
 *                  please do not do this for non-storybook
 *                  this will add like +200 dupe css vars
 */
const darkTheme = createTheme('dark-theme', themes.dark)
const lightTheme = createTheme('light-theme', themes.light)

export type CSS = StitchesCSS<typeof config>
export type { VariantProps } from '@stitches/react'

export {
  config,
  createTheme,
  css,
  darkTheme,
  getCssText,
  globalCss,
  keyframes,
  lightTheme,
  reset,
  styled,
  theme,
}
