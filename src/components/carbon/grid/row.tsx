import React, { FunctionComponent } from 'react'
import cx from 'classnames'

interface RowProps {
  className?: string
}

export const Row: FunctionComponent<RowProps> = ({ children, className }) =>
  <div className={ cx(className, 'bx--row') }>
    { children }
  </div>
