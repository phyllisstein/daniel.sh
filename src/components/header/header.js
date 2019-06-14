import { H } from './styled'
import React from 'react'

function Header({ accent = true, children, size = 3, ...props } = {}) {
  return (
    <H accentType={ accent } as={ `h${ size }` } interval={ size } { ...props }>
      { children }
    </H>
  )
}

export default React.memo(Header)
