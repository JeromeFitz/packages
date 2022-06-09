const globalCss = {
  // '.hi2ri': {
  //   '& > path': {
  //     color: 'green !important',
  //     strokeWidth: '1.5 !important',
  //   },
  // },
}

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
