const MS_DELAY = 250

async function avoidRateLimit() {
  // if (process.env.NODE_ENV === 'production') {
  await sleep()
  // }
}

function sleep(ms = MS_DELAY) {
  return new Promise((res) => setTimeout(res, ms))
}

export default avoidRateLimit
