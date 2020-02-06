import React, { FunctionComponent } from 'react'
import { Base } from 'styles/components/h'

export interface Props {
  primary?: boolean
  size?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
}

export const H: FunctionComponent<Props> = ({ children, primary = false, size = 3, className } = {}) => {
  const el = `h${ size }` as unknown as 'h1'

  return (
    <Base as={ el } className={ className } primaryType={ primary } scaleUnit={ size }>
      { children }
    </Base>
  )
}
