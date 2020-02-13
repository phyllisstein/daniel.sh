import { useCallback, useEffect, useState } from 'react'
import { addEventListener } from 'consolidated-events'

export const useMedia = (queries: string[], values: number[], defaultValue: number) => {
  const match = useCallback(
    () => values[queries.findIndex(q => matchMedia(q).matches)] || defaultValue,
    [defaultValue, queries, values],
  )

  const [value, set] = useState(match)

  useEffect(
    () => addEventListener(window, 'resize', () => set(match)),
    [match],
  )

  return value
}
