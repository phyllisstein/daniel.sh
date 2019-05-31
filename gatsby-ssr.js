import React from 'react'
import Root from 'components/root'

export const wrapPageElement = ({ element, props }) => (
  <Root { ...props }>
    { element }
  </Root>
)
