const MS_DELAY = 250

async function avoidRateLimit(ms = MS_DELAY) {
  // if (process.env.NODE_ENV === 'production') {
  await sleep(ms)
  // }
}

function sleep(ms = MS_DELAY) {
  return new Promise((res) => setTimeout(res, ms))
}

export default avoidRateLimit
