/**
 * @todo(types)
 */
const optionsSet = (cliOptions: { mode: string }) => {
  const options: any = {}

  if (cliOptions.mode === 'branch') {
    options.branchFlag = true
  } else {
    options.branchFlag = false
  }

  return options
}

export default optionsSet
