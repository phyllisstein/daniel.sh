import { BaseH } from './styled'
import React from 'react'

function H({ children, primary = false, size = 3, ...props } = {}) {
  return (
    <BaseH as={ `h${ size }` } primary={ primary } size={ size } { ...props }>
      { children }
    </BaseH>
  )
}

export default H
