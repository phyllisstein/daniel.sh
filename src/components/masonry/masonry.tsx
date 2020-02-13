import React, { Children, FunctionComponent, ReactNode, useLayoutEffect } from 'react'
import { MasonryItem } from './masonry-item'
import { MasonryRoot } from 'styles/components/masonry'
import ReactDOM from 'react-dom'
import { useMeasure } from 'hooks'

export interface MasonryProps {
  columns: number
}

export const Masonry: FunctionComponent<MasonryProps> = ({ children, columns }) => {
  const observers = new Map<ReactNode, any>()
  const columnHeights = new Array(columns).fill(0)
  const [bindRoot, { width: rootWidth }] = useMeasure()

  const calculateChildHeight = (container: ReactNode) => {
    const containerEl = ReactDOM.findDOMNode(container)
    if (!containerEl || observers.has(containerEl)) return

    const observer = new ResizeObserver(([entry]) => {
      const { height } = entry.contentRect
      const column = columnHeights.indexOf(Math.min(...columnHeights))

      const x = rootWidth / columns * column
      const y = columnHeights[column]

      entry.target.style.position = 'absolute'
      entry.target.style.transform = `translate3d(${ x }px, ${ y }px, 0)`

      columnHeights[column] += height
    })

    observers.set(containerEl, observer)
  }

  const clonedChildren = Children.map(children, (child, index) => {
    return (
      <MasonryItem key={ index } ref={ calculateChildHeight }>
        { child }
      </MasonryItem>
    )
  })

  useLayoutEffect(
    () => {
      observers.forEach((observer, container) => observer.observe(container))

      return () => {
        observers.forEach(observer => observer.disconnect())
      }
    },
  )

  return (
    <MasonryRoot { ...bindRoot }>
      { clonedChildren }
    </MasonryRoot>
  )
}
