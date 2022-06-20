import { Box } from '../src/components'
import { globalStyles as globalStylesDefault } from '../src/lib/globalStyles'
import { globalCss, getCssText, reset } from '../src/lib/stitches.config'
import _merge from 'lodash/merge'
import React from 'react'
import { withThemes } from 'storybook-addon-themes/react'

import { globalStyles as globalStylesLocal } from '../../../examples/design-system/src/styles/globalStyles'

const globalStyles = _merge(globalStylesDefault, globalStylesLocal)

const getCssAndReset = () => {
  const css = getCssText()
  reset()
  return css
}

export const decorators: any = [
  (Story) => {
    React.useEffect(() => {
      console.dir(`🤕 stitches: once`)
      console.dir(globalStyles)
      // globalCss(globalStyles)()
    }, [])
    return (
      <>
        {/* <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssAndReset() }}
        /> */}
        <Box
          css={{
            backgroundColor: '$body',
            fontFamily: '$sans',
            margin: 0,
            MozOsxFontSmoothing: 'grayscale',
            WebkitFontSmoothing: 'antialiased',
            WebkitTextSizeAdjust: '100%',
          }}
        >
          <Story />
        </Box>
      </>
    )
  },
  withThemes,
]

// export const decorators = [withThemes]
// // addDecorator(withThemes)

const REGEX_REMOVE_FC = /^\(\) => `(.*)`$/

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  chromatic: { disable: true },
  controls: { expanded: false },
  docs: {
    transformSource: (src, storyContext) => {
      const match = REGEX_REMOVE_FC.exec(src)
      return match ? match[1] : src
    },
  },
  themes: {
    default: 'darkTheme',
    list: [
      {
        name: 'darkTheme',
        class: ['dark-theme'],
        style: {
          colorScheme: 'dark',
        },
        color: 'black',
      },
      {
        name: 'lightTheme',
        class: ['light-theme'],
        style: {
          colorScheme: 'light',
        },
        color: 'yellow',
      },
    ],
  },
}
