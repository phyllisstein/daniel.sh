import React, { FunctionComponent } from 'react'
import cx from 'classnames'

export interface GridProps {
  className?: string
  full?: boolean
}

export const Grid: FunctionComponent<GridProps> = ({ children, className, full }) =>
  <div className={ cx(className, 'bx--grid', { 'bx--grid--full-width': full }) }>
    { children }
  </div>
