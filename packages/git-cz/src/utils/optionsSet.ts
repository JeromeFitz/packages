const optionsSet = (cliOptions) => {
  // @todo(types)
  const options: any = {}

  if (cliOptions.mode === 'branch') {
    options.branchFlag = true
  } else {
    options.branchFlag = false
  }

  return options
}

export default optionsSet
