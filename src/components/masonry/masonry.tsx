import React, { Children, FunctionComponent, useCallback, useDebugValue, useEffect, useRef, useState } from 'react'
import { MasonryItem } from './masonry-item'
import { MasonryRoot } from './masonry-styles'
import ReactDOM from 'react-dom'
import { useMeasure } from 'hooks'

export interface MasonryProps {
  columns: number
}

export const Masonry: FunctionComponent<MasonryProps> = ({ children, columns }) => {
  const [childEls, setChildEls] = useState(new Set<Element>())

  const [bindRoot, bounds] = useMeasure()

  const resizeEls = useCallback(
    entries => {
      const columnHeights = new Array(columns).fill(0)

      entries.forEach(entry => {
        const { height } = entry.contentRect
        const column = columnHeights.indexOf(Math.min(...columnHeights))

        const width = bounds.width / columns
        const x = width * column
        const y = columnHeights[column]

        entry.target.style.position = 'absolute'
        entry.target.style.transform = `translate3d(${ x }px, ${ y }px, 0)`

        columnHeights[column] += height
      })
    },
    [bounds, columns],
  )

  const observer = new ResizeObserver(resizeEls)

  const positionChild = useCallback(
    (component: MasonryItem) => {
      const container = ReactDOM.findDOMNode(component)
      if (!container || childEls.has(container)) return
      setChildEls(c => c.add(container))
    },
    [childEls],
  )

  useEffect(
    () => {
      childEls.forEach(child => { observer.observe(child) })
      return () => childEls.forEach(child => { observer.unobserve(child) })
    },
    [childEls, observer],
  )

  const clonedChildren = Children.map(children, (child, index) => {
    return (
      <MasonryItem key={ index } ref={ positionChild }>
        { child }
      </MasonryItem>
    )
  })

  return (
    <MasonryRoot { ...bindRoot }>
      { clonedChildren }
    </MasonryRoot>
  )
}
