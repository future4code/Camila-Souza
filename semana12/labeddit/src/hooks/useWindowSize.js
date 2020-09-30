import { useState, useEffect } from 'react'

export const getBreakPoint = (windowWidth) => {
  if (windowWidth) {
    if (windowWidth < 730) {
      return 'sm'
    } else if (windowWidth < 1100) {
      return 'md'
    } else {
      return 'lg'
    }
  } else {
    return undefined
  }
}
export function useWindowSize() {
  const isWindowClient = (typeof window === 'object')
  const [windowSize, setWindowSize] = useState(isWindowClient ? getBreakPoint(window.innerWidth) : undefined)
  useEffect(() => {
    function setSize() {
      setWindowSize(getBreakPoint(window.innerWidth))
    }
    if (isWindowClient) {
      window.addEventListener('resize', setSize)
      window.addEventListener('orientationchange', setSize)
      return () => {
        window.removeEventListener('resize', setSize)
        window.removeEventListener('orientationchange', setSize)
      }
    }
  }, [isWindowClient, setWindowSize])
  return windowSize
}