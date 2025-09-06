import type { MutableRefObject } from 'react'

import { useEffect, useState } from 'react'

function useOnScreen(ref: MutableRefObject<undefined>) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    if (!ref.current) return null

    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  return isIntersecting
}

export default useOnScreen
