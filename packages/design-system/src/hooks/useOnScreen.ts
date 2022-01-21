import * as React from 'react'

function useOnScreen(ref: React.MutableRefObject<undefined>) {
  const [isIntersecting, setIntersecting] = React.useState(false)

  React.useEffect(() => {
    if (!ref.current) return null

    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isIntersecting
}

export default useOnScreen
