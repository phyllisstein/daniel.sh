import React, { FunctionComponent } from 'react'
import { CardRoot } from 'styles/components/card'

export const Card: FunctionComponent = ({ children }) => (
  <CardRoot>
    { children }
  </CardRoot>
)
