/**
 * @ref https://github.com/rehooks/online-status
 * @license https://raw.githubusercontent.com/rehooks/online-status/master/LICENSE
 */
import * as React from 'react'

function getOnlineStatus() {
  return typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean'
    ? navigator.onLine
    : true
}

function useOnlineStatus() {
  const [onlineStatus, setOnlineStatus] = React.useState(getOnlineStatus())

  const goOnline = () => setOnlineStatus(true)

  const goOffline = () => setOnlineStatus(false)

  React.useEffect(() => {
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)

    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [])

  return onlineStatus
}

export default useOnlineStatus
