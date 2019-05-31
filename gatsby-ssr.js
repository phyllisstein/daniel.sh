import React from 'react'
import { Root } from 'components'

export const wrapPageElement = ({ element, props }) => (
  <Root { ...props }>
    { element }
  </Root>
)
