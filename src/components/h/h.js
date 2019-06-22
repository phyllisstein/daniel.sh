import { BaseH } from './styled-h'
import React from 'react'

function H({ children, primary = false, size = 3, className } = {}) {
  return (
    <BaseH as={ `h${ size }` } className={ className } primary={ primary } size={ size }>
      { children }
    </BaseH>
  )
}

export default H
