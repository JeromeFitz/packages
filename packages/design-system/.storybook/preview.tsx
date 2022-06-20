import { Box } from '../src/components'
import { lightTheme, darkTheme } from '../src/lib/stitches.config'

export const decorators = [
  (Story) => {
    return (
      <Box css={{ p: '$4' }}>
        <Story />
      </Box>
    )
  },
]
const REGEX_REMOVE_FC = /^\(\) => `(.*)`$/

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  chromatic: { disable: true },
  controls: { expanded: false },
  docs: {
    // transformSource: (src, storyContext) => {
    transformSource: (src) => {
      const match = REGEX_REMOVE_FC.exec(src)
      return match ? match[1] : src
    },
  },
  globals: { theme: { value: 'Light' } },
  layout: 'fullscreen',
  multipleThemesStitches: {
    default: 'Light',
    values: [
      {
        name: 'Light',
        theme: lightTheme,
      },
      {
        name: 'Dark',
        theme: darkTheme,
      },
    ],
  },
}
