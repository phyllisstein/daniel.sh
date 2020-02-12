import React, { FunctionComponent } from 'react'
import cx from 'classnames'

export interface ColumnProps {
  className?: string
  large?: number
  max?: number
  medium?: number
  small?: number
  xl?: number
}

export const Column: FunctionComponent<ColumnProps> = ({ children, className, large, max, medium, small, xl }) => {
  const cols = []
  large && cols.push(`bx--col-lg-${ large }`)
  max && cols.push(`bx--col-max-${ max }`)
  medium && cols.push(`bx--col-md-${ medium }`)
  small && cols.push(`bx--col-sm-${ small }`)
  xl && cols.push(`bx--col-xl-${ xl }`)

  return (
    <div className={ cx(className, cols) }>
      { children }
    </div>
  )
}
