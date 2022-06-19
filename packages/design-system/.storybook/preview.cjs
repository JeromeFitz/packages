const REGEX_REMOVE_FC = /^\(\) => `(.*)`$/

export const parameters = {
  chromatic: { disable: true },
  controls: { expanded: false },
  docs: {
    transformSource: (src, storyContext) => {
      const match = REGEX_REMOVE_FC.exec(src)
      return match ? match[1] : src
    },
  },
}
