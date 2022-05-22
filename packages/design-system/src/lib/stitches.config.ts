import { createStitches } from '@stitches/react'
import type { CSS as StitchesCSS } from '@stitches/react'

import themes from './themes'
// import { grid } from './tokens/layout'
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

const darkTheme = createTheme('dark-theme', themes.dark)

export type CSS = StitchesCSS<typeof config>
export type { VariantProps } from '@stitches/react'

// export { Gradients } from './tokens/gradients'
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
