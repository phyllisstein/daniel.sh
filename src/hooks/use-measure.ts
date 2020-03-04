import { MutableRefObject, useEffect, useRef, useState } from 'react'

interface Bounds {
  height: number
  left: number
  top: number
  width: number
}

export const useMeasure = (): [MutableRefObject<any>, Bounds] => {
  const ref = useRef(null)
  const [bounds, set] = useState<Bounds>({ height: 0, left: 0, top: 0, width: 0 })
  const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
  useEffect(
    () => {
      const el = ref.current
      ro.observe(el)
      return () => ro.unobserve(el)
    },
    [ref, ro],
  )

  return [{ ref }, bounds]
}
