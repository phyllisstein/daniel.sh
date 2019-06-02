import {useEffect, useState} from 'react'
import {addEventListener} from 'consolidated-events'
import {canUseDOM} from 'exenv-es6'

const useScrollPosition = () => {
  const [scroll, setScroll] = useState({x: 0, y: 0})

  useEffect(() => {
    if (!canUseDOM) {
      return
    }

    let requestRunning
    const handleScroll = e => {
      cancelAnimationFrame(requestRunning)
      requestRunning = requestAnimationFrame(() => {
        setScroll(
          e.target === window
            ? {x: window.scrollX, y: window.scrollY}
            : {x: e.target.scrollLeft, y: e.target.scrollTop},
        )
        requestRunning = null
      })
    }

    const removeScrollListener = addEventListener(window, 'scroll', handleScroll, {capture: true, passive: true})

    return () => {
      cancelAnimationFrame(requestRunning)
      removeScrollListener()
    }
  }, [])

  return scroll
}

export default useScrollPosition
