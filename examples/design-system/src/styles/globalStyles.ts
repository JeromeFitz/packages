const globalCss = {}

const globalRoot = {
  // '--fonts-sans': 'Inter',
  // '--colors-body': 'yellow',
}

const globalStyles = {
  ':root': {
    ...globalRoot,
  },
  ...globalCss,
}

export { globalStyles }
