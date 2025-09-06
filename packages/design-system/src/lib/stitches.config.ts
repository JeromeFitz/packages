import type { CSS as StitchesCSS } from '@stitches/react'

import { createStitches } from '@stitches/react'

import themes from './themes'
// import { grid } from './tokens/layout'
// import { gradients } from './tokens/gradients'
import { media } from './tokens/media'
import { radii } from './tokens/radii'
import { shadows } from './tokens/shadows'
import { sizes } from './tokens/sizes'
import { spaces as space } from './tokens/spaces'
import { fontSizes, fonts, fontWeights } from './tokens/typography'
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
    borderStyles: {},
    borderWidths: {},
    colors,
    fontSizes,
    fonts,
    fontWeights,
    foo: {
      bar: 'baz',
    },
    letterSpacings: {},
    lineHeights: {},
    radii,
    shadows,
    sizes,
    space,
    transitions: {},
    zIndices,
  },
  utils,
})

const darkTheme = createTheme('dark-theme', themes.dark)

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
  reset,
  styled,
  theme,
}
