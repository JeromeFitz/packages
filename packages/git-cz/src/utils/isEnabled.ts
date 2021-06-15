/**
 * @note Bounce if config overrides, double-check false string (process.env)
 */
const isEnabled = (state) => {
  const _isEnabled =
    state?.config?.enabled === 'false' ? false : state?.config?.enabled
  if (!_isEnabled) {
    process.exit(1)
  }
  return _isEnabled
}

export default isEnabled
