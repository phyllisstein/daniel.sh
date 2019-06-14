import { H } from './styled'
import React from 'react'

function Header({ accent = true, children, size = 3, ...props } = {}) {
  return (
    <H accent={ accent } as={ `h${ size }` } size={ size } { ...props }>
      { children }
    </H>
  )
}

export default Header
