import { useEffect, useRef, useState } from 'react'

export const useMeasure = () => {
  const ref = useRef(null)
  const [bounds, set] = useState({ height: 0, left: 0, top: 0, width: 0 })
  const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
  useEffect(
    () => {
      ro.observe(ref.current)
    },
    [ref, ro],
  )

  return [{ ref }, bounds]
}
