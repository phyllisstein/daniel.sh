/* eslint-disable react/no-multi-comp */

import Provider from 'components/provider'
import React from 'react'
import Root from 'components/root'

export const wrapPageElement = ({ element, props }) => (
  <Root { ...props }>
    { element }
  </Root>
)

export const wrapRootElement = ({ element }) => (
  <Provider>
    { element }
  </Provider>
)
