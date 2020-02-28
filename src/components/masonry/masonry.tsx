import React, { Children, FunctionComponent, LegacyRef, ReactNode, useLayoutEffect } from 'react'
import { MasonryItem } from './masonry-item'
import { MasonryRoot } from 'styles/components/masonry'
import ReactDOM from 'react-dom'
import { useMeasure } from 'hooks'

export interface MasonryProps {
  columns: number
}

export const Masonry: FunctionComponent<MasonryProps> = ({ children, columns }) => {
  const observers = new Map<ReactNode, HTMLElement>()
  const columnHeights = new Array(columns).fill(0)
  const [bindRoot, { width: rootWidth }] = useMeasure()

  const positionChild = (component: LegacyRef<MasonryItem>) => {
    const container = ReactDOM.findDOMNode(component)
    if (!container) return

    const { height } = container.getBoundingClientRect() || {}
    const column = columnHeights.indexOf(Math.min(...columnHeights))

    const width = rootWidth / columns
    const x = width * column
    const y = columnHeights[column]

    container.style.position = 'absolute'
    container.style.transform = `translate3d(${ x }px, ${ y }px, 0)`

    columnHeights[column] += height
  }

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
