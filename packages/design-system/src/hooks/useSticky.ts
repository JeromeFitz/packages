import * as React from 'react'

const useSticky = (fixRef: {
  current: { getBoundingClientRect: () => { (): any; new (): any; top: any } }
}) => {
  const [isFix, setIsFix] = React.useState(false)

  React.useEffect(() => {
    const stickyPosY = fixRef.current.getBoundingClientRect().top

    const onScroll = () => {
      if (window.scrollY > stickyPosY) {
        setIsFix(true)
      } else {
        setIsFix(false)
      }
    }
    window.addEventListener('scroll', onScroll, true)

    return () => {
      window.removeEventListener('scroll', onScroll, true)
    }
  }, [fixRef])

  return {
    isFix,
  }
}
export default useSticky
