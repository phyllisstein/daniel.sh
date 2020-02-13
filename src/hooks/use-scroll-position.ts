import { useEffect, useState } from 'react'
import { addEventListener } from 'consolidated-events'
import { canUseDOM } from 'exenv-es6'

export const useScrollPosition = () => {
  const [scroll, setScroll] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!canUseDOM) {
      return
    }

    let requestRunning: number | null
    const handleScroll = (e: Event) => {
      if (requestRunning) {
        cancelAnimationFrame(requestRunning)
      }

      requestRunning = requestAnimationFrame(() => {
        setScroll(
          e.target === window
            ? { x: window.scrollX, y: window.scrollY }
            : { x: (e.target as Element).scrollLeft, y: (e.target as Element).scrollTop },
        )
        requestRunning = null
      })
    }

    const removeScrollListener = addEventListener(window, 'scroll', handleScroll, { capture: true, passive: true })

    return () => {
      if (requestRunning) {
        cancelAnimationFrame(requestRunning)
      }

      removeScrollListener()
    }
  }, [])

  return scroll
}
